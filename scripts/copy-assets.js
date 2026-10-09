const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\vamsh\\AppData\\Local\\Temp\\claude\\c--Users-vamsh-OneDrive-Pictures-Saved-Pictures-Documents-New-folder--2--project-StarReplyAI-LandingPage\\15f1b4e1-9766-4206-a0a1-5727b14f4066\\images\\1.jpg';
const destDir = path.join(__dirname, '..', 'public');
const dest = path.join(destDir, 'logo.jpg');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Logo copied to public/logo.jpg successfully!');
} else {
  console.log('Source file not found at:', src);
}
