Ext.define('SysFinancMob.store.contas.Conta', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'contasStore',
		autoLoad: false,
		model:'SysFinancMob.model.contas.Conta',
		proxy: {
			type: 'rest', // 'ajax',
			reader: {
				type: 'json',
				rootProperty: 'contas'
			}			
		},
		
		grouper: {
		            groupFn: function(record) {
		            	return record.get('despesa') ? "A pagar":"A receber";
		            },
		            sortProperty: 'despesa'
		          
				  }
	},
	
});