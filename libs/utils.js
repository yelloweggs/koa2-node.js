const cp = require('child_process')
const { resolve } = require('path')

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

    }
}