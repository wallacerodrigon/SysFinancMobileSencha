Ext.define('SysFinancMob.store.contas.ContasPorTipo', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'contasTipoStore',
		autoLoad: false,
		model:'SysFinancMob.model.contas.ContasPorTipo',
		proxy: {
			type: 'rest', // 'ajax',
			//url: 'resources/data/lista_pendentes.json', //'http://localhost:8080/SysFinanc/rest/contas/lancamentos/2014/mapa',  
			reader: {
				type: 'json',
				rootProperty: 'listaTiposContaPorAno'
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