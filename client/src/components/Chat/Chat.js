import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from './Header'
import MessagesList from './MessagesList'
import Form from './Form'

const Chat = () => {
  const chat = useSelector(state => state.chat)
  // const { id } = useParams()

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
