/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-18 09:26:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-18 14:00:26
 * @message: 
 */
export default {
  'post /api/getList': (req, res) => {
    let data= [
      {
        id: 1,
        img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
        title: '东城民宿',
        info: '东城区交通方便',
        price: '100'
      },
      {
        id: 2,
        img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        title: '西城民宿',
        info: '西城区山水怡情',
        price: '120'
      },
      {
        id: 3,
        img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
        title: '新区民宿',
        info: '新区民宿位置优越',
        price: '200'
      },
      {
        id: 4,
        img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        title: '老城民宿',
        info: '老城区风景秀美',
        price: '220'
      },
      {
        id: 5,
        img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
        title: '东城民宿',
        info: '东城区交通方便',
        price: '100'
      },
      {
        id: 6,
        img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        title: '西城民宿',
        info: '西城区山水怡情',
        price: '120'
      },
      {
        id: 7,
        img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
        title: '新区民宿',
        info: '新区民宿位置优越',
        price: '200'
      },
      {
        id: 8,
        img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        title: '老城民宿',
        info: '老城区风景秀美',
        price: '220'
      }
    ]
    if(req.body.pageNum>4){
      data=[]
    }
    res.json({
      status: 200,
      data
    });
  }
}