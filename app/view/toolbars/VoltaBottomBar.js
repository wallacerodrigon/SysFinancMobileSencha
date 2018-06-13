Ext.define('SysFinancMob.view.toolbars.VoltaBottomBar', {
  extend: 'SysFinancMob.view.toolbars.Bottom',
  xtype: 'voltabottombar',

  config: {
    items: [
      {xtype: 'spacer'},
      {
    	  text: 'Voltar',
    	  ui: 'back',
    	  id: 'btnVoltarBar'
      }
    ]
  }
});