Ext.define('SysFinancMob.view.contas.ListaContas', {
	extend: 'Ext.dataview.List',
	xtype: 'lstContas',
	
	requires: ['Ext.Toolbar'],
	
	config: {
		layout: 'fit',
		scrollable:true,
	     store: 'contasStore',	
		 emptyText: 'Nenhuma conta encontrada',
		 //deferEmptyText: true,
		 loadingText: 'Buscando contas...',
		 onItemDisclosure: false,
		 grouped:true,
		 
	     itemTpl: [
	                "<p>Descri&ccedil;&atilde;o: {descricao}</p> ",
	                "<p>Tipo: {tipoConta.descricao}</p>"
	              ],
		
		items: [
		        {xtype: 'toolbar', docked: 'top', title: 'Contas',
		         items: [ 
		                 {xtype: 'searchfield', name: 'busca', id: 'busca', docked:'right'}, 
	                    ]
		        },
                {xtype: 'toolbar', docked: 'bottom', id:'editBottomBar',
	                	 items:[
	                	    {
				              	  ui: 'back',
				              	  id: 'btnVoltarGeradorLancamento',
								  name: 'btnVoltarGeradorLancamento',
								  text:'Voltar'
			                },
		                
			                ],		                	
		        } //fim do fieldset
		],
	}
});