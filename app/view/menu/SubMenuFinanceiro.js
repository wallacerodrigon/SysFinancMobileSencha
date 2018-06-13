Ext.define('SysFinancMob.view.menu.SubMenuFinanceiro', {
    extend: 'Ext.form.Panel',
    xtype: 'subMenuFinanceiro',

    requires: [
        'Ext.Toolbar',
        'Ext.Panel',
        'Ext.Img'

    ],

    config: {
        layout: 'default',
        scrollable: true,
        fullscreen: true,
        cls: 'menu',
        items: [
            {xtype:'toolbar', title:'Financeiro', docked: 'top'},
            {
                xtype: 'image',
                src: 'resources/icons/pesquisa.png',
                id: 'imgLancamentos',
                cls: 'item_menu'

            },
            {
                xtype: 'image',
                src: 'resources/icons/cash_register.png',
                id: 'imgGeracao',
                cls: 'item_menu'
            },
            {
                xtype: 'image',
                src: 'resources/icons/grafico2.png',
                id: 'imgMapaContas',
                cls: 'item_menu'
            },
            {
                xtype: 'image',
                src: 'resources/icons/rateio.png',
                id: 'imgRateio',
                cls: 'item_menu'
            },
            {xtype:'toolbar', title:'', docked: 'bottom',
            items:[
                {
                    ui:'back',
                    text:'Voltar',
                    name:'btnSairMenu'
                },
            ]
            },
        ]

    }
});