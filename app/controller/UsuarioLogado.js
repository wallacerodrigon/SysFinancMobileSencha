Ext.define('SysFinancMob.controller.UsuarioLogado', {
	alternateClassName: 'UsuarioLogado',
	statics: {
		getUsuario: function(){
			var storeUsr = Ext.getStore('usuarioStore');
			var usuario = storeUsr.getAt(0);
			var usuarioVo = new Object();
			usuarioVo.id = usuario.id;
			usuarioVo.login = usuario.login;
			usuarioVo.senha = usuario.senha;
			return usuarioVo;
		}
	},
	
}); 