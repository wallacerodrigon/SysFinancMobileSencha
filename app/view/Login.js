Ext.define('SysFinancMob.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'frmlogin',
    requires: [
        'Ext.form.FieldSet',
		'Ext.Toolbar',
		'Ext.field.Password'
    ],
	
    config: {
        layout: 'fit',
		scrollable:false,
		items:[
			{
				xtype:'headerBar'
			},
		
			{
				xtype:'fieldset',
				cls: 'tela_login',
				items:[
					{
						xtype:'textfield',
						label:'Login:',
						name:'txtLogin',
						placeHolder:'Informe o login',
					},
					{
						xtype:'spacer',
						height: 15,
					},
					{
						xtype:'passwordfield',
						label:'Senha:',
						name:'txtSenha',
						placeHolder:'Informe a senha',
					},
					{
						xtype:'spacer',
						height: 15,
					},
					{
						xtype:'button',
						ui:'action',
						text:'Autenticar',
						id:'btnAutenticar',
						cls: 'botaoAutenticar'
							
					},
					
				]
				
			},
			{
				xtype:'toolbar',
				docked:'bottom',
				cls: 'rodape',
				html:["<small>&copy; 2014-2015. Todos os direitos reservados a Wallace Sousa</small>"].join("")
			},
			
		]
	}
});
