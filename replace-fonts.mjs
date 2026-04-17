import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(SRC_DIR);
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/font-syne/g, 'font-heading')
    .replace(/font-dm-sans/g, 'font-body');
    
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    count++;
    console.log(`Updated ${file}`);
  }
});

console.log(`\nSuccessfully updated ${count} files.`);
