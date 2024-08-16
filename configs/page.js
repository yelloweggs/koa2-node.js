const BASE_URL = '//localhost:3000/'

// 页面配置
module.exports = {
    INDEX:{
        HEAD:{
            TITLE: '首页1',
            NAME:'xiaorsensen',
            KEYWORD:'xiaorsensen',
            DESCRIPTION:'这是一段koa的demo'
        },
        STYLES:[
            BASE_URL + 'css/index.css'
        ],
        SCRIPT:[
            BASE_URL + 'js/index.js'
        ]
    }
}