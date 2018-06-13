Ext.define('SysFinancMob.model.contas.TipoConta', {
	extend: 'Ext.data.Model',
	xtype: 'tipoContaModel',
	
	config: {
		idProperty: 'id',
		fields:[
		        {name: 'id', xtype: 'int'},
		        {name: 'descricao', xtype: 'string'},
		       ]
	}
});

