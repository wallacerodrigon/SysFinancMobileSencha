Ext.define('SysFinancMob.view.rateio.RateioForm',{
	extend: 'Ext.form.Panel',
	xtype: 'frmRateio',
	
	requires: ['Ext.Toolbar',
	           'Ext.form.Panel',
	           'Ext.form.FieldSet',
	           'Ext.field.Text'
	           ],
	
	config: {
		layout: 'fit',
		items: [{
			xtype: 'formpanel',
			items: [
				        {xtype:'headerBar'},
				        {xtype: 'fieldset',
				         defaults: {
		                    labelWidth: '35%'
		                 },
				         title: 'Dados para o rateio',
				         items: [
				                {xtype: 'datepickerfield', value:new Date(), useTitles:'true', label:'Data:', dateFormat:'d/m/Y',
								   name:'dataRateio', id: 'dataRateio'},
					            {xtype: 'numberfield', name:'numeroDocFiscal', label: 'Num. Doc. Fiscal:'},
				                {xtype: 'textfield', name:'nomeEstabelecimento', label: 'Estabelecimento:'},
		                        {
		                        	xtype: 'selectfield', label: 'Meio de Pagamento:',
									store: 'formaPagamentoStore',
									displayField: 'descricao',
		                        	valueField: 'id',
		                        	id:'formaPagamento',
		                        	name:'formaPagamento'
		                        },
				                {xtype: 'numberfield', name:'valorCompra', label: 'Valor da compra:'},
				                ]
				        },				        
		                {xtype: 'toolbar', docked: 'bottom', id:'editBottomBar',
		                	 items:[
		                	    {
					              	  ui: 'back',
					              	  text: 'Voltar',
					              	  id: 'btnVoltar',
									  name: 'btnVoltar'
				                },
				                {xtype:'spacer'},
						        {ui: 'action', name: 'btnAvancar',  id:'btnAvancar', text:'Avan&ccedil;ar'},
				             ],		                	
			            }				        
			    ]				        
		}]
	}
});