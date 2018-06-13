Ext.define('SysFinancMob.view.contas.ResultMapaTabelaContas', {
	extend: 'Ext.dataview.List',
	xtype: 'resultMapaTabelaContas',
    requires: [
       		'Ext.Toolbar',
            'SysFinancMob.view.toolbars.VoltaBottomBar',
           ],
           
   	config: {
		layout: 'fit',
		store: 'mapaStore',
        fullscreen: true,
        scrollable:true,
		onItemDisclosure: false,
		
		itemTpl: [
		            '<h1><strong>Mes: {mes}</strong></h1>',
		            '<h4>Receita: R$ {totalReceitaFmt}</h4>',
		            '<h4>Despesa: R$ {totalDespesaFmt}</h4>',
		            '<h4>Saldo: R$ {saldoFmt}</h4>'
		          ],
		
		items: [
		        {xtype: 'toolbar', title: 'Mapa de Contas - Tabela', docked: 'top'},
		        {xtype: 'toolbar', docked: 'bottom', id:'voltaMapaTable',
	             	items: [
    	                    {
    	                  	  text: 'Voltar',
    	                  	  ui: 'back',
    	                  	  id: 'btnVoltarPorTblMapa'
    	                    },
    				        {xtype:'spacer'},
    				        {xtype:'label', html:'Total: R$ ', name:'lblTotais'}
    	                    
                        ]
   		        	
		         
		        },
	    ]
   	}

});