Ext.define('SysFinancMob.store.rateio.RateioStore', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'rateioStore',
		autoLoad: true,
		model:'SysFinancMob.model.rateio.RateioModel',
		sorters: [
		          {property: 'descFormaPagamento', direction:'ASC'}
		          ],
	},
	
});