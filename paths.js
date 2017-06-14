const path = require('path');

exports.src = path.resolve(__dirname, 'src');
exports.docs = path.resolve(__dirname, 'docs');
exports.assets = path.resolve(__dirname, 'assets');
exports.tsConfigPath = path.resolve(__dirname, 'tsconfig.json');
exports.publicPath = '/angular-components/';

exports.app = path.join(exports.src, 'app');
exports.main = path.join(exports.src, 'main.ts');
exports.polyfills = path.join(exports.src, 'polyfills.ts');
exports.index = path.join(exports.src, 'index.html');
exports.entryModule = path.join(exports.app, 'app.module#AppModule');
exports.favicon = path.join(exports.assets, 'favicon.svg');
