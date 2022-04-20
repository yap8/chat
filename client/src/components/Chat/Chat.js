import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { setChat } from '../../redux/actions/chatActions'
import MessagesList from './MessagesList'
import Header from './Header'
import Form from './Form'

const Chat = () => {
  const chats = useSelector(state => state.chats)
  const chat = useSelector(state => state.chat)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    const currentChat = chats.filter(chat => id === chat.id)[0]

    if (currentChat) dispatch(setChat(currentChat))
    if (!id) dispatch(setChat(null))
  }, [dispatch, id, chats])

  return (
    <div className="h-screen w-3/4 flex flex-col justify-between">
      {chat && <>
        <Header />
        <MessagesList />
        <Form />
      </>}
    </div>
  )
}

export default Chat
