Ext.define('SysFinancMob.model.rateio.RateioModel', {
	extend: 'Ext.data.Model',
	xtype:'rateioModel',
	
	requires:['Ext.data.proxy.Sql','Ext.data.identifier.Sequential'],
	
	config: {
		identifier: 'sequential',
		fields: [
		         {name: 'dataRateio', type: 'string'},
		         {name: 'idFormaPagamento', type: 'int'},
		         {name: 'numDocFiscal', type: 'string'},
		         {name: 'nomeEstabelecimento', type: 'string'},
		         {name: 'totalCompra', type: 'float'},
		         {name: 'usuarioVo', type: 'usuarioModel'},
		         {name: 'parcelasARatear', type: 'array'}
		],
		proxy: {
			/*type: 'sql',
			id: 'rateios',
			database: 'DBSysFinanc',
			table: 'rateioTB'*/
			type: 'sessionstorage',
			id: 'rateios'
		},
		hasMany: {model: 'SysFinancMob.model.contas.Lancamento', name: 'parcelasARatear'},
		validations: [
		              { type: 'presence',  field: 'dataRateio', message: 'Forne&ccedil;a a data do rateio' },
		              { type: 'presence',    field: 'idFormaPagamento', message: 'Informe a forma de pagamento'},
		              { type: 'length',    field: 'numDocFiscal', min: 6, message: 'Informe, no minimo, 6 digitos para o documento fiscal'},
		              { type: 'format',    field: 'numDocFiscal', matcher: /\d+/, message: 'Informe apenas numeros no doc.fiscal' },
		              { type: 'presence', field: 'nomeEstabelecimento', message: 'Informe o nome do estabelecimento'},
		              { type: 'presence', field: 'totalCompra', message: 'Informe o total da compra'}
		          ],		
	},
	
	
});