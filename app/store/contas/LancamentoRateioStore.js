Ext.define('SysFinancMob.store.contas.LancamentoRateioStore', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'lancamentoRateioStore',
		autoLoad: false,
		model:'SysFinancMob.model.contas.Lancamento',
		sorters: [
		          {property: 'descClassificacao', direction:'ASC'},
		          {property: 'descFormaPagamento', direction:'ASC'}
		          ],
		grouper: {
            groupFn: function(record) {
            	return record.get('descClassificacao');
            },
            sortProperty: "descClassificacao"
		},
		filters: [
		          {property:'paga', value:false},
		          {property:'descClassificacao', value:'A Pagar'}
		         
		],
		proxy: {
			type: 'sessionstorage',
		},
	},
	
});