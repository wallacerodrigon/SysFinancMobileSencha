Ext.define('SysFinancMob.store.Usuario', {
	extend: 'Ext.data.Store',
	config: {
		storeId:'usuarioStore',
		autoLoad: false,
		model:'SysFinancMob.model.Usuario'
	},
	listeners: {
	      load: function(self, records){
//			console.log(records);
		  },
	  },	
});