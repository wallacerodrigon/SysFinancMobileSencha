Ext.define('SysFinancMob.controller.UtilFormatacao', {
	alternateClassName: 'UtilFormatacao',
	statics: {
		formatarValor: function(valorDouble){
			if (valorDouble == null || valorDouble == NaN){
				return "0,00";
			}
			var newValue = new String(valorDouble).replace('.', ',');
			var indexVirgula = newValue.indexOf(',');
			if (indexVirgula < 0){
				newValue += ",00";
			} else {
				var caracteresAposVirgula = newValue.substring(indexVirgula+1, newValue.length);
				if (caracteresAposVirgula.length > 2){
					newValue = newValue.substring(0, indexVirgula)+','+ caracteresAposVirgula.substring(0,2);
				} else if (caracteresAposVirgula.length == 1){
					newValue = newValue + "0";
				}
			}
			return newValue;
		},
		
		formatarData: function(dataObject){
			var strData = String(dataObject);
			if (strData.indexOf("-") > -1){
				strData = strData.replace("-", "/");
				strData = strData.replace("-", "/");
			}
			return strData;
		}
	},
	
}); 