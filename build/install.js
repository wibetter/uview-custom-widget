const fs = require('fs-extra');
const path = require('path');
const packageJson = require('../package.json');

function installUniModules() {
  if (packageJson.uni_modules && Array.isArray(packageJson.uni_modules)) {
    packageJson.uni_modules.forEach((uniModule) => {
      fs.copy(
        path.resolve(__dirname, '../node_modules/', uniModule),
        path.resolve(process.cwd(), 'uni_modules', uniModule),
      )
        .then(() => console.log(`${uniModule}已安装!`))
        .catch((err) => console.error(`${uniModule}安装失败：`, err));
    });
  }
}
// 执行安装
installUniModules();
