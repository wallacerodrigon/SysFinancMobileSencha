Ext.define('SysFinancMob.model.contas.MapaContas', {
	extend: 'Ext.data.Model',
	xtype: 'mapaContasModel',
	
	config: {
		idProperty: 'mes',
		fields: [
		         {name: 'mes', type: 'string'},
		         {name: 'totalReceita', type: 'float'},
		         {name: 'totalDespesa', type: 'float'},
		         {name: 'saldo', type: 'float'},
		         {name: 'totalReceitaFmt', type: 'string'},
		         {name: 'totalDespesaFmt', type: 'string'},
		         {name: 'saldoFmt', type: 'string'},
		],
	}
});