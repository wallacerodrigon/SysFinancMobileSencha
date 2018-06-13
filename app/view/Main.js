Ext.define('SysFinancMob.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'frmlogin',
    requires: [
        'Ext.form.FieldSet',
		'Ext.Toolbar',
    ],
	
    config: {
        layout: 'fit',
		scroll:false,
		items:[
			{
				xtype:'toolbar',
				docked:'top',
				title:'Identifica&ccedil;&atilde;o',
				items:[
					{
						ui:'back',
						text:'Sair',
						id:'btnSairLogin'
					},
				]
			},
		
			{
				xtype:'fieldset',
				items:[
					{
						xtype:'textfield',
						label:'Login:',
						name:'txtLogin',
						placeholder:'Informe o login',
						required:true
					},
					{
						xtype:'passwordfield',
						label:'Senha:',
						name:'txtSenha',
						placeholder:'Informe a senha',
						required:true
					},
					{
						xtype:'spacer',
					},
					{
						xtype:'button',
						ui:'confirm',
						text:'Autenticar',
						id:'btnAutenticar'
					},
					
				]
				
			},
			{
				xtype:'toolbar',
				docked:'bottom',
				html:['@Copyright 2014-2015 Wallace Rodrigo. Todos os direitos reservados'].join("")
			},
			
		]
	}
});
