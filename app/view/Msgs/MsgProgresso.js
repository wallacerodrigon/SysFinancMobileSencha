Ext.define('SysFinancMob.view.Msgs.MsgProgresso', {
	alternateClassName: 'MsgProgresso',
	statics: {
		loadingMessage:function(mensagem){
			console.log(mensagem);
			Ext.Viewport.setMasked({
				xtype: 'loadmask',
				indicator: true,
				message: mensagem
			});
		},
		stopLoading:function(){
			Ext.Viewport.unmask();
			
		}
		
	},
	
}); 