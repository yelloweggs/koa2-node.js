# 学习koa2第二天
1. 了解到index.js页面怎么拆分（思路），类似vue页面由多个组件进行组装
   1. 把html页面拆分成head和footer组件
   2. head、foot页面的配置单独抽离成page.js
   3. controller层（逻辑层）引用页面配置，把数据流向=〉index.js，中间站通过router
   4. css（link）和js(script)同样抽离写在public文件夹下
