const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../components');
const destDir = path.join(srcDir, 'PublicComponents');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToMove = [
  'AuditRequestForm.tsx',
  'ContactForm.tsx',
  'FooterLinks.tsx',
  'FooterServicesLinks.tsx',
  'NewsletterForm.tsx',
  'RelatedServices.tsx',
  'ServicesGrid.tsx'
];

filesToMove.forEach(file => {
  const oldPath = path.join(srcDir, file);
  const newPath = path.join(destDir, file);
  if (fs.existsSync(oldPath)) {
     fs.renameSync(oldPath, newPath);
     console.log(`Moved ${file}`);
  }
});

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
       replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
       let content = fs.readFileSync(fullPath, 'utf8');
       let changed = false;
       
       filesToMove.forEach(targetFile => {
         const name = targetFile.replace('.tsx', '');
         // Find exact match `@/components/Name`
         const regex = new RegExp(`@/components/${name}`, 'g');
         if (regex.test(content)) {
            content = content.replace(regex, `@/components/PublicComponents/${name}`);
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
console.log('Cleanup complete.');
