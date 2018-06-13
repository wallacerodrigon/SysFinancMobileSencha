Ext.define('SysFinancMob.controller.UtilRequisicao', {
	alternateClassName: 'UtilRequisicao',
	statics: {
		submeterRequisicao: function(pMethod, url, pParamsJson, msgLoading, functionCallBack, sender){
			
			if (pMethod == null || url == null || functionCallBack == null){
				Ext.Msg.alert('erro', 'Metodo, url e fun&ccedil;ao de callback devem ser informados!');
				return;
			}
			MsgProgresso.loadingMessage(msgLoading);
			Ext.Ajax.request({
				url: URLConstants.URL_BASE + url, 
				method: pMethod,
				headers: {
					'Content-Type': 'application/json'
				},
				params: pParamsJson,
				success: function(result){
					MsgProgresso.stopLoading();
				    functionCallBack(result, sender);
				}, 
				failure: function(result){
					MsgProgresso.stopLoading();
				    Ext.Msg.alert('Erro ao executar a requisi&ccedil;&atilde;o');
				},
				format: 'json',
				scope: this
			});
			
			
		},		
	},
	
	
	
}); 