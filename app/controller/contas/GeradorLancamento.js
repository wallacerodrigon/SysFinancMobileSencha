Ext.define('SysFinancMob.controller.contas.GeradorLancamento',
{
	extend : 'Ext.app.Controller',
	xtype : 'geradorController',
	requires : [ 'Ext.MessageBox',
			'SysFinancMob.controller.UtilFormatacao',
			'SysFinancMob.controller.UtilData',
			'SysFinancMob.controller.UtilRequisicao',
			'SysFinancMob.controller.UsuarioLogado' ],
	config : {
		refs : {
			geradorLancamento : ".geradorLancamento",
			btnVoltarGeradorLancamento : ".geradorLancamento button[name='btnVoltarFrmGeradorLancamento']",
			btnGerarLancamento : ".geradorLancamento button[name='btnGerarLancamento']",
			lblTotais: ".lstLancamentos label[name='lblTotais']"			
		},

		control : {
			btnVoltarGeradorLancamento : {
				tap : 'onVoltar'
			},

			btnGerarLancamento : {
				tap : 'onGerar'
			}
		},
	},

	onVoltar : function() {
		Ext.Viewport.setActiveItem('lstContas');
	},

	onGerar : function() {
		var values = this.getGeradorLancamento().getValues();
		
		if (!this.validarForm(values)){
			Ext.Msg.alert('Informe todos os dados para continuar!');
			return false;
		}

		var dto = new Object();
		dto.idConta=values.idConta;
		dto.quantidade=values.quantidade;
		
		var data = new Date(values.dataVencimento);
		//devido ao Java converter a data retirando 1 dia, deve-se enviar a data com o acréscimo de 1 dia.
		dto.dataVencimentoInicial=new Date(data.getFullYear(), data.getMonth(), data.getDate()+1);
		dto.valorVencimento=values.valor; 
		dto.idFormaPagamento=values.formaPagamento;
		dto.parcial=false;
		dto.descricaoParcela = values.descricaoParcela;
		dto.usuarioVo= UsuarioLogado.getUsuario();
		var strParamsJson = Ext.JSON.encode(dto);
		UtilRequisicao.submeterRequisicao('POST', '/contas/lancamentos/gerar', strParamsJson, 'Gerando lan&ccedil;amentos! Aguarde!', this.funcaoRetornoGeracao, this);		
	},
	
	funcaoRetornoGeracao: function(result, sender){
		if (result.status == '204'){
			Ext.Msg.alert('Gera&ccedil;&atilde;o', 'Lan&ccedil;amentos gerados com sucesso!');
			sender.onConsultar();
		}
	},
	
	validarForm: function(valuesDoForm){
		if (valuesDoForm.dataVencimento == null || valuesDoForm.valor == null || valuesDoForm.valor == 0 || 
				valuesDoForm.formaPagamento == null || valuesDoForm.formaPagamento < 0){
			return false;
		}
		
		return true;
	},
	
	onConsultar: function(){
		MsgProgresso.loadingMessage('Consultando lan&ccedil;amentos... Aguarde!');
		var values = this.getGeradorLancamento().getValues();
		
		var me = this;
		var idUsuario = UsuarioLogado.getUsuario().id;
		var pUrl = URLConstants.URL_BASE+ "/contas/lancamentos?idConta="+values.idConta+"&idUsuario="+idUsuario;		
		var store = Ext.getStore('lancamentoStore');
		store.clearFilter();
		store.setProxy({
			url: pUrl
		});
		store.filter([
		              {property: 'paga', value: false}
		              ]);
		store.load({
			callback: function(records, successful, operation){
				var valTotalDespesas = 0.00;
				var valTotalReceitas = 0.00;
				
				if (records.length > 0){
					for(var i = 0; i < records.length; i++){
						var item = records[i];
						if (item.data.paga == false &&
							item.data.conta.id == values.idConta){
							if (item.data.conta.despesa){
								valTotalDespesas += item.data.valor;	
							} else {
								valTotalReceitas += item.data.valor;
							}
						}
					}
				}
				var	saldo = valTotalReceitas - valTotalDespesas;
				var html = "<p>Receitas:"+UtilFormatacao.formatarValor(valTotalReceitas) +"</p>" +
					"<p>Despesas:"+UtilFormatacao.formatarValor(valTotalDespesas) +"</p>" +
					"<p>Saldo:"+UtilFormatacao.formatarValor(saldo) +"</p>";
				Ext.Viewport.setActiveItem('lstLancamentos');
				me.getLblTotais().setHtml(html);
				MsgProgresso.stopLoading();		
			}
		});
	},
	
});
