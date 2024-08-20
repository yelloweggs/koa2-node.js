/**
 * 连接
 */
const SequeLize = require('sequelize'),
      {mySql} = require('../../configs/db_config');

const seq = new SequeLize(...mySql.conf, mySql.base);

/**
 * 测试连接是否成功
 * authenticate：SequeLize提供的方法
 */

seq.authenticate().then(()=>{
    console.log('ok')
}).catch((error)=>{
    console.log(error,'error')
})

module.exports = seq

