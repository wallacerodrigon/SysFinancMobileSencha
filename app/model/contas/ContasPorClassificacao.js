Ext.define('SysFinancMob.model.contas.ContasPorClassificacao', {
	extend: 'Ext.data.Model',
	xtype: 'contasClassificacaoModel',
	
	config: {
		idProperty: 'classificacao',
		fields: [
		         {name: 'descricao', type: 'string'},
		         {name: 'total', type: 'float'},

		],
	}
});