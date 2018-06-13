Ext.define('SysFinancMob.view.contas.EditorLancamento', {
	extend: 'Ext.form.Panel',
	xtype: 'editorLancamento',
	
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
				        {xtype: 'toolbar', docked: 'top', title: 'Editor de lan&ccedil;amento'},
				        {xtype: 'fieldset',
				         defaults: {
		                    labelWidth: '35%'
		                 },
				         title: 'Dados do lan&ccedil;amento',
				         items: [
				                {xtype: 'hiddenfield', name: 'id', id: 'id'}, 
				                //{xtype: 'numberfield', name:'numero', label: 'Num. Parcela:', disabled: true},
				                {xtype: 'textfield', name:'descClassificacao', label: 'Tipo:', disabled: true, id: 'tipo'},
				                {xtype: 'textfield', name:'descParcela', label: 'Descri&ccedil;&atilde;o:', disabled: true, id: 'descricao'},
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
				                {xtype: 'toolbar', docked: 'bottom', id:'editBottomBar',
			                	 items:[
			                	    {
						              	  
						              	  ui: 'back',
						              	  text: 'Voltar',
						              	  id: 'btnVoltarEditorLancamento',
										  name: 'btnVoltarEditorLancamento'
					                },
					                {
						              	ui: 'decline',
						              	iconCls: 'trash',
						              	id: 'btnExcluirLancamento',
										name: 'btnExcluirLancamento'
					                },
							        {ui: 'action', name: 'btnBaixar',  id:'btnBaixar', text:'Pagar'},
							        {ui: 'action', name: 'btnUtilizar',  id:'btnUtilizar', text:'Usar'},
					                {
						              	ui: 'action',
						              	text: 'Salvar',
						              	id: 'btnSalvarLancamento',
										name: 'btnSalvarLancamento'
					                }],		                	
				                }
				                ]
				        }
			    ]				        
		}]
	}
});