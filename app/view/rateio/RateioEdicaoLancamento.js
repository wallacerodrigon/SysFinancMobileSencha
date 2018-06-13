Ext.define('SysFinancMob.view.rateio.RateioEdicaoLancamento', {
	extend: 'Ext.form.Panel',
	xtype: 'editorRateioLancamento',
	
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
				        {xtype: 'toolbar', docked: 'top', title: 'Editor de rateios'},
				        {xtype: 'fieldset',
				         defaults: {
		                    labelWidth: '35%'
		                 },
				         title: '',
				         items: [
				                {xtype: 'hiddenfield', name: 'id', id: 'id'}, 
				                {xtype: 'textfield', name:'conta.descricao', label: 'Descri&ccedil;&atilde;o:', disabled: true, id: 'descricao'},
				                {xtype: 'numberfield', name:'valor', label: 'Valor:'},
				                {xtype: 'datepickerfield', value:new Date(), useTitles:'true', label:'Vencimento:', dateFormat:'d/m/Y',
								   name:'dataVencimento', id: 'dataVencimento'},
		                        {
		                        	xtype: 'selectfield', label: 'Meio de Pagamento:',
									store: 'formaPagamentoStore',
									displayField: 'descricao',
		                        	valueField: 'id',
		                        	id:'formaPagamento',
		                        	name:'formaPagamento'
		                        },
		                        {
		                        	xtype: 'textfield', name: 'dataPagamento', id:'dataPagamento', disabled:true
		                        },
				                {xtype: 'toolbar', docked: 'bottom', id:'tbEditorRateio',
			                	 items:[
			                	    {
					              	  
					              	  ui: 'back',
					              	  text: 'Voltar',
					              	  id: 'btnVoltarEditorLancRateio',
									  name: 'btnVoltarEditorLancRateio'
					                },
					                {
						              	iconCls: 'trash',
						              	id: 'btnExcluirLancRateio',
										name: 'btnExcluirLancRateio'
					                },
							        {
					                	ui: 'action', 
					                	iconCls: 'compose', 
					                	name: 'btnSalvarLancRateio',  
					                	id:'btnSalvarLancRateio', 
					                	text:'Salvar'}
					                ],		                	
				                }
				                ]
				        }
			    ]				        
		}]
	}
});