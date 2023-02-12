
import React from 'react'
import './post.css'
import { BoxPlotTwoTone, LikeTwoTone, DislikeTwoTone, MessageTwoTone, FireTwoTone } from '@ant-design/icons'
import { Avatar, Space, Typography } from 'antd';
const { Text} = Typography;




const Post = (props) => {


   return (
       <div className='postStyle'>
           <div className='headerStyle'>
            <Avatar src={props.author.photo}></Avatar>
               <p>{props.author.name}</p>
               <p><BoxPlotTwoTone /></p>
               <p>{props.author.nickname}</p>
           </div>
           <div className='contentStyle'>
               <img
                   alt=''
                   src={props.image}
               ></img>
               <p>
                   {props.content}
               </p>
           </div>
           <Space direction='horizontal' size={'large'}>
               <Text type="success">
                   {props.date}
               </Text>
               <p><LikeTwoTone /></p>
               <p><DislikeTwoTone /></p>
               <p><FireTwoTone /></p>
               <p><MessageTwoTone /></p>
               </Space>
       </div>
   );
}


export default Post;