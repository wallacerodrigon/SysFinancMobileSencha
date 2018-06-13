Ext.define('SysFinancMob.model.contas.ContasPorTipo', {
	extend: 'Ext.data.Model',
	xtype: 'contasPorTipo',
	
	config: {
		idProperty: 'descTipoConta',
		fields: [
		         {name: 'descTipoConta', type: 'string'},
		         {name: 'totalReceita', type: 'float'},
		         {name: 'totalDespesa', type: 'float'},
		],
	}
});