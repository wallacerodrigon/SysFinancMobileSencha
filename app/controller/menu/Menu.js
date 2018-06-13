Ext.define('SysFinancMob.controller.menu.Menu', {
	extend: 'Ext.app.Controller',

	xtype:'menucontroller',
	requires: ['Ext.MessageBox'],
	config: {
		refs: {
			imgFinanceiro: '#imgFinanceiro',
			imgLancamentos:'.frmmenu #imgLancamentos',
			imgGeracao:'.frmmenu #imgGeracao',
			imgMapaContas:'.frmmenu #imgMapaContas',
			imgRateio:'.frmmenu #imgRateio',
			btnSair: '#btnSairMenu',
			
		},
	
		control: {
			imgLancamentos: {
				tap: 'onOpenBuscaLancamentos'
			},
			imgGeracao: {
				tap: 'onOpenGeracaoLancamentos'
			},
			imgMapaContas: {
				tap: 'onOpenGraficos'
			},
			imgRateio: {
				tap: 'onOpenRateio'
			},
			btnSair: {
				tap: 'onBtnSair'
			},
			
		},
	},	
	//funcoes
	onOpenGeracaoLancamentos: function(){
		//Ext.Msg.alert('Titulo', 'Geração de lançamentos');
	},
	
	onOpenRateio: function(){
		this.montarTela('', 'buscaLancamentosRateio', false, false);
	},
	
	//funcoes
	onOpenGraficos: function(){
		this.montarTela('', 'telaGraficos', false, false);
	},
	
	onOpenBuscaLancamentos: function(){
		this.montarTela('', 'lancamentoBusca', false, false);		
	},
	
	onBtnSair: function(){
		var store = Ext.getStore('usuarioStore');
		store.removeAll();
		store.sync();
		store.load();
		
		var frmLogin = Ext.create('SysFinancMob.view.Login', {
			txtLogin: '', txtSenha: ''
		});
		//Ext.Viewport.add({xtype:'frmlogin'});
		Ext.Viewport.setActiveItem(frmLogin);
	},
	
	
	onOpenFinanceiro: function(){
		this.montarTela('', 'subMenuFinanceiro', false, false);
	},
	
	montarTela: function(pNomeStore, pNomeTelaAbrir, pAbrirStore, pFuncionaOffline){
		if (!Ext.device.Connection.getOnline() && !pFuncionaOffline ){
			Ext.Msg.alert('Online', 'Essa funcionalidade n&atilde;o funciona OFFLine. Favor conectar seu dispositivo na internet!')
		} else {
			MsgProgresso.loadingMessage('Carregando tela...');
			
			//colocar tela para andamento
			if (pAbrirStore){
				var store= Ext.getStore(pNomeStore);
				if (store != null){
					store.load({
						callback: function(records, sucessful, operation){
							MsgProgresso.stopLoading();
							if (records.length > 0){
								Ext.Viewport.setActiveItem(pNomeTelaAbrir);
							} else {
								Ext.Msg.alert('Sem registro', 'N&atilde;o h&aacute; registros para exibir a tela');
							}
						}
					});
				}
			} else {
				MsgProgresso.stopLoading();
				Ext.Viewport.setActiveItem(pNomeTelaAbrir);
			}
			
		}
	},
	
	getUsuario: function(){
		var storeUsr = Ext.getStore('usuarioStore');
		var usuario = storeUsr.getAt(0);
		var usuarioVo = new Object();
		usuarioVo.id = usuario.id;
		usuarioVo.login = usuario.login;
		usuarioVo.senha = usuario.senha;
		return usuarioVo;
	},	
	
});


