const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../components');
const destDir = path.join(srcDir, 'PublicComponents');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const foldersToMove = [
  'Blog',
  'comman',
  'portfolio',
  'structured-data',
  'ui'
];

foldersToMove.forEach(folder => {
  const oldPath = path.join(srcDir, folder);
  const newPath = path.join(destDir, folder);
  if (fs.existsSync(oldPath)) {
     try {
         fs.renameSync(oldPath, newPath);
         console.log(`Moved ${folder} to PublicComponents/${folder}`);
     } catch (e) {
         console.error(`Error moving ${folder}:`, e.message);
     }
  } else {
     console.log(`${folder} does not exist in ${srcDir}`);
  }
});

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
       replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
       let content = fs.readFileSync(fullPath, 'utf8');
       let changed = false;
       
       foldersToMove.forEach(folder => {
         // Find exact match `@/components/folder`
         const regex = new RegExp(`@/components/${folder}/`, 'g');
         if (regex.test(content)) {
            content = content.replace(regex, `@/components/PublicComponents/${folder}/`);
            changed = true;
         }
       });

       // also handle exact folder import without trailing slash (e.g. import x from '@/components/ui')
       foldersToMove.forEach(folder => {
         const regex = new RegExp(`['"]@/components/${folder}['"]`, 'g');
         if (regex.test(content)) {
            content = content.replace(regex, `'@/components/PublicComponents/${folder}'`);
            changed = true;
         }
       });

       if (changed) {
         fs.writeFileSync(fullPath, content, 'utf8');
         console.log(`Updated imports in ${fullPath}`);
       }
    }
  });
}

replaceInDir(path.join(__dirname, '../app'));
replaceInDir(path.join(__dirname, '../components'));
replaceInDir(path.join(__dirname, '../lib'));
console.log('Component folder restructuring complete.');
