/**
 * 
 */
Ext.define('SysFinancMob.controller.contas.SubMenuFinanceiro', {
	extend: 'Ext.app.Controller',
	
	requires: ['Ext.MessageBox'],
	
	config: {
		refs: {
			subMenuFinanceiro: '.subMenuFinanceiro',
			imgLancamentos:'.subMenuFinanceiro #imgLancamentos',
			imgGeracao:'.subMenuFinanceiro #imgGeracao',
			imgMapaContas:'.subMenuFinanceiro #imgMapaContas',
			imgRateio:'.subMenuFinanceiro #imgRateio'
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
			
		}
	},
	
	onOpenGeracaoLancamentos: function(){
		Ext.Msg.alert('Titulo', 'Geração de lançamentos');
	},
	
	onOpenRateio: function(){
		Ext.Msg.alert('Titulo','Geração de rateios');
	},
	
	//funcoes
	onOpenGraficos: function(){
		this.montarTela('', 'telaGraficos', false, false);
	},
	
	onOpenBuscaLancamentos: function(){
		this.montarTela('', 'lancamentoBusca', false, false);		
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
	
});