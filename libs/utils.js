const cp = require('child_process'),
     { resolve } = require('path'),
     nanoId = require('nanoid'),
     Qiniu = require('qiniu')


module.exports ={
    // 为爬虫程序创建子进程执行
    startProcess(options) {
        const script = resolve(__dirname,options.path)
              child = cp.fork(script,[])

        // 进程是否被执行
        let invoked = false;

        // 成功
        child.on('message',(data)=>{
            options.message(data)
        })

        // 失败
        child.on('exit',(code)=>{
            if(invoked) return;

            invoked = true;
            options.exit(code);
        })

        // 错误
        child.on('error',(err)=>{
            if(invoked) return;

            invoked = true;
            options.error(err);
        })

    },

    // 上传七牛
    qiniuUpload(options){
        const mac = new Quniu.auth.digest.Mac(options.ak,options.sk),
              conf = new Quniu.conf.Config(),
              client = new Qiniu.rs.BucketManager(mac,conf),
              key = nanoId() + options.exit;

        // 上传
        return new Promise((resolve,reject)=>{
            client.fetch(options.url,options.bucket,key,(error,ret,info)=>{
                if(error) {
                    reject(error)
                } else {
                    if(info.statusCode === 200){
                        resolve({key})
                    }else {
                        reject(info)
                    }
                }
            })
        })
    }
}