const fs = require('fs');
const path = require('path');

const folders = ['Blog', 'comman', 'portfolio', 'structured-data', 'ui', 'HomePageComp'];
const filesToMove = [
  'AuditRequestForm',
  'ContactForm',
  'FooterLinks',
  'FooterServicesLinks',
  'NewsletterForm',
  'RelatedServices',
  'ServicesGrid'
];

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
       
       folders.forEach(folder => {
         const regexStr = '(\\.\\./)+components/' + folder + '/?';
         const regex = new RegExp(regexStr, 'g');
         if (regex.test(content)) {
            content = content.replace(regex, `@/components/PublicComponents/${folder}/`);
            changed = true;
         }
       });
       
       filesToMove.forEach(fileName => {
           // match things like ../../../ServicesGrid
           const regexStr = '(\\.\\./)+' + fileName + '(["\'])';
           const regex = new RegExp(regexStr, 'g');
           if (regex.test(content)) {
              content = content.replace(regex, `@/components/PublicComponents/${fileName}$2`);
              changed = true;
           }
       });

       if (changed) {
         fs.writeFileSync(fullPath, content, 'utf8');
         console.log(`Updated relative imports in ${fullPath}`);
       }
    }
  });
}

replaceInDir(path.join(__dirname, '../app'));
replaceInDir(path.join(__dirname, '../components'));
console.log('Fixed relative imports.');
