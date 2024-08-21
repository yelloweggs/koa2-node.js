/**
 * 建slider表
 * define(表名，字段)
 * -comment：描述
 * -type：类型
 * -allowNull：是否允许为空
 * -unique：是否唯一
 */

const seq = require('../connection/mysql_connect'),
      {INT,STRING} = require('../../configs/db_type_config');


const Slider = seq.define('slider',{
    cid:{
        comment:'',
        type:INT,
        allowNull: false,
        unique: true
    }
})

module.exports = Slider;