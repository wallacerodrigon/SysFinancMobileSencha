Ext.define('SysFinancMob.controller.UtilData', {
	alternateClassName: 'UtilData',
	statics: {
		convertStringToDate: function(strData){
			var dia, mes, ano;
			var separador = '';
			if (strData.indexOf('-') > -1){
				separador = '-';
			} else if (strData.indexOf('/') > -1){
				separador = '/';
			} 
			var dados = strData.split(separador);
			
			//ano vem primeiro
			if (dados[0].length == 4){
				ano = dados[0];
				mes = dados[1];
				dia = dados[2];
			} else if (dados[2].length == 4) {
				//ano vem por último
				ano = dados[2];
				mes = dados[1];
				dia = dados[0];
			} else {
				return null;
			}
			return new Date(ano, eval(mes)-1, dia);
		},
		
		formatarDataParaString: function(pDate, pFormato){
			return Ext.util.Format.date(pDate, pFormato);
		}
	},
	
	
	
}); 