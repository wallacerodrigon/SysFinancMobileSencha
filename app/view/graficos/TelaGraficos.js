Ext.define('SysFinancMob.view.graficos.TelaGraficos', {
	extend: 'Ext.form.Panel',
	xtype: 'telaGraficos',
    requires: [
       		'Ext.Toolbar',
       		'Ext.Panel',
            'Ext.form.FieldSet',
            'SysFinancMob.view.toolbars.ConsultaBottomBar',
            'Ext.field.Radio'
           ],
           
   	config: {
   		layout: 'fit',
        scrollable: true,
        fullscreen: true,
        items: [
                {
                	xtype: 'toolbar',
                	title:'Mapa de Contas',
                	docked: 'top'
                },
                {
                	xtype: 'fieldset',
                	items: [
                            {xtype: 'datepickerfield', value:new Date(), useTitles:'true', label:'Ano:', dateFormat:'Y',
                             id: 'anoBusca',
                            	picker:{
                			    	xtype:'datepicker', 
                			    	slotOrder:["year"], 
                			    	yearFrom: 2000,
                			    	yearTo: 2020
                			    }                            	
                            },
                            {
                            	xtype:'radiofield', label:'Tabela', name:'rdfTipo', value:'T', checked:true
                            },
                            {
                            	xtype:'radiofield', label:'Gr&aacute;fico', name:'rdfTipo', value:'M', checked:false
                            },
                            
                    ]
                },
                
                {
                	xtype: 'toolbar',
                	docked:'bottom',
                	id:'mapaSearchBottomBar',
                	items:[
                	       {
                	     	  text: 'Voltar',
                	     	  ui: 'back',
                	     	  id: 'btnVoltarBar'
                	       },
                	       {
                	     	text: 'Gerar',
                	     	ui: 'action',
                	     	id: 'btnGerar'
                	       },
                	       {xtype:'spacer'},
                	       {
                   	     	text: 'Sair',
                   	     	ui: 'action',
                   	     	id: 'btnSair'
                   	       },                	       
                	       ]
                
                },
                ]
        },
	
});