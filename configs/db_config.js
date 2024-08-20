/**
 * pool:连接池 ，idle:超时时间 
 * conf: 账号 密码
 */
module.exports = {
    mySql: {
        base:{ 
            host:'localhost',
            dialect:'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        },
        conf:['txclass','root','12345678']
    }
}