const simulate = require('miniprogram-simulate');

global.Page = (options) => {
  const extraData = {};
  if (!options.methods) options.methods = {};
  Object.keys(options).forEach((key) => {
    if (key == 'methods') return;
    var value = options[key];
    //  要排除生命周期
    if (typeof value === 'function') {
      options.methods[key] = value;
    } else {
      extraData[key] = value;
    }
  });
  // 通过ready方法挂载this数据
  const oldReady = options.ready ? options.ready : () => { };
  options.ready = function () {
    Object.keys(extraData).forEach((key) => {
      this[key] = extraData[key];
    });
    oldReady();
  }
  global.Component(options);
};

  // simulate.load({
  //   id:'button',
  //   tagName:'wx-button',
  //   template:'<div><slot/></div>'
  // })