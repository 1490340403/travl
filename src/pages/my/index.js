/*
 * @Author: 陈刚强
 * @Email: 1490340403@qq.com
 * @Date: 2020-12-17 09:21:15
 * @LastAuthor: 陈刚强
 * @LastTime: 2020-12-24 18:09:17
 * @message: 
 */
import React, { useState, useEffect,useContext } from 'react';
import { StoreContext, useStoreHook } from 'think-react-store';
import { List } from 'antd-mobile';
import style from './index.less'
import router from 'umi/router';
import { useHttpHook} from '@/hooks'
export default function (props){
  const {user:{id}} = useStoreHook()
  const [data]=useHttpHook({
    url:'/user/detail',
    body:{
      username:localStorage.getItem('username')
    }
  })
  const handleClick=()=>{
    router.push({
      pathname: '/user/edit',
      query: {
        id
      }
    })
  }
  return(
    <div className={style.userPage}>
      {/**用户信息 */}
      <div className={style.info}>
        <div className={style.set} onClick={handleClick}>设置</div>
        <div className={style.user}>
          <img alt='user' src={data?.avatar} />
          <div className={style.tel}>{data?.tel}</div>
          <div className={style.sign}>{data?.sign}</div>
        </div>
      </div>
      {/**列表 */}
      <div className={style.lists}>
        <List>
          <List.Item arrow='horizontal'>
            用户协议
          </List.Item>
          <List.Item arrow='horizontal'>
            常见问题
          </List.Item>
          <List.Item arrow='horizontal'>
            联系客服
          </List.Item>
        </List>
      </div>
    </div>
  )
}
