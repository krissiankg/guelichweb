const fs = require('fs');
['project', 'services'].forEach(item => {
    if (fs.existsSync(`app/${item}`)) {
        fs.renameSync(`app/${item}`, `app/[lang]/${item}`);
    }
});
