let appName = require('electron').remote.app.getName();
let template = [
  {
    label: appName,
    submenu: [
      {
        label: '关于 ' + appName,
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        label: '设置博客目录',
        role: 'blogDir',
        click: () => {
          const {dialog} = require('electron').remote;
          let blogDir = dialog
            .showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
          let config = {
            blogRoot: blogDir[0],
            postArticleDir: blogDir[0] + '/source/_posts/',
            draftArticleDir: blogDir[0] + '/source/_drafts/'
          };
          require('fs').writeFileSync('./dist/config.json', JSON.stringify(config), 'utf8');
        }
      },
      {
        label: '设置',
        accelerator: 'Command+,',
        role: 'settings'
      },
      {
        type: 'separator'
      },
      {
        label: '隐藏 ' + appName,
        accelerator: 'Command+H',
        role: 'hide'
      },
      {
        type: 'separator'
      },
      {
        label: '退出',
        accelerator: 'Command+Q',
        role: 'quit',
        click: () => {
          require('electron').app.quit();
        }
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '撤销',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
      },
      {
        label: '重做',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: '剪切',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
      },
      {
        label: '复制',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: '粘贴',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      },
      {
        label: '全选',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      },
    ]
  },
  {
    label: '视图',
    submenu: [
      {
        label: '重新加载',
        accelerator: 'CmdOrCtrl+R',
        click: (item, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.reload();
          }
        }
      },
      {
        label: '全屏',
        accelerator: (() => {
          return 'Ctrl+Command+F';
        })(),
        click: (item, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
          }
        }
      }
    ]
  },
  {
    label: '窗口',
    role: 'window',
    submenu: [
      {
        label: '最小化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: '关闭',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      }
    ]
  },
  {
    label: '帮助',
    role: 'help',
    submenu: [
      {
        label: '了解更多',
        click: () => {
          require('electron').shell.openExternal('http://electron.atom.io');
        }
      }
    ]
  }
];

module.exports = template;
