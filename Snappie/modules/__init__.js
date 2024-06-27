const fs = require('fs');
const path = require('path');

function __list_all_modules() {
    const modPaths = fs.readdirSync(__dirname).filter(file => {
        return file.endsWith('.py') && !file.endsWith('__init__.py') && fs.statSync(path.join(__dirname, file)).isFile();
    });

    const allModules = modPaths.map(file => {
        return path.basename(file, '.py');
    });

    return allModules;
}

const ALL_MODULES = __list_all_modules().sort();
const __all__ = [...ALL_MODULES, 'ALL_MODULES'];

module.exports = {
    ALL_MODULES,
    __all__
};
