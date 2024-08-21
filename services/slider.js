
/**
 * 创建表的数据
 */
const SliderModel = require('../db/models/slider');
class SliderService {
    
    async addSliderData(data){
        const cid = data.cid;
        // 根据cid查找是否存在
        const result = await SliderModel.findOne({
            where:{
                cid
            }
        })
        // 存在一条即更新
        if(result) {
            return await SliderModel.update(data,{
                where:{
                    cid
                }
            })
        } else {
            // 不存在即使添加一条
            return await SliderModel.create(data)
        }

        
    }
}

module.exports = new SliderService();