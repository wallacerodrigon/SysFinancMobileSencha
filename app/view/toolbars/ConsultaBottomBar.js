Ext.define('SysFinancMob.view.toolbars.ConsultaBottomBar', {
  extend: 'SysFinancMob.view.toolbars.Bottom',
  xtype: 'consultabottombar',

  config: {
    items: [
      {
    	  text: 'Voltar',
    	  ui: 'back',
    	  id: 'btnVoltarBar'
      },
//      {
//        text: 'Limpar',
//        ui: 'normal',
//        id: 'btnLimparBar'
//      }, 
      {
    	text: 'Buscar',
    	ui: 'action',
    	id: 'btnBuscarBar'
      },
      {
    	xtype: 'spacer'  
      },
      {
    	  text: 'Sair',
    	  ui: 'action',
    	  id: 'btnSairConsultas'
      }
    ]
  }
});