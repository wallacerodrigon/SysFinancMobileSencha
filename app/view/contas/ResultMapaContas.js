Ext.define('SysFinancMob.view.contas.ResultMapaContas', {
	extend: 'Ext.form.Panel',
	xtype: 'resultMapaContas',
    requires: [
       		'Ext.Toolbar',
       		'Ext.Panel',
            'Ext.form.FieldSet',
            'SysFinancMob.view.toolbars.VoltaBottomBar',
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
                	xtype: 'chart',
                	layout: 'fit',
                	colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111","#115fa6", "#94ae0a","#94ae0a"],
                	background: 'transparent',
                	store: 'mapaStore', 
                    interactions: [{type: 'itemhighlight'},
                           {
                              type: 'iteminfo',
                              gesture    : 'itemtap',
                              listeners: {
                                  show: function(interaction, item, panel) {
                                      panel.getDockedItems()[0].setTitle('Gráfico Situação Processo');
                                      panel.setHtml(['<ul style="color:#fff;"><li><b>Mes: </b>' + item.record.get('mes') + '</li>', 
                                                     '<li><b>Total Receita: </b> ' + item.record.get('totalReceita')+ '</li>',
                                                     '<li><b>Total Despesa: </b> ' + item.record.get('totalDespesa')+ '</li>',
                                                     '<li><b>Saldo Final: </b> ' + item.record.get('saldo')+ '</li></ul>'].join(''));
                                  }
                              }
                           }
                    ],
                	
                	axes: [
                	       {
                	    	   type: 'numeric',
                	    	   position: 'left',
                	    	   title: {
                	    		   text: 'Receitas/Despesas',
                	    		   fontSize: 12
                	    	   },
                	    	   fields: ['totalDespesa']
                	       },
                	       
                	       {
                	    	   type: 'category',
                	    	   position: 'bottom',
                	    	   title: {
                	    		   text: 'Meses',
                	    		   fontSize: 12
                	    	   },
                	    	   fields: 'mes'
                	    	   
                	       }
                	],
                	series: [
                    {
                        type: 'bar',
                        xField: 'mes',
                        yField: 'totalDespesa',
                        label:{
                        	display: 'rotate',
                        },
                    },
                    ]                	
                },
                {
                	xtype: 'toolbar',
                	docked:'bottom',
                	id:'voltaBottomBar',
                 	items: [
    	                    {
    	                  	  text: 'Voltar',
    	                  	  ui: 'back',
    	                  	  name: 'btnVoltarPorMapa'
    	                    },
    				        {xtype:'spacer'},
    				        {xtype:'label', html:'Total: R$ ', name:'lblTotais'}
    	                    
                        ]
                   	
                	
                	
                },
                
                ]
        },
	
});