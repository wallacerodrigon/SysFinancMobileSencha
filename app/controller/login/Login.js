Ext.define('SysFinancMob.controller.login.Login', {
	extend: 'Ext.app.Controller',
	xtype: 'logincontroller',
	requires: ['Ext.MessageBox',
	           'Ext.device.Connection',
	           'SysFinancMob.view.Msgs.MsgProgresso',

	           	],
	config: {
		refs: {
			btnAutentica: '#btnAutenticar',
			frmMenu: '.frmmenu',
			frmLogin: '.frmlogin'
		},
		
		control: {
			btnAutentica: {
				tap: 'onAutenticateTap'
			}, 
			
		}
	},
	init:function() {
    },
	
	onAutenticateTap: function(){
		var isOnline = Ext.device.Connection.getOnline();
        var ptype= Ext.device.Connection.getType();

		if (! isOnline && ptype == ""){
			Ext.Msg.alert('Sem Conex&atilde;o',
					      'Para entrar na aplica&ccedil;&atilde;o, &eacute; necess&aacute;ria \n'+
					      'uma conex&atilde;o com a internet. Por favor, conecte e tente novamente!'
					     );
			return;
		}
		
		var values = this.getFrmLogin().getValues();
		
		if ( values.txtLogin == '' || values.txtSenha == ''){
			Ext.Msg.alert('Dados vazios','Usu&aacute;rio ou senha n&atilde;o informados!');
		} else {
			MsgProgresso.loadingMessage('Autenticando Usu&aacute;rio. Aguarde!');		
			
			var obj = new Object();
			obj.login = values.txtLogin;
		    obj.senha = values.txtSenha;
		    var dados = Ext.JSON.encode(obj);
		    
			Ext.Ajax.request({
				url: URLConstants.URL_BASE + '/login/autenticar',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				params: dados,
				success: function(result){
					MsgProgresso.stopLoading(); 
					
					var objRetorno = Ext.JSON.decode(result.responseText);
					var usuario = Ext.create('SysFinancMob.model.Usuario');
					usuario.id = objRetorno.id;
					usuario.nome = objRetorno.nome;
					usuario.login = obj.login;
					usuario.senha = obj.senha;
					
					var store = Ext.create('SysFinancMob.store.Usuario');
					var index = store.findExact('id', usuario.id);
					if (index < 0){
						store.setData(usuario);
						usuario.save();
						store.sync();
					}
					Ext.Viewport.add({xtype:'frmmenu'});
					Ext.Viewport.setActiveItem(this.getFrmMenu());
					
//					var items = Ext.Viewport.getItems();
//					for(var i =0; i < items.length; i++){
//						var item = Ext.Viewport.getAt(i);
//						if (item.getId().indexOf('frmlogin')>-1){
//							Ext.Viewport.removeAt(i);
//						}
//					}
					
					
					
				}, 
				failure: function(result){
					MsgProgresso.stopLoading();
					if (result.status == '404'){
						Ext.Msg.alert('Usu&aacute;rio', 'Usu&aacute;rio ou senha inv&aacute;lidos!');
					} else {
						Ext.Msg.alert('Usu&aacute;rio', 'Erro ao autenticar o usu&aacute;rio no servidor:' + result.responseText);	
					}
					
				},
				format: 'json',
				scope: this
			});
		}
	},
	
});