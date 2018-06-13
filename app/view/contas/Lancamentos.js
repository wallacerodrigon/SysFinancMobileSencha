Ext.define('SysFinancMob.view.contas.Lancamentos', {
	extend: 'Ext.form.Panel',
	xtype: 'lancamentoBusca',
    requires: [
       		'Ext.Toolbar',
       		'Ext.Panel',
            'Ext.form.FieldSet',
            'SysFinancMob.view.toolbars.ConsultaBottomBar',
			'Ext.field.Select',
			'Ext.field.Number',
			'Ext.field.DatePicker'
           ],
           
   	config: {
   		layout: 'fit',
        scrollable: true,
        fullscreen: true,
        items: [
                {
                	xtype: 'toolbar',
                	title:'Busca por Lan&ccedil;amentos',
                	docked: 'top'
                },
                {
                	xtype: 'fieldset',
                	items: [
                            {
							   xtype: 'datepickerfield', value:new Date(), useTitles:'true', label:'M&ecirc;s base:', dateFormat:'m/Y',
							   name:'dataBase'
                            },
                            {
                            	xtype: 'selectfield', label: 'Forma de Pagamento:',
								store: 'formaPagamentoStore',
								displayField: 'descricao',
                            	valueField: 'id',
                            	id:'formaPagamento',
                            	name:'formaPagamento',
                            	autoSelect:false
                            	                           	
                            },
            				{
            					xtype: 'radiofield',
            					label: 'N&atilde;o Pagas:',
            					name: 'rdfEstado',
            					value:'NP',
            					checked:true
            				},
            				{
            					xtype: 'radiofield',
            					label: 'Pagas:',
            					name: 'rdfEstado',
            					value:'PG'
            				},
            				{
            					xtype: 'radiofield',
            					label: 'Todas:',
            					name: 'rdfEstado',
            					value:'TD'
            				}
            				
            				
            				
                    ]
                },
                {
                	xtype: 'consultabottombar',
                	docked:'bottom',
                	id:'lancamentoSearchBottomBar'
                	
                	
                },
                
                ]
        },
	
});