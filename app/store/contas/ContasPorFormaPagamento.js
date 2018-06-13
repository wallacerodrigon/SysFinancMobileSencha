Ext.define('SysFinancMob.store.contas.ContasPorFormaPagamento', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'contasFormaPagamentoStore',
		autoLoad: false,
		model:'SysFinancMob.model.contas.ContasPorFormaPagamento',
		proxy: {
			type: 'rest', // 'ajax',
			//url: 'resources/data/lista_pendentes.json', //'http://localhost:8080/SysFinanc/rest/contas/lancamentos/2014/mapa',  
			reader: {
				type: 'json',
				rootProperty: 'formaPagamentoPorAno'
			}			
		},
		listener: {
			load: function(records){
				if (records != null && records.length > 0){
					console.log('carregado');	
				}
				
			}
		}
			
	},
	
});