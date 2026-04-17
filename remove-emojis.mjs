import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');

// Comprehensive emoji regex targeting:
// Emoticons, Misc Symbols/Pictographs, Transport/Map, Supplemental Symbols, Extended Symbols, Dingbats, Flags
const EMOJI_REGEX = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{2600}-\u{26FF}]/gu;

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(SRC_DIR);
let count = 0;
let emojiCount = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Find all matches to count them
  const matches = content.match(EMOJI_REGEX);
  if (matches) {
    emojiCount += matches.length;
    
    // Replace emojis and clean up potential double spaces left behind
    let newContent = content.replace(EMOJI_REGEX, '');
    
    // Optional: clean up trailing/leading spaces if an emoji was between text and space
    // and resulted in double space. But let's be conservative first.
    
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      count++;
      console.log(`Removed ${matches.length} emojis from ${file}`);
    }
  }
});

console.log(`\nSuccessfully removed ${emojiCount} emojis across ${count} files.`);
