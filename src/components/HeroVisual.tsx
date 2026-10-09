"use client";

import React, { useState } from "react";
import {
  Star,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Send,
  Languages,
  Check,
  Smartphone,
  MapPin,
} from "lucide-react";

type LanguageKey = "en" | "hi" | "te" | "ta";

interface DemoSample {
  langName: string;
  nativeName: string;
  flag: string;
  businessName: string;
  businessType: string;
  city: string;
  reviewerName: string;
  reviewerBadge: string;
  rating: number;
  reviewText: string;
  reviewTime: string;
  aiReplyText: string;
  tone: string;
  whatsappMessage: string;
}

const DEMO_SAMPLES: Record<LanguageKey, DemoSample> = {
  en: {
    langName: "English",
    nativeName: "English",
    flag: "🇬🇧",
    businessName: "Royal Spice Bistro",
    businessType: "Restaurant",
    city: "Indiranagar, Bengaluru",
    reviewerName: "Pooja Hegde",
    reviewerBadge: "Local Guide • 42 reviews",
    rating: 5,
    reviewText:
      "Loved the paneer butter masala and garlic naan! The service was super fast even on a busy Friday night. Will definitely come back with family.",
    reviewTime: "12 mins ago",
    aiReplyText:
      "Hi Pooja! Thank you so much for the 5-star review! We're thrilled you loved the garlic naan and paneer butter masala. Our team works hard to keep service swift even during peak hours. Looking forward to welcoming you and your family again soon! ✨",
    tone: "Warm & Welcoming",
    whatsappMessage:
      "🔔 *New Google Review (5★)*\n👤 *Pooja Hegde*: \"Loved the paneer butter masala...\"\n\n🤖 *StarReply AI Draft*:\n\"Hi Pooja! Thank you so much for the 5-star review! We're thrilled you loved...\"",
  },
  hi: {
    langName: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    businessName: "शाही दरबार रेस्टोरेंट",
    businessType: "Restaurant",
    city: "हज़रतगंज, लखनऊ",
    reviewerName: "अमित शर्मा",
    reviewerBadge: "लोकल गाइड • 28 समीक्षाएं",
    rating: 5,
    reviewText:
      "दाल मखनी और लच्छा पराठा बहुत ही लाजवाब था! स्टाफ का व्यवहार बहुत विनम्र था। अगली बार परिवार के साथ जरूर आएंगे।",
    reviewTime: "8 मिनट पहले",
    aiReplyText:
      "नमस्ते अमित जी! आपके इस शानदार 5-स्टार रिव्यू के लिए दिल से धन्यवाद। हमें खुशी है कि आपको हमारी दाल मखनी और सर्विस पसंद आई। अगली बार आपके पूरे परिवार के स्वागत के लिए हम उत्सुक हैं! 🙏",
    tone: "विनम्र एवं आदरपूर्ण",
    whatsappMessage:
      "🔔 *नया गूगल रिव्यू (5★)*\n👤 *अमित शर्मा*: \"दाल मखनी और लच्छा पराठा...\"\n\n🤖 *StarReply AI ड्राफ्ट*:\n\"नमस्ते अमित जी! आपके इस शानदार 5-स्टार रिव्यू के लिए दिल से धन्यवाद...\"",
  },
  te: {
    langName: "Telugu",
    nativeName: "తెలుగు",
    flag: "🇮🇳",
    businessName: "రాయలసీమ రుచులు",
    businessType: "Restaurant & Cafe",
    city: "మాదాపూర్, హైదరాబాద్",
    reviewerName: "శ్రీనివాస్ రావు",
    reviewerBadge: "లోకల్ గైడ్ • 34 సమీక్షలు",
    rating: 5,
    reviewText:
      "నాటుకోడి బిర్యానీ మరియు రాగి ముద్ద చాలా అద్భుతంగా ఉన్నాయి! సర్వీస్ చాలా వేగంగా ఉంది. మళ్లీ తప్పకుండా వస్తాము.",
    reviewTime: "15 నిమిషాల క్రితం",
    aiReplyText:
      "నమస్కారం శ్రీనివాస్ గారు! మా నాటుకోడి బిర్యానీ మరియు సర్వీస్ మీకు నచ్చినందుకు చాలా సంతోషం. మీ అమూల్యమైన 5-స్టార్ రివ్యూకి మా కృతజ్ఞతలు. త్వరలోనే మిమ్మల్ని మళ్లీ ఆహ్వానించడానికి ఎదురుచూస్తున్నాము! 🙏✨",
    tone: "ఆప్యాయత & గౌరవప్రదం",
    whatsappMessage:
      "🔔 *కొత్త గూగుల్ రివ్యూ (5★)*\n👤 *శ్రీనివాస్ రావు*: \"నాటుకోడి బిర్యానీ...\"\n\n🤖 *StarReply AI డ్రాఫ్ట్*:\n\"నమస్కారం శ్రీనివాస్ గారు! మా నాటుకోడి బిర్యానీ మీకు నచ్చినందుకు...\"",
  },
  ta: {
    langName: "Tamil",
    nativeName: "தமிழ்",
    flag: "🇮🇳",
    businessName: "அன்னபூர்ணா பவன்",
    businessType: "Traditional Dining",
    city: "டி. நகர், சென்னை",
    reviewerName: "கார்த்திக் சுப்ரமணியன்",
    reviewerBadge: "உள்ளூர் வழிகாட்டி • 19 மதிப்புரைகள்",
    rating: 5,
    reviewText:
      "நெய் ரோஸ்ட் தோசை மற்றும் பில்டர் காபி அருமை! தூய்மையும் உடனடி சேவையும் மிகவும் கவர்ந்தது.",
    reviewTime: "10 நிமிடங்களுக்கு முன்",
    aiReplyText:
      "வணக்கம் கார்த்திக் அவர்களே! எங்களது நெய் ரோஸ்ட் தோசை மற்றும் பில்டர் காபி உங்களுக்கு பிடித்ததில் மிக்க மகிழ்ச்சி. உங்கள் 5-நட்சத்திர மதிப்பாய்வுக்கு மனமார்ந்த நன்றிகள்! மீண்டும் உங்களை வரவேற்க ஆவலுடன் காத்திருக்கிறோம்! 🙏",
    tone: "மரியாதையான & அன்பான",
    whatsappMessage:
      "🔔 *புதிய கூகிள் மதிப்பாய்வு (5★)*\n👤 *கார்த்திக்*: \"நெய் ரோஸ்ட் தோசை...\"\n\n🤖 *StarReply AI வரைவு*:\n\"வணக்கம் கார்த்திக் அவர்களே! எங்களது நெய் ரோஸ்ட் தோசை உங்களுக்கு பிடித்ததில்...\"",
  },
};

export const HeroVisual: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<LanguageKey>("en");
  const [approved, setApproved] = useState(false);

  const current = DEMO_SAMPLES[selectedLang];

  const handleLangChange = (lang: LanguageKey) => {
    setSelectedLang(lang);
    setApproved(false);
  };

  return (
    <div className="w-full relative">
      {/* Top Interactive Language Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 px-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
          <Languages className="w-3.5 h-3.5 text-brand-500" />
          <span>Select Response Language:</span>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/70">
          {(
            [
              { key: "en", label: "English" },
              { key: "hi", label: "हिन्दी" },
              { key: "te", label: "తెలుగు" },
              { key: "ta", label: "தமிழ்" },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              onClick={() => handleLangChange(item.key)}
              className={`text-xs font-medium px-3 py-1 rounded-lg transition-all ${
                selectedLang === item.key
                  ? "bg-white text-brand-700 shadow-xs font-semibold border border-brand-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Step Flow Container */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-5">

        {/* ================= STEP 1: GOOGLE REVIEW CARD ================= */}
        <div className="relative group flex flex-col bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card hover:shadow-premium transition-all duration-300">
          {/* Step Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold text-xs border border-blue-100">
                1
              </span>
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Google Review
              </span>
            </div>
            {/* Google Maps Icon Badge */}
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200/60 text-[11px] text-slate-600">
              <svg className="w-3 h-3 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Google Maps</span>
            </div>
          </div>

          {/* Reviewer Info */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              {current.reviewerName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-slate-900 truncate">
                  {current.reviewerName}
                </h4>
                <span className="text-[11px] text-slate-400 flex-shrink-0">
                  {current.reviewTime}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 truncate">
                {current.reviewerBadge}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-2.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="text-xs font-bold text-amber-600 ml-1">5.0</span>
          </div>

          {/* Review Content */}
          <p className="text-xs text-slate-700 leading-relaxed bg-slate-50/80 p-3 rounded-xl border border-slate-100 flex-1">
            &ldquo;{current.reviewText}&rdquo;
          </p>

          {/* Business Tag */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1 truncate font-medium text-slate-600">
              <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
              {current.businessName}
            </span>
            <span className="text-[10px] text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded-md">
              Instant Sync
            </span>
          </div>

          {/* Mobile connector icon */}
          <div className="lg:hidden flex justify-center py-2 text-slate-300">
            <ArrowRight className="w-5 h-5 rotate-90" />
          </div>
        </div>

        {/* ================= STEP 2: AI GENERATED REPLY CARD ================= */}
        <div className="relative group flex flex-col bg-gradient-to-b from-white to-emerald-50/30 rounded-2xl p-5 border-2 border-brand-500/30 shadow-premium">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-emerald-400/20 rounded-2xl blur-xs -z-10" />

          {/* Step Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-100">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white font-bold text-xs shadow-xs">
                2
              </span>
              <span className="text-xs font-bold text-brand-900 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                AI-Generated Reply
              </span>
            </div>
            <span className="text-[11px] font-semibold text-brand-700 bg-brand-100/80 px-2.5 py-0.5 rounded-full border border-brand-200">
              {current.nativeName}
            </span>
          </div>

          {/* Tone & Context Meta */}
          <div className="flex items-center justify-between mb-3 text-[11px] text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="font-medium text-slate-700">Tone:</span>
              <span className="text-brand-700 font-semibold">{current.tone}</span>
            </div>
            <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
              Context-Aware
            </span>
          </div>

          {/* Generated Text Bubble */}
          <div className="relative bg-white p-3.5 rounded-xl border border-brand-200/80 shadow-xs flex-1 flex flex-col justify-between">
            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              {current.aiReplyText}
            </p>

            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                Tailored for Google SEO
              </span>
              <span className="text-brand-600 font-semibold text-[10px]">
                Drafted in 1.4s
              </span>
            </div>
          </div>

          {/* Process indicator */}
          <div className="mt-3 pt-2.5 border-t border-brand-100/60 flex items-center justify-between text-[11px] text-slate-500">
            <span className="text-slate-600">Sentiment Match: 100%</span>
            <span className="text-emerald-700 font-medium flex items-center gap-1">
              <Check className="w-3 h-3 text-brand-600" /> Ready to Approve
            </span>
          </div>

          {/* Mobile connector icon */}
          <div className="lg:hidden flex justify-center py-2 text-slate-300">
            <ArrowRight className="w-5 h-5 rotate-90" />
          </div>
        </div>

        {/* ================= STEP 3: WHATSAPP APPROVAL NOTIFICATION ================= */}
        <div className="relative group flex flex-col bg-[#F0F2F5] rounded-2xl p-4 sm:p-5 border border-slate-300/80 shadow-card hover:shadow-premium transition-all duration-300">
          {/* Step Header */}
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-whatsapp-teal text-white font-bold text-xs shadow-xs">
                3
              </span>
              <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                WhatsApp Approval
              </span>
            </div>
            {/* WhatsApp Tag */}
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E1F5EC] text-whatsapp-teal font-semibold text-[11px] border border-whatsapp/30">
              <Smartphone className="w-3 h-3" />
              <span>1-Tap Action</span>
            </div>
          </div>

          {/* WhatsApp Header bar */}
          <div className="flex items-center gap-2.5 bg-whatsapp-teal text-white px-3 py-2 rounded-t-xl">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
              ⭐
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold leading-tight truncate">
                StarReply AI Bot
              </div>
              <div className="text-[10px] text-emerald-200 leading-none">
                Official Business Assistant
              </div>
            </div>
          </div>

          {/* WhatsApp Chat Bubble */}
          <div className="bg-[#EFEAE2] p-2.5 rounded-b-xl border-x border-b border-slate-200 flex-1 flex flex-col justify-between">
            <div className="bg-white p-2.5 rounded-lg rounded-tl-none shadow-2xs text-[11px] text-slate-800 space-y-1.5 border border-slate-100">
              <div className="font-semibold text-whatsapp-teal flex items-center gap-1">
                <span>🔔 New 5★ Review Received!</span>
              </div>
              <p className="text-[10px] text-slate-600 italic line-clamp-2">
                &ldquo;{current.reviewText}&rdquo;
              </p>
              <div className="bg-emerald-50/80 p-2 rounded border border-brand-100 text-[11px] text-slate-900 leading-snug">
                <span className="font-semibold text-brand-700 block text-[10px]">
                  🤖 Suggested {current.nativeName} Reply:
                </span>
                <p className="line-clamp-3 mt-0.5 text-slate-700">
                  {current.aiReplyText}
                </p>
              </div>
              <div className="text-[9px] text-right text-slate-400">
                12:42 PM • Delivered
              </div>
            </div>

            {/* Action Buttons Mockup */}
            <div className="mt-2.5 space-y-1.5">
              {approved ? (
                <div className="w-full py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Approved & Posted to Google!</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setApproved(true)}
                    className="py-1.5 px-2 bg-whatsapp hover:bg-emerald-600 active:scale-95 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1 shadow-xs transition-all cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    <span>Approve & Post</span>
                  </button>
                  <button
                    onClick={() => {
                      const nextLangs: LanguageKey[] = ["en", "hi", "te", "ta"];
                      const nextIdx = (nextLangs.indexOf(selectedLang) + 1) % nextLangs.length;
                      setSelectedLang(nextLangs[nextIdx]);
                    }}
                    className="py-1.5 px-2 bg-white hover:bg-slate-100 active:scale-95 text-slate-700 font-medium rounded-lg text-xs flex items-center justify-center gap-1 border border-slate-200 shadow-2xs transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-brand-500" />
                    <span>Regenerate</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span>Zero App Install Needed</span>
            <span className="text-whatsapp-teal font-semibold">Works on WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Concept Preview Caption / Disclaimer */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-2 text-[11px] text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
          <span className="font-medium">
            Interactive mockup • Try switching languages above or clicking &ldquo;Approve & Post&rdquo;
          </span>
        </div>
        <span className="text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded text-[10px] font-medium">
          Concept preview • Illustrative mockup
        </span>
      </div>
    </div>
  );
};
