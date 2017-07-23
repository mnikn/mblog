const {ipcMain} = require('electron');

module.exports = {
  login: (e, user) => {
    // todo something

    e.reply({msg: 'ok'});
  }
};
