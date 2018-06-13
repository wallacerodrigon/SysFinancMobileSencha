Ext.define('SysFinancMob.controller.rateio.RateioController', {
	extend:'Ext.app.Controller',
	xtype: 'rateioController',
	
	requires: [
		'Ext.MessageBox'
	],
	config: {
		refs: {
			lstLancamentosRateio: ".lstLancamentosRateio",
			lstRateioLancamentosSelecionados: ".lstRateioLancamentosSelecionados",
			
			formRateio: ".frmRateio",
			btnVoltarDoFormRateio: ".frmRateio button[name='btnVoltar']",
			btnAvancarDoFormRateio: ".frmRateio button[name='btnAvancar']",
			
			btnSelecionar: ".lstLancamentosRateio button[name='btnSelecionar']",
			btnListaLancVoltar: ".lstLancamentosRateio button[name='btnVoltar']",
			btnListaLancAvancar: ".lstLancamentosRateio button[name='btnAvancar']",
		},
	
	
		control: {
			btnVoltarDoFormRateio:{
				tap: 'voltarDoForm'
			},
			btnAvancarDoFormRateio:{
				tap: 'irParaRateioLancamentos'
			},
			btnSelecionar:{
				tap: 'selecionarLancamento'
			},
			btnListaLancVoltar:{
				tap: 'voltarParaFormRateio'
			},
			btnListaLancAvancar:{
				tap: 'exibirRateioLancamentosSelecionados'
			}
			
		},
	},
	
	//acoes de tela
	voltarDoForm: function(){
		this.limparSessionStore();
		Ext.Viewport.setActiveItem('lstLancamentos');
	},
	voltarParaFormRateio: function(){
		Ext.Viewport.setActiveItem('frmRateio');
	},
	exibirRateioLancamentosSelecionados:function(){
		Ext.Viewport.setActiveItem('lstRateioLancamentosSelecionados');
	},
	
	
	//eventos dos botoes
	irParaRateioLancamentos: function(){
		this.alimentarSessionStore();
		Ext.Viewport.setActiveItem('lstLancamentosRateio');
	},
	
	limparSessionStore: function(){
		var store = Ext.getStore("lancamentoRateioStore");
		store.load();
		store.removeAll();
		store.load();
	},
	
	alimentarSessionStore: function(){
		this.limparSessionStore();
		var store = Ext.getStore('lancamentoStore');
		
		var me =this;	
		store.load({
			callback:function(records, successful, operation){
				me.inserirRegistros(records);
			}
		});
		
	},
	
	inserirRegistros: function(arrayRegistros){
		var me = this;
		var storeRateio = Ext.getStore("lancamentoRateioStore");
		var arrayDados = [];
		arrayRegistros.forEach(function(item){
			if (item.data.conta.despesa){
				arrayDados.push(me.criarObjeto(item.data));
			}
		});	
		storeRateio.add(arrayDados);
		storeRateio.sync();
	},	
	
	criarObjeto: function(itemBase){
		var obj = Ext.create('SysFinancMob.model.contas.Lancamento', itemBase);
		return obj;
	},
	
	selecionarLancamento: function(){
		var lancamentoSelecionado = this.getlstLancamentosRateio().getSelection(0);
		var store = Ext.getStore('lancamentoRateioStore');
		var index = store.findExact('id', lancamentoSelecionado[0].data.id);
		if (index > -1){
			this.registrarRateio(lancamentoSelecionado, store, index);
			
		}
	},
	
	
//	editarLancamentoRateio: function(index, target, record, e, eOpts){
//		if (! this.editorLancamentoRateio ){
//			this.editorLancamentoRateio = Ext.create('SysFinancMob.view.contas.EditorLancamentoRateio');
//		} 		
//		Ext.Viewport.setActiveItem('editorLancamentoRateio', e.data);
//	},
//	
//	excluirLancRateio: function(){
//		Ext.Msg.alert('alerta', 'Excluir');
//	},
//	
//	salvarLancRateio: function(){
//		var values = this.getEditorLancamentoRateio().getValues();
//		
//		var lancamentoSelecionado = this.getLstResultLancamentosRateio().getSelection(0);
//		lancamentoSelecionado.save();
//		lancamentoSelecionado.sync();
//	},
	registrarRateio: function(pLancamento, store, index){
		MsgProgresso.loadingMessage('Registrando rateio!');
		var rateioStore = Ext.getStore('rateioStore');
		rateioStore.load({
				callback:function(records, successful, operation){
				}
		});
	},
//	
//	avancarParaEditorRateio: function(){
//		if (! this.editorRateio){
//			this.editorRateio = Ext.create('SysFinancMob.view.contas.Rateio');
//		}
//		var values = this.getEditorRateio().getValues();
//		values.dataRateio= null;
//		values.formaPagamento=null;
//		values.numeroDocFiscal=null;
//		values.nomeEstabelecimento=null;
//		values.valorCompra=null;
//		
//		Ext.Viewport.setActiveItem(this.getEditorRateio());	
//	},
//	
//	avancarParaListaRateios: function(){
//		var values = this.getEditorRateio().getValues();
//		var rateioStore = Ext.getStore('rateioStore');
//		var objRateio = rateioStore.getAt(0);
//		objRateio.data.dataRateio = UtilData.formatarDataParaString(values.dataRateio, 'Y-m-d');
//		objRateio.data.idFormaPagamento = values.formaPagamento;
//		objRateio.data.numDocFiscal= values.numeroDocFiscal;
//		objRateio.data.nomeEstabelecimento= values.nomeEstabelecimento;
//		objRateio.data.totalCompra= values.valorCompra;
//		
//		var validationObj = objRateio.validate();
//		if (!validationObj.isValid()) {
//			var strErros = [];
//			validationObj.each(function(errorObj) {
//				strErros.push(errorObj.getMessage());
//			});
//			
//			Ext.Msg.alert('Rateio', 'Dados incorretos:' + strErros);			
//		} else {
//			objRateio.save();
//			if (! this.lstResultLancamentosRateio){
//				this.lstResultLancamentosRateio = Ext.create('SysFinancMob.view.contas.ResultLancamentosRateio');
//			}
//			this.getLstResultLancamentosRateio().setData(this.getData(objRateio.data.parcelasARatear));
//			
//			Ext.Viewport.setActiveItem(this.getLstResultLancamentosRateio());
//		}		
//	},
//	
//	getData: function(listaLancamentos){
//		var obj = [];
//		for(var i = 0 ; i < listaLancamentos.length; i++){
//			var item = listaLancamentos[i];
//			var lancamento = new Object();
//			lancamento.id = item[0].data.id;
//			lancamento.valorFmt = item[0].data.valorFmt;
//			lancamento.conta = item[0].data.conta;
//			lancamento.valor = item[0].data.valor;
//			lancamento.formaPagamento = item[0].data.formaPagamento;
//			lancamento.valorRateio = item[0].data.valorRateio;
//			lancamento.valorRatearFmt = UtilFormatacao.formatarValor(item[0].data.valorRateio);
//			lancamento.dataVencimento = new Date();
//			lancamento.dataPagamento= new Date();
//
//			obj.push( lancamento );
//		}
//		return obj;
//	},
//	
//	zerarLancamentosSelecionados: function(){
//		var store = Ext.getStore('rateioStore');
//		if (store != null){
//			store.load();
//			store.removeAll();
//		}
//	},
//	
//	listarLancamentosRateio: function(){
//		MsgProgresso.loadingMessage('Consultando Lan&ccedil;amentos... Aguarde!');		
//		var values = this.getBuscaLancamentosRateio().getValues();
//		var dataBase = UtilData.formatarDataParaString(values.dataBase, 'Y-m-d');
//		var idUsuario = UsuarioLogado.getUsuario().id;
//		var paramsFiltro = "dataBase="+dataBase+"&tipo="+values.classificacao+"&bolPagas=false"; 
//		var pUrl = URLConstants.URL_BASE+ "/contas/lancamentos?"+paramsFiltro+"&idUsuario="+idUsuario;
//		this.zerarLancamentosSelecionados();
//		var store = Ext.getStore('lancamentoStore');
//		store.clearFilter();
//		store.setProxy({
//			url: pUrl
//		});
//		store.load({
//			callback:function(records, successful, operation){
//				if (records.length > 0){
//					Ext.Viewport.setActiveItem('lstLancamentosRatear');
//				} else {
//					Ext.Msg.alert('Rateio', 'Nenhum Lan&ccedil;amento com esses filtros!');
//				}
//				MsgProgresso.stopLoading();
//			}
//		});
//	},
//	
//	confirmarRateio: function(){
//		var me = this;
//		Ext.Msg.confirm('Confirma&ccedil;&atilde;o', 'Deseja realmente confirmar o rateio?',
//				function(buttonId) {
//					if (buttonId == 'yes'){
//						Ext.Msg.alert('', 'Enviando os dados...');
//						me.zerarLancamentosSelecionados();
//						Ext.Viewport.setActiveItem('lstLancamentosRatear');					
//					}
//				});
//		
//	}
	
});