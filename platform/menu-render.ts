module.exports = {
  renderMenu: () => {
    let Menu = require('electron').remote.Menu;
    let template = require('./menu-template.ts');
    let menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
};
