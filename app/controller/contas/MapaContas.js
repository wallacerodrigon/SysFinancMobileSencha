Ext.define('SysFinancMob.controller.contas.MapaContas', {
	extend: 'Ext.app.Controller',
	xtype: 'mapaContascontroller',
	requires: [
	           	'SysFinancMob.store.Utils.URLConstants',
	           	'Ext.MessageBox', 
	    		'SysFinancMob.controller.UtilFormatacao',
	           ],
	config: {
		refs: {
            btnVoltar: '#mapaSearchBottomBar #btnVoltarBar',
            btnGrafico: '#mapaSearchBottomBar #btnGraficoBar',
            btnGerar: '#mapaSearchBottomBar #btnGerar',            
            btnVoltaMapaTable: '#voltaMapaTable #btnVoltarPorTblMapa',
            campoBusca : '#anoBusca',
            telaGraficos: ".telaGraficos",
            tipoSaida : ".telaGraficos radiofield[name='rdfTipo']",
            voltaMapaGrafico:".resultMapaContas #voltaBottomBar button[name='btnVoltarPorMapa']",
            
            lblTotaisGrafico:".resultMapaContas label[name='lblTotais']",
            lblTotaisTabela:".resultMapaTabelaContas label[name='lblTotais']",
            	
		},
		
		control: {
			btnVoltar: {
				tap: 'onBackMenu'
			}, 
			btnGerar: {
				tap: 'onGenerateData'
			},
			btnVoltaMapaTable: {
				tap: 'onBackConsulta'
			},
			voltaMapaGrafico:{
				tap:'onBackConsulta'
			}
		}
	},
	
	onBackMenu: function(){
		Ext.Viewport.setActiveItem('frmmenu');
	},
	onBackConsulta:function(){
		Ext.Viewport.setActiveItem('telaGraficos');
	},
	
	onGenerateData: function(){
		var values = this.getTelaGraficos().getValues();
				
		if (values.rdfTipo == 'M'){
			this.buscarDados("resultMapaContas", "o gr&aacute;fico", "M");
		} else if (values.rdfTipo == 'T'){
			this.buscarDados("resultMapaTabelaContas", "a tabela", "T");	
		} else {
			Ext.Msg.alert('Erro', 'Opcao invalida!');			
		}
		
		
	},
	
	
	buscarDados:function(destino, nomeTela, tipoGrafico){
		var ano = this.getCampoBusca().getFormattedValue();
		MsgProgresso.loadingMessage('Obtendo dados para montar '+nomeTela+' de '+ano);
		var me = this;
		var store = Ext.getStore('mapaStore');
		store.removeAll();
		if (store != null){
			store.setProxy({
				url: URLConstants.URL_BASE + '/contas/lancamentos/'+ano+'/mapa'
			});
		} 
		store.load({
			callback: function(records, successful, operation){
				MsgProgresso.stopLoading();
				if (records.length == 0){
					Ext.Msg.alert('Retorno', 'N&atilde;o h&aacute; dados para montar o mapa');
				} else {
					var totais = me.obterTotais(records);
					Ext.Viewport.setActiveItem(destino);
					var html = 
						"<p>Receita:" + totais['receitas']+"</p>" +
						"<p>Despesa:" + totais['despesas']+"</p>" +
						"<p>Saldo:" + totais['saldo']+"</p>";
					
					if (tipoGrafico == 'T'){
						me.getLblTotaisTabela().setHtml(html);
					} else {
						me.getLblTotaisGrafico().setHtml(html);
					}
					
				}
			}
		});
		
	},
	
	obterTotais: function(registros){
		var totalDespesa = 0.00;
		var totalReceita = 0.00;
		var mapaTotais = new Object();
		if (registros != null && registros.length > 0){
			for(var i = 0; i < registros.length; i++){
				var reg = registros[i].data;
				totalDespesa += reg.totalDespesa;
				totalReceita += reg.totalReceita;
			}
		}
		
		mapaTotais['despesas'] = UtilFormatacao.formatarValor( totalDespesa );
		mapaTotais['receitas'] = UtilFormatacao.formatarValor(totalReceita);
		mapaTotais['saldo'] = UtilFormatacao.formatarValor(totalReceita - totalDespesa);
		return mapaTotais;
	}
	
});