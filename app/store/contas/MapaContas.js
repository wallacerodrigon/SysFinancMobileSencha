Ext.define('SysFinancMob.store.contas.MapaContas', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'mapaStore',
		autoLoad: false,
		model:'SysFinancMob.model.contas.MapaContas',
		proxy: {
			type: 'rest', // 'ajax',
			//url: 'resources/data/lista_pendentes.json', //'http://localhost:8080/SysFinanc/rest/contas/lancamentos/2014/mapa',  
			reader: {
				type: 'json',
				rootProperty: 'mapaVos'
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