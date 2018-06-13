Ext.define('SysFinancMob.model.contas.Conta', {
	extend: 'Ext.data.Model',
	xtype: 'contaModel',
	
	config: {
		idProperty: 'id',
		fields:[
		        {name: 'id', xtype: 'int'},
		        {name: 'classificacao', xtype: 'string'},
		        {name: 'descricao', xtype: 'string'},
		        {name: 'fixa', xtype: 'boolean'},
		        {name: 'despesa', xtype: 'boolean'},
		        {name: 'tipoConta', xtype:'tipoContaModel'}
		       ]
	}
});

