Ext.define('SysFinancMob.model.contas.Lancamento', {
	extend: 'Ext.data.Model',
	xtype: 'lancamentoModel',
	
	config: {
		idProperty: 'id',
		fields:[
		        {name: 'id', xtype: 'int'},
		        {name: 'numero', xtype: 'int'},
		        {name: 'dataVencimento', xtype: 'date'},
		        {name: 'conta', xtype: 'int'},
		        {name: 'valor', xtype: 'float'},
		        {name: 'formaPagamento', xtype:'formaPagamentoModel'},
		        {name: 'descFormaPagamento',xtype:'string'},
		        {name: 'dataPagamento', xtype: 'date'},
		        {name: 'valorPagamento', xtype: 'float'},
		        {name: 'paga', xtype: 'boolean'},
		        {name: 'valorFmt', xtype:'string'},
		        {name: 'dataVencimentoFmt', xtype: 'string'},
		        {name: 'descClassificacao', xtype:'string'},
		        {name: 'valorRateio', xtype: 'float'},
		        {name: 'descParcela', xtype:'string'}
		       ]
	}
});

