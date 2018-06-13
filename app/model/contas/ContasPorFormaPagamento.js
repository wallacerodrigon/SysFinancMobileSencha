Ext.define('SysFinancMob.model.contas.ContasPorFormaPagamento', {
	extend: 'Ext.data.Model',
	xtype: 'contasFormaPagamento',
	
	config: {
		idProperty: 'descFormaPagamento',
		fields: [
		         {name: 'descFormaPagamento', type: 'string'},
		         {name: 'totalReceita', type: 'float'},
		         {name: 'totalDespesa', type: 'float'},
		],
	}
});