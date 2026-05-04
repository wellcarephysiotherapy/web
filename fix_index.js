const fs = require('fs');
const path = require('path');

const dir = '/Users/abhinanthpy/Documents/work/welcare';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('href="assets/images/l1.png"')) {
            content = content.replace(/href="assets\/images\/l1\.png"/g, 'href="assets/images/smalllo.jpeg"');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
});
