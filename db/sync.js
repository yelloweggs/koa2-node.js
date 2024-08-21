/**
 * 同步表操作
 */

const seq = require('../connection/mysql_connect');
require('./models');

/**
 * 测试连接是否成功
 * authenticate：SequeLize提供的方法
 */

seq.authenticate().then(()=>{
    console.log('ok')
}).catch((error)=>{
    console.log(error,'error')
})

/**
 * 同步表
 * sync：SequeLize提供的方法
 */
seq.sync({
    force: true
}).then(()=>{
    console.log('sync ok');
    process.exit();
})