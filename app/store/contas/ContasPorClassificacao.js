Ext.define('SysFinancMob.store.contas.ContasPorClassificacao', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'contasClassificacaoStore',
		autoLoad: false,
		model:'SysFinancMob.model.contas.ContasPorClassificacao',
		proxy: {
			type: 'rest', // 'ajax',
			//url: 'resources/data/lista_pendentes.json', //'http://localhost:8080/SysFinanc/rest/contas/lancamentos/2014/mapa',  
			reader: {
				type: 'json',
				rootProperty: 'listaContasPorClassificacao'
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