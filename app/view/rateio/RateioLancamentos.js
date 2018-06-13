Ext.define('SysFinancMob.view.rateio.RateioLancamentos', {
	extend: 'Ext.dataview.List',
	xtype: 'lstLancamentosRateio',
	
	requires: [
	   		'Ext.Toolbar',
	   	],
	
	config: {
		layout: 'fit',
		store: 'lancamentoRateioStore',
		emptyText: 'Nenhum lan&cedil;amento pendente',
		deferEmptyText: true,
		loadingText: 'Buscando lan&ccedil;amentos...',
		onItemDisclosure: false,
		grouped: true,
		
		itemTpl: [  
		            '<h4>{conta.descricao}</h4>',
		            '<h4>{dataVencimentoFmt} - R$ {valorFmt}</h4>',
		            '<h4>{descFormaPagamento}</h4>',		            
		          ],
		items: [
		        {xtype: 'toolbar', title: 'Despesas a Ratear', docked:'top',
		        },
		        {xtype: 'toolbar', title: '', docked:'bottom',
		         items:[
				        {ui: 'back', name: 'btnVoltar', text:'Voltar'},
				        {ui: 'action', name: 'btnSelecionar', text:'Selecionar'},
				        {xtype:'spacer'},
				        {ui: 'action', name: 'btnAvancar', text:'Avan&ccedil;ar'},
		                ]
		        },
		]

	}
});