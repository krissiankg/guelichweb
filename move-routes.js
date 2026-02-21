const fs = require('fs');

fs.mkdirSync('app/[lang]');
const items = [
    'about', 'conditions-generales', 'contact', 'layout.jsx', 'mentions-legales',
    'offres', 'page.jsx', 'politique-confidentialite', 'politique-cookies',
    'project', 'services'
];

items.forEach(item => {
    if (fs.existsSync(`app/${item}`)) {
        fs.renameSync(`app/${item}`, `app/[lang]/${item}`);
    }
});

console.log('Moved successfully!');
