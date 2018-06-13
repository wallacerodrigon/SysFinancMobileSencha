Ext.define('SysFinancMob.store.contas.Lancamento', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'lancamentoStore',
		autoLoad: false,
		model:'SysFinancMob.model.contas.Lancamento',
		sorters: [
		          {property: 'descClassificacao', direction:'ASC'},
		          {property: 'paga', direction:'ASC'},
		          {property: 'descFormaPagamento', direction:'ASC'}
		          ],
		grouper: {
            groupFn: function(record) {
            	return record.get('descClassificacao');
            },
            sortProperty: "descClassificacao"
		},
		filters: [
		          {property:'paga', value:false},
		         
		],
		proxy: {
			type: 'rest', // 'ajax',
			reader: {
				type: 'json',
				rootProperty: 'listaLancamentos'
			}			
		},
		listeners: {
		     load: function(self, records){
//		    	 if (records.length > 0){
//		    		 for(var i = 0; i < records.length; i++){
//		    			 var rec = records[i];
//		    			 
//		    			 //rec.data.valorFmt= Ext.util.Format.date(rec.data.valor);
//		    			 rec.data.dataFmt = Ext.util.Format.date( rec.data.dataVencimento, 'd-m-Y' );
//
//		    		 }
//		    	 }
		     }       
		}
	},
	
});