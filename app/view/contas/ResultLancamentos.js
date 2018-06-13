Ext.define('SysFinancMob.view.contas.ResultLancamentos', {
	extend: 'Ext.dataview.List',
	xtype: 'lstLancamentos',
	
	requires: [
	   		'Ext.Toolbar',
	   	],
	
	config: {
		layout: 'fit',
		store: 'lancamentoStore',
		emptyText: 'Nenhum lan&ccedil;amento pendente',
		deferEmptyText: true,
		loadingText: 'Buscando lan&ccedil;amentos...',
		onItemDisclosure: false,
		grouped: true,
		
		itemTpl: [  
		            '<h4>{descParcela}</h4>',
		            '<h4>{dataVencimentoFmt} - R$ {valorFmt}</h4>',
		            '<h4>{descFormaPagamento}</h4>',		            
		          ],
		items: [
		        {xtype: 'toolbar', title: 'Lan&ccedil;amentos', docked:'top',
		         items: [
		                 {xtype:'searchfield', name:'buscaLanc', id:'buscaLanc', docked: 'right'}
		                 ]
		        },
		        {xtype: 'toolbar', title: '', docked:'bottom',
		         items:[
				        {ui: 'back', name: 'btnVoltar', text:'Voltar'},
				       // {ui: 'action', name: 'btnRateio', text:'Rateio'},
				        {xtype:'spacer'},
				        {xtype:'label', html:'Total: R$ ', name:'lblTotais'},

//				        {
//				      	  text: 'Sair',
//				      	  ui: 'action',
//				      	  name: 'btnSairResultLanc'
//				        }				        
		                ]
		        },
		]

	}
});