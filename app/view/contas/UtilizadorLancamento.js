Ext.define('SysFinancMob.view.contas.UtilizadorLancamento', {
	extend: 'Ext.form.Panel',
	xtype: 'utilizadorLancamento',
	
	requires: ['Ext.Toolbar'],
	
	config: {
		layout: 'fit',
		scrollable:true,
		items: [
		        {xtype: 'toolbar', docked: 'top', title: 'Utilizador de lan&ccedil;amento'},
		        {xtype: 'fieldset',
		         items: [
		                {xtype: 'hiddenfield', name: 'id'}, 
		                {xtype: 'textfield', name: 'valorParcelaOrigem', label: 'Valor M&aacute;x.:', disabled: true, id: 'valorParcelaOrigem'},
		                {xtype: 'textfield', name:'descricao', label: 'Descri&ccedil;&atilde;o:', disabled: true, id: 'descricao'},
		                {xtype: 'numberfield', name:'valor', label: 'Valor:'},
		                {xtype: 'datepickerfield', value:new Date(), useTitles:'true', label:'Data:', dateFormat:'d/m/Y',
						   name:'dataUtilizacao', id: 'dataUtilizacao'},
                        {
                        	xtype: 'selectfield', label: 'Forma de Pagamento:',
							store: 'formaPagamentoStore',
							displayField: 'descricao',
                        	valueField: 'id',
                        	id:'formaPagamento',
                        	name:'formaPagamento'
                        },
		                {xtype: 'toolbar', docked: 'bottom', id:'actionBar',
	                	 items:[
	                	    {
				              	  
				              	  ui: 'back',
				              	  iconCls: 'arrow_left',
				              	  id: 'btnVoltarUtilizadorLancamento',
								  name: 'btnVoltarUtilizadorLancamento'
			                },
			                {
				              	text:'Utilizar',
				              	ui: 'action',
				              	id: 'btnSalvarUtilizacao',
								name: 'btnSalvarUtilizacao'
			                }],		                	
		                }
		                ]
		        }
		]
	}
});