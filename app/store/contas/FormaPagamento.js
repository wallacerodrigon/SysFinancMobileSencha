Ext.define('SysFinancMob.store.contas.FormaPagamento', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'formaPagamentoStore',
		autoLoad: false,
		model:'SysFinancMob.model.contas.FormaPagamento',
		proxy: {
			type: 'rest',
			reader: {
				rootProperty: 'listaFormasPagto',
				type: 'json'
			}
		}
			
	},
	
});