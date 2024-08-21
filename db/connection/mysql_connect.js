/**
 * 连接数据库操作
 */
const SequeLize = require('sequelize'),
      {mySql} = require('../../configs/db_config');

const seq = new SequeLize(...mySql.conf, mySql.base);


module.exports = seq

