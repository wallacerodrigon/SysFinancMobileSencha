 Ext.define('SysFinancMob.model.menu.ItemMenu', {
     extend: 'Ext.data.Model',
     xtype: 'itemmenumodel',
     config: {
         fields: [{
	             name: 'text',
	             type: 'string'
         },
            {
	        	 name: 'leaf',
	        	 type: 'boolean'
            },
            {
	        	name:'telaParaAbrir',
	        	type: 'string'
            }
         ]
     }
 });
