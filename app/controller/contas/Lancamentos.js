Ext.define('SysFinancMob.controller.contas.Lancamentos', {
	extend: 'Ext.app.Controller',
	xtype: 'lancamentocontroller',
	requires: [
		'Ext.MessageBox', 'Ext.util.Format',
		'SysFinancMob.controller.UtilFormatacao',
		'SysFinancMob.controller.UtilData',
		'SysFinancMob.controller.UtilRequisicao',
		'SysFinancMob.controller.UsuarioLogado'
	],
	config: {
		refs: {
            lstLancamentos: ".lstLancamentos",
            gerador: ".geradorLancamento",
            frmmenu: ".frmmenu",
			imgLancamentos: ".frmmenu #imgLancamentos",
			imgGeracao: ".frmmenu #imgGeracao",
			imgMapaContas: ".frmmenu #imgMapaContas",
			imgRateio: ".frmmenu #imgRateio",
			btnConsultar: "#lancamentoSearchBottomBar #btnBuscarBar",
			btnSairConsultas: "#lancamentoSearchBottomBar #btnSairConsultas",
			btnSairResultLanctos: "#lstLancamentos button[name='btnSairResultLanc']",
			lancamentoBusca: ".lancamentoBusca",
			editorLancamento: ".editorLancamento",
			btnLimparConsulta: "#lancamentoSearchBottomBar #btnLimparBar",
			utilizadorLancamento: ".utilizadorLancamento",
			lblTotais: ".lstLancamentos label[name='lblTotais']",
			txtBuscaLanctos:".lstLancamentos searchfield[name='buscaLanc']",
				
			//botï¿½es de voltar
			btnVoltaDosFiltros: "#lancamentoSearchBottomBar #btnVoltarBar",
			btnVoltaDoSubMenu: ".frmmenu button[name='btnSairMenu']",
			btnVoltaDoSubMenuItem: ".frmmenu button[name='btnSairSubMenuItem']",	
			btnVoltarDoEditor: ".editorLancamento button[name='btnVoltarEditorLancamento']",
			btnVoltarGeradorLancamento: ".lstContas button[name='btnVoltarGeradorLancamento']",
			btnSincronizarContas: ".lstContas button[name='btnSincronizar']",

			//botoes da busca de lançamentos
			btnVoltaDoResultLancamentos: ".lstLancamentos button[name='btnVoltar']",
			btnRateio: ".lstLancamentos button[name='btnRateio']",
				
			//botoes de aï¿½ï¿½o do editor
			btnExcluirLancamento: ".editorLancamento button[name='btnExcluirLancamento']",
			btnBaixar: ".editorLancamento button[name='btnBaixar']",
			btnUtilizar: ".editorLancamento button[name='btnUtilizar']",
			btnSalvarLancamento: ".editorLancamento button[name='btnSalvarLancamento']",
				
			//botooes do utilizador
			btnSalvarUtilizacao: ".utilizadorLancamento button[name='btnSalvarUtilizacao']"	,
			btnVoltarUtilizadorLancamento: ".utilizadorLancamento button[name='btnVoltarUtilizadorLancamento']",

			//botoes do gerador
			txtSearchField: ".lstContas searchfield[name='busca']",
			lstContas:	".lstContas",
			
			//variaveis globais
			idLancamentoAtual: null,
			formaSelecionada: null
		},
		
		control: {
			lancamentoBusca: {
				activate: 'onActivateBusca',
				show: 'onShow'
			},
			btnVoltaDosFiltros: {
				tap: 'onVoltarParaSubMenu'
			},
			btnVoltaDoSubMenu: {
				tap: 'onVoltarParaMenu'
			},
			btnVoltaDoSubMenuItem: {
				tap: 'onVoltarParaSubMenu'
			},
			
			btnVoltaDoResultLancamentos: {
				tap: 'onVoltarParaTelaConsulta'
			},			
			btnVoltarDoEditor: {
				tap: 'voltarDoEditor'
			},
			btnVoltarUtilizadorLancamento: {
				tap: 'irParaTelaEditor'
			},
			btnVoltarGeradorLancamento: {
				tap: 'onVoltarParaSubMenu'
			},
			btnSairResultLanctos:{
				tap: 'onSairGeral'
			},
			btnSairConsultas: {
				tap: 'onSairGeral'
			},
			imgLancamentos:{
				tap: 'goToTelaConsulta'
			},
			imgGeracao: {
				tap: 'goToTelaListaContas'
			},
			imgMapaContas:{
				tap: 'goToTelaMapaContas'
			},
			imgRateio:{
				tap: 'goToTelaRateioContas'
			},

			btnConsultar:{
				tap: 'onConsultar'
			},
			lstLancamentos:{
				itemtap: 'onLancamentoItem'
			},
			btnLimparConsulta: {
				tap: 'onLimparConsulta'
			},
			
			//botï¿½es de aï¿½ï¿½o
			btnExcluirLancamento:{
				tap: 'onExcluirLancamento'
			},
			
			btnBaixar: {
				tap: 'onBaixarLancamento'
			},
			btnUtilizar:{
				tap: 'onUtilizarLancamento'
			},
			btnSalvarLancamento:{
				tap: 'onSalvarLancamento'
			},
			btnSalvarUtilizacao: {
				tap: 'onSalvarUtilizacao'
			},
			txtSearchField: {
				keyup: 'onSearch',
				clearicontap:'onSearchClearIconTap'
			},
			lstContas:{
				itemtap:'onSelectConta'
			},
			txtBuscaLanctos:{
				keyup: 'onSearchLanctos',
				clearicontap:'onSearchClearLanctos'
			},
			btnSincronizarContas: {
				tap: 'onSincronizar'
			},
			btnRateio: {
				tap: 'abrirRateio'
			}
		},
		
	},
	onActivateBusca: function(newActiveItem, thisview, oldActiveItem, eOpts){
		//console.log('On Activate');
	},
	
	onShow: function(newActiveItem, thisview, oldActiveItem, eOpts){
		console.log('onshow');
		//var fields = newActiveItem.getFields();
		//fields.formaPagamento.setValue(null);
		console.log(this.formaSelecionada);
	},
	
	onExcluirLancamento: function(){
		var me = this;
		Ext.Msg.confirm('Exclus&atilde;o', 'Deseja realmente excluir esse lan&ccedil;amento?',
				function(buttonId) {
					if (buttonId == 'yes'){
						me.excluirLancamento();
					}
				});

	},
	onBaixarLancamento: function(){
		var me = this;
		Ext.Msg.confirm('Baixa', 'Deseja realmente baixar esse lan&ccedil;amento?',
				function(buttonId) {
					if (buttonId == 'yes'){
						me.baixarLancamento();
					}
				});
	},
	
	onUtilizarLancamento: function(){
		
		Ext.Viewport.add({xtype:'utilizadorLancamento'});
		var values = this.getEditorLancamento().getValues();
		var fields = this.getUtilizadorLancamento().getFields();
		fields.id.setValue(values.id);
		fields.descricao.setValue(values.descricao);
		fields.formaPagamento.setValue(values.formaPagamento.id);
		fields.valor.setValue(null);
		fields.dataUtilizacao.setValue(new Date());
		fields.valorParcelaOrigem.setValue( UtilFormatacao.formatarValor( values.valor ) );
		
		Ext.Viewport.setActiveItem(this.getUtilizadorLancamento());
		
	},
	
	onSalvarLancamento: function(){
		this.salvarLancamento(false);
	},
	
	onLancamentoItem: function(index, target, record, e, eOpts){
		this.editarItem(e.data);
	},
	onSelectConta: function(index, target, record, e, eOpts){
		this.goToTelaDadosGeracao(e.data);
	},
	
	irParaTelaEditor: function(){
		Ext.Viewport.setActiveItem(this.getEditorLancamento());
	},
	onVoltarParaTelaConsulta: function(){
		Ext.Viewport.setActiveItem('lancamentoBusca');
	},
	onVoltarParaSubMenuItem: function(){
		var values = this.getLancamentoBusca().getValues();
		values.busca.setValue('');
		Ext.Viewport.setActiveItem('frmmenu');
	},
	onVoltarParaMenu: function(){
		Ext.Viewport.setActiveItem('frmmenu');
	},
	onVoltarParaSubMenu: function(){
		Ext.Viewport.setActiveItem('frmmenu');		
	},
	onSairGeral: function(){
		Ext.Viewport.setActiveItem("frmlogin");
	},
	voltarDoEditor: function(){
		this.atualizarContadores(false);
	},
	goToTelaConsulta: function(){
		var usuarioVo = UsuarioLogado.getUsuario();
		var store = Ext.getStore('formaPagamentoStore');
		store.setProxy({
			url: URLConstants.URL_BASE + '/formaspagamento/lista/'+usuarioVo.id
		});
		store.load();
		var telaBusca = Ext.create('SysFinancMob.view.contas.Lancamentos');
		Ext.Viewport.add( telaBusca );
		Ext.Viewport.setActiveItem('lancamentoBusca');
		this.onLimparConsulta();
	},
	goToTelaRateioContas:function(){
		var usuarioVo = UsuarioLogado.getUsuario();
		var store = Ext.getStore('formaPagamentoStore');
		store.setProxy({
			url: URLConstants.URL_BASE + '/formaspagamento/lista/'+usuarioVo.id
		});
		store.load();
		var telaBusca = Ext.create('SysFinancMob.view.contas.BuscaLancamentosRateio');
		Ext.Viewport.add( telaBusca );
		Ext.Viewport.setActiveItem('buscaLancamentosRateio');
		
	},
	goToTelaListaContas:function(){
		var store = Ext.getStore('contasStore');
		if (store.getCount() == 0){
			this.onSincronizar();
		} else {
			MsgProgresso.loadingMessage('Recuperando contas... Aguarde!');
			this.encaminharListaContas();
			MsgProgresso.stopLoading();
		}
	},
	
	onSincronizar: function(){
		MsgProgresso.loadingMessage('Recuperando contas... Aguarde!');
		
		var store = Ext.getStore('contasStore');
		
		var idUsuario = UsuarioLogado.getUsuario().id;
		//pegar todas as contas e armazenar no localstorage
		var pUrl = URLConstants.URL_BASE + "/contas/lista?idUsuario="+idUsuario;
		
		store.setProxy({
			url: pUrl,
			type: 'rest'
		});
		store.removeAll();
		var me = this;
		store.load({
			callback:function(records, successful, operation){
				if (successful.success){
					var lista = Ext.JSON.decode(successful.getResponse().responseText);
					me.carregarContasLocal(lista);
					me.encaminharListaContas();
				} else {
					Ext.Msg.alert('Contas', 'Erro ao recuperar as contas');
				}
				MsgProgresso.stopLoading();
			}
		});
		
	},
	
	encaminharListaContas: function(){
		var bolCarregarTela = false;
		if (this.getLstContas() == null){
			var lstContas = Ext.create('SysFinancMob.view.contas.ListaContas');
			bolCarregarTela = true;
		}
		
		if (bolCarregarTela){
			Ext.Viewport.add( this.getLstContas() );	
		}
		Ext.Viewport.setActiveItem('lstContas');
		
	},
	
	onConsultar: function(){
		MsgProgresso.loadingMessage('Consultando lan&ccedil;amentos... Aguarde!');
		var values = this.getLancamentoBusca().getValues();
		var dataBase = UtilData.formatarDataParaString(values.dataBase, 'Y-m-d');
		var idFormaPagamento = values.formaPagamento != null ? "&idFormaPagamento="+values.formaPagamento: "";
		var idConta = values.idConta != null ? "&idConta="+values.idConta: "";
		this.formaSelecionada = values.formaPagamento;
		var idUsuario = UsuarioLogado.getUsuario().id;
		var paramsFiltro = "dataBase="+dataBase + idFormaPagamento + idConta; 
		var pUrl = URLConstants.URL_BASE+ "/contas/lancamentos?"+paramsFiltro+"&idUsuario="+idUsuario;
		var store = Ext.getStore('lancamentoStore');
		store.clearFilter();
		store.setProxy({
			url: pUrl
		});
		if (values.rdfEstado != 'TD'){
			var bolPaga = values.rdfEstado == 'PG'? true : false;
			store.filter([
			              {property: 'paga', value: bolPaga}
			              ]);
		}
		this.atualizarContadores(true);
	},
	
	atualizarContadores: function(estaComMensagem){
		if (this.getLancamentoBusca() == null){
			var lancamentoBusca = Ext.create('SysFinancMob.view.contas.Lancamentos');
			Ext.Viewport.add({xtype:'lancamentoBusca'});
			Ext.Viewport.add(lancamentoBusca);
		}
		var values = this.getLancamentoBusca().getValues();
		var bolPaga = values.rdfEstado == 'PG'? true : false;
		var bolTodas = values.rdfEstado == 'TD'? true: false;
		var store = Ext.getStore('lancamentoStore');
		if (! bolTodas){
			store.filter([
			              {property: 'paga', value: bolPaga}
			              ]);
		}		
		var me = this;
		store.load({
			callback:function(records, successful, operation){
				var lista = Ext.JSON.decode(successful.getResponse().responseText);
				var valTotalDespesas = 0.00;
				var valTotalReceitas = 0.00;
				
				if (records.length > 0){
					var qtd = 0;
					for(var i = 0; i < records.length; i++){
						var item = records[i];
						if (bolTodas || item.data.paga == bolPaga){
							qtd+=1;
							if (Boolean(item.data.conta.despesa)){
								valTotalDespesas += item.data.valor;	
							} else {
								valTotalReceitas += item.data.valor;	
							}
						}
					}
				}
				
				if (estaComMensagem){
					MsgProgresso.stopLoading();	
				}
				me.irParaListaLancamentos(valTotalDespesas, valTotalReceitas);
			}
		});
		
	},
	
	irParaListaLancamentos: function(valTotalDespesa, valTotalReceita){
		valTotalReceita = isNaN(valTotalReceita) ? 0.00 : valTotalReceita;
		valTotalDespesa = isNaN(valTotalDespesa) ? 0.00 : valTotalDespesa;
		var saldo = valTotalReceita-valTotalDespesa;
		var html =  
				"<p>Receitas:"+UtilFormatacao.formatarValor(valTotalReceita) +"</p>" +
				"<p>Despesas:"+UtilFormatacao.formatarValor(valTotalDespesa) +"</p>" +
				"<p>Saldo:"+UtilFormatacao.formatarValor(saldo) +"</p>";
		if (valTotalReceita == 0 && valTotalDespesa == 0){
			Ext.Msg.alert('Zerado', 'Nenhum lan&ccedil;amento pendente!');
			Ext.Viewport.setActiveItem('lancamentoBusca');
			
		} else {
			Ext.Viewport.setActiveItem('lstLancamentos');
			this.getLblTotais().setHtml(html);
		}
		
	},
	
	editarItem: function(registro){
		var lancamento = this.obterLancamentoAtual(registro.id);
		if (lancamento == null){
			Ext.Msg.alert('Erro', 'Produto n&atilde;o encontrado');
		} else {
			Ext.Viewport.add({xtype:'editorLancamento'});
			this.getEditorLancamento().setRecord(lancamento);

			var fieldsEditor = this.getEditorLancamento().getFields();
			fieldsEditor.descParcela.setValue(lancamento.data.descParcela);
			fieldsEditor.formaPagamento.setValue(lancamento.data.formaPagamento.id);
			var dataVencimento = UtilData.convertStringToDate(lancamento.data.dataVencimento);
			fieldsEditor.dataVencimento.setValue(dataVencimento);
			var bolPagas = Boolean(lancamento.data.paga);
			if (bolPagas){
				fieldsEditor.dataPagamento.setLabel("Dt. Pagto:");
				fieldsEditor.dataPagamento.setValue(UtilData.formatarDataParaString(lancamento.data.dataPagamento, 'd/m/Y'));	
			} else {
				fieldsEditor.dataPagamento.setLabel("");
				//fieldsEditor.dataPagamento.setValue(':: EM ABERTO ::');				
			}
			this.getBtnExcluirLancamento().setDisabled(bolPagas);			
			this.getBtnBaixar().setDisabled(bolPagas);
			this.getBtnUtilizar().setDisabled(bolPagas);
			this.getBtnSalvarLancamento().setDisabled(bolPagas);
			
			Ext.Viewport.setActiveItem(this.getEditorLancamento());
			
		}
	},
	onLimparConsulta: function() {
		this.getLancamentoBusca().setValues({
			dataBase: new Date(),
			formaPagamento: null
		});
	},
	excluirLancamento: function(){
		var values = this.getEditorLancamento().getValues();
		UtilRequisicao.submeterRequisicao('DELETE', '/contas/lancamentos/'+values.id, null, 'Excluindo lan&ccedil;amento. Aguarde!', this.funcaoRetornoExclusao);
	},
	
	funcaoRetornoExclusao: function(result,sender){
		if (result.status == '204'){
			Ext.Msg.alert('Baixa', 'Lan&ccedil;amento exclu&iacute;do com sucesso!');
			sender.atualizarContadores(false);
		}

	},
	
	funcaoRetornoUtilizacao: function(result, sender){
		if (result.status == '204'){
			Ext.Msg.alert('Baixa', 'Lan&ccedil;amento utilizado com sucesso!');
			sender.atualizarContadores(false);
		} else {
			Ext.Msg.alert('Baixa', result.responseText);
		}
	},
	funcaoRetornoSalvamento: function(result,sender){
		if (result.status == '204'){
			Ext.Msg.alert('Atualiza&ccedil;&atilde;o', 'Lan&ccedil;amento salvo com sucesso!');
			sender.atualizarContadores(false);
		}
	},
	
	
	baixarLancamento: function(){
		this.salvarLancamento(true);
	},
	
	obterLancamentoAtual: function(idLancamento){
		var store = Ext.getStore('lancamentoStore');
		var index = store.findExact('id', idLancamento);
		return store.getAt(index);
	},
	
	onSalvarUtilizacao: function(){
		var values = this.getUtilizadorLancamento().getValues();
		if (values.dataUtilizacao == null || values.valor == null || values.valor == 0 || 
			values.formaPagamento == null){
			Ext.Msg.alert('Dados inv&aacute;lidos', 'Preencha todos os campos para continuar!');
			return false;
		}
		
		if (values.valor > values.valorParcelaOrigem){
			Ext.Msg.alert('Dados inv&aacute;lidos', 'Valor deve ser menor ou igual ao valor original do lan&ccedil;amento de origem!');
			return false;
		}
		
		var dto = new Object();
		dto.usuarioVo = UsuarioLogado.getUsuario();
		dto.valorUtilizado= values.valor;
		var data = new Date(values.dataUtilizacao);
		//devido ao Java converter a data retirando 1 dia, deve-se enviar a data com o acréscimo de 1 dia.
		dto.dataUtilizacao= new Date(data.getFullYear(), data.getMonth(), data.getDate()+1);
		dto.formaPagamento = new Object();
		dto.formaPagamento.id = values.formaPagamento;
		dto.parcelaOrigem= new Object();
		dto.parcelaOrigem.id= values.id;
		
		this.idLancamentoAtual = values.id;
		
		var strParamsJson = Ext.JSON.encode(dto);
		UtilRequisicao.submeterRequisicao('POST', '/contas/lancamentos/utilizar', strParamsJson, 'Salvando lan&ccedil;amento... Aguarde!', this.funcaoRetornoUtilizacao, this);
	},
	
	carregarContasLocal:function(registros){
		var store = Ext.getStore('contasStore');
		store.setProxy({
			url: null,
			type: 'localstorage'
		});
		store.load();
		store.removeAll();
		
		//para cada registro, monta um objeto array para salvar depois
		var items = []; 
		for(var i= 0; i < registros.contas.length; i++){
			var item = registros.contas[i];
			if (item != null){
				items[i] = {
						"id":item.id,
						"classificacao":item.classificacao,
						"descricao": item.descricao,
						"fixa":item.fixa,
						"despesa":item.despesa,
						"tipoConta":item.tipoConta
				};
			}
		}
		store.add(items);
		store.sync();
				
	},
	onSearch: function(field){
		var value= field.getValue();
		var store = Ext.getStore('contasStore');
		
		store.clearFilter(!!value);
		if (value){
			store.filter([
			              {filterFn: function(item){
			            	  if (value != null){
			            		  return item.get("descricao").toLowerCase().indexOf(value.toLowerCase()) > -1;  
			            	  }
			              }}
			              ]				
			);
		}
	},
	onSearchClearIconTap: function() {
		var store = Ext.getStore('contasStore');
		store.clearFilter();
		var values = this.getLancamentoBusca().getValues();
		if (values.rdfEstado != 'TD'){
			var bolPaga = values.rdfEstado == 'PG'? true : false;
			store.filter([
			              {property: 'paga', value: bolPaga}
			              ]);
		}		
	},
    
    goToTelaDadosGeracao: function(conta){
    	//Ext.Msg.alert('conta', 'Id da conta:' + Number(conta.id));
    	MsgProgresso.loadingMessage('Carregando tela de gera&ccedil;&atilde;o... Aguarde!');
    	var gerador = null;
    	if (this.getGerador() == null){
    		gerador = Ext.Viewport.add({xtype:'geradorLancamento'});
    	} 
    	

    	var fields = this.getGerador().getFields();
    	fields.idConta.setValue( Number(conta.id) );
    	fields.conta.setValue( conta.descricao );
    	fields.classificacao.setValue( conta.despesa ? "A Pagar":"A Receber" );
     	fields.quantidade.setValue( 1 );
     	fields.valor.setValue( 0.00  );
     	fields.descricaoParcela.setValue( conta.descricao );

		var store = Ext.getStore('formaPagamentoStore');
		store.setProxy({
			url: URLConstants.URL_BASE + '/formaspagamento/lista/'+UsuarioLogado.getUsuario().id
		});
		store.load();
     	
		MsgProgresso.stopLoading();
    	Ext.Viewport.setActiveItem(this.getGerador());
    },
	onSearchLanctos:function(field){
		var value= field.getValue();
		var store = Ext.getStore('lancamentoStore');
		store.clearFilter(!!value);
		if (value){
			store.filter([
			              {filterFn: function(item){
			            	  if (value != null){
			            		  return item.data.descParcela.toLowerCase().indexOf(value.toLowerCase()) > -1;  
			            	  }
			              }}
			              ]				

			);
		}
		
	},
	onSearchClearLanctos: function(){
		var store = Ext.getStore('lancamentoStore');
		store.clearFilter();
	},
	
	salvarLancamento: function(bolPaga){
		var values = this.getEditorLancamento().getValues();
		
		var usuario = UsuarioLogado.getUsuario();
		var lancamentoDTO = new Object();

		var formaPag = new Object();
		formaPag.id = values.formaPagamento;

		var parcelaVo = new Object();
		parcelaVo.id = values.id;
		parcelaVo.formaPagamento = formaPag;
		parcelaVo.valor = values.valor;
		
		if (bolPaga){
			parcelaVo.dataPagamento = new Date();
		}
		
		var data = new Date(values.dataVencimento);
		//devido ao Java converter a data retirando 1 dia, deve-se enviar a data com o acréscimo de 1 dia.
		parcelaVo.dataVencimento = new Date(data.getFullYear(), data.getMonth(), data.getDate()+1);
		
		lancamentoDTO.usuarioVo = usuario;
		lancamentoDTO.lancamentoVo = parcelaVo;
		//lancamentoVo
		var strParamsJson = Ext.JSON.encode(lancamentoDTO);
		UtilRequisicao.submeterRequisicao('PUT', '/contas/lancamentos/'+values.id, strParamsJson, 'Salvando lan&ccedil;amento. Aguarde!', this.funcaoRetornoSalvamento, this);
		
	},
	
	goToTelaMapaContas: function(){
		Ext.Viewport.setActiveItem("telaGraficos");
	},
	
	abrirRateio: function(){
		Ext.Viewport.setActiveItem("frmRateio");
	}
    
});