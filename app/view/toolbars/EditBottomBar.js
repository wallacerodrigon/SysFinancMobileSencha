Ext.define('SysFinancMob.view.toolbars.EditBottomBar', {
  extend: 'SysFinancMob.view.toolbars.Bottom',
  xtype: 'editbottombar',

  config: {
    items: [
      {xtype: 'spacer'},
      {
    	  text: 'Voltar',
    	  ui: 'back',
    	  id: 'btnVoltarBar'
      },
      {xtype: 'spacer'}, 
      {
    	text: 'Salvar',
    	ui: 'action',
    	id: 'btnSalvarBar'
      }
    ]
  }
});