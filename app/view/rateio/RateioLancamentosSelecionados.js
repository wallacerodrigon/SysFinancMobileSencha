Ext.define('SysFinancMob.view.rateio.RateioLancamentosSelecionados', {
	extend: 'Ext.dataview.List',
	xtype: 'lstRateioLancamentosSelecionados',
	
	requires: [
	   		'Ext.Toolbar',
	   	],
	
	config: {
		layout: 'fit',
		emptyText: 'Nenhum lan&cedil;amento pendente',
		deferEmptyText: true,
		loadingText: 'Buscando lan&ccedil;amentos...',
		onItemDisclosure: true,
		
		itemTpl: [  
		            '<h4>{conta.descricao}</h4>',
		            '<h4>{descFormaPagamento}</h4>',
		            '<h4>Atual: R$ {valorFmt}</h4>',
		            '<h4>Ratear: R$ {valorRatearFmt}</h4>',
		            
		          ],
		items: [
		        {xtype: 'headerBar'
		        },
		        {xtype: 'toolbar', title: '', docked:'bottom',
		         items:[
				        {ui: 'back', name: 'btnCancelarRateio', text:'Cancelar'},
				        {xtype:'spacer'},
				        {xtype:'label', html:'Total Rateado: R$ '},
				        {xtype:'label', html:'0,00', name:'lblTotais'},
				        {xtype:'spacer'},
				        {ui: 'confirm', name: 'btnConfirmarRateio', text:'Confirmar'},
		                ]
		        },
		]

	}
});