Ext.define('SysFinancMob.model.contas.FormaPagamento', {
	extend: 'Ext.data.Model',
	xtype: 'formaPagamentoModel',
	
	config: {
		idProperty: 'id',	
		fields: [{name: 'id', xtype: 'int'},
		         {name: 'descricao', xtype: 'string'},
		]
	}
});