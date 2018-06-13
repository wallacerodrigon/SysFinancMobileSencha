Ext.define('SysFinancMob.view.contas.GeradorLancamento', {
	extend: 'Ext.form.Panel',
	xtype: 'geradorLancamento',
	
	requires: ['Ext.Toolbar'],
	
	config: {
		layout: 'fit',
		scrollable:true,
		items: [
		        {xtype: 'toolbar', docked: 'top', title: 'Gerador de lan&ccedil;amentos'},
		        {xtype: 'fieldset',
		         items: [
		                {xtype: 'hiddenfield', name: 'idConta', id: 'idConta'},
		                {xtype: 'textfield', name:'conta', label: 'Conta:', disabled:true},
		                {xtype: 'textfield', name:'classificacao', label: 'Tipo:', disabled:true},
		                {xtype: 'spinnerfield', name:'quantidade', label: 'Quantidade:',
		                	stepValue: 1, cycle: true, minValue: 1, maxValue: 99, placeHolder: 'Qtd a gerar'},
		                {xtype: 'numberfield', name:'valor', label: 'Valor:', placeHolder: 'Valor'},
		                {xtype: 'datepickerfield', value:new Date(), useTitles:'true', label:'Vencimento:', dateFormat:'d/m/Y',
						   name:'dataVencimento', id: 'dataVencimento'},
                        {
                        	xtype: 'selectfield', label: 'Forma:',
							store: 'formaPagamentoStore',
							displayField: 'descricao',
                        	valueField: 'id',
                        	id:'formaPagamento',
                        	name:'formaPagamento',
                        	autoSelect: false
                        },
                        {xtype: 'textfield',name:'descricaoParcela', label:'Descri&ccedil;&atilde;o:'},
		                {xtype: 'toolbar', docked: 'bottom', id:'editBottomBar',
	                	 items:[
	                	    {
				              	  
				              	  ui: 'back',
				              	  text: 'Voltar',
				              	  id: 'btnVoltarFrmGeradorLancamento',
								  name: 'btnVoltarFrmGeradorLancamento'
			                },
			                {
				              	ui: 'action',
				              	id: 'btnGerarLancamento',
								name: 'btnGerarLancamento',
								text:'Gerar'
			                }],		                	
		                }
		                ]
		        }
		]
	}
});