Ext.define('SysFinancMob.model.Usuario', {
	extend: 'Ext.data.Model',
	xtype: 'usuarioModel',
	
	config: {
		fields: [
		   {name: 'id', xtype: 'string'},      
		   {name: 'nome', xtype: 'string'},
		   {name: 'usuario', xtype: 'string'},
		   {name: 'senha', xtype: 'string'},
		],
		validations:[
		           {type: 'presence', field: 'usuario'},
		           {type: 'presence', field: 'senha'}
		           ],
		proxy: {
			type: 'sessionstorage'
		}
		,listeners: {
		    load: function(self, records){
				console.log(records);
			  },
		}	

	},
});