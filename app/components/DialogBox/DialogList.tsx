'use client';
import React from 'react'
import DialogItem from './DialogItem'
import DialogItemBot from './DialogItemBot';
import { useConversation } from '@/app/hooks/useConversation';
const DialogList = () => {
  // 对话记录
  const { conversation, addMessage, deleteMessage } = useConversation();
  console.log(conversation)
  const lists = conversation.map((item)=>{
    if(item.role == 'user'){
      return (
        <DialogItem key={item.id} content='hello' />
      )
    }else{
      return (
        <DialogItemBot key={item.id} isHeader isFooter content='default' />
      )
    }
  })
  return (
    <div className='p-4 basis-10/12'>
      {lists}
    </div>
  )
}

export default DialogList