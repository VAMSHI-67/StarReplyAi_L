import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path for local storage file when running in standard Node.js server
const DATA_DIR = path.join(process.cwd(), "data");
const WAITLIST_FILE = path.join(DATA_DIR, "waitlist.json");

interface WaitlistEntry {
  id: string;
  email: string;
  businessName?: string;
  language?: string;
  createdAt: string;
  userAgent?: string;
  ip?: string;
}

// Memory cache fallback for serverless environments where local fs might be ephemeral
let memoryStore: WaitlistEntry[] = [];

function getStoredEntries(): WaitlistEntry[] {
  try {
    if (fs.existsSync(WAITLIST_FILE)) {
      const fileData = fs.readFileSync(WAITLIST_FILE, "utf-8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch {
    // If fs is unavailable (e.g. read-only serverless filesystem), fall back to memory
  }
  return memoryStore;
}

function saveEntries(entries: WaitlistEntry[]): void {
  memoryStore = entries;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(entries, null, 2), "utf-8");
  } catch {
    // Serverless fallback: data stored in memory
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, businessName, language } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. you@example.com)." },
        { status: 400 }
      );
    }

    const entries = getStoredEntries();

    // Check if already registered
    const existingIndex = entries.findIndex(
      (entry) => entry.email.toLowerCase() === trimmedEmail
    );

    const now = new Date().toISOString();

    if (existingIndex !== -1) {
      return NextResponse.json(
        {
          success: true,
          message: "You're already on the waitlist! We'll keep you updated with priority access.",
          alreadyRegistered: true,
        },
        { status: 200 }
      );
    }

    const newEntry: WaitlistEntry = {
      id: `wl_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      email: trimmedEmail,
      businessName: businessName ? String(businessName).trim() : undefined,
      language: language ? String(language).trim() : undefined,
      createdAt: now,
      userAgent: request.headers.get("user-agent") || undefined,
    };

    entries.push(newEntry);
    saveEntries(entries);

    // Optional webhook forwarder if configured in env (e.g., Zapier, Discord, Make, Resend)
    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEntry),
        });
      } catch (webhookErr) {
        console.warn("Optional webhook dispatch failed:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "You're in! Thank you for joining the StarReply AI early access waitlist.",
        id: newEntry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email vamshi@starreply.tech directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const entries = getStoredEntries();
  return NextResponse.json(
    {
      status: "ok",
      count: entries.length,
      brand: "StarReply AI",
    },
    { status: 200 }
  );
}
