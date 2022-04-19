import { useParams } from 'react-router-dom'
import Header from './Header'

import MessagesList from './MessagesList'

const messages = [
  { id: '322222222', content: 'Hello!', sender: '1' },
  { id: '321321312', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rerum.', sender: '2' },
  { id: '123123', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat culpa est deleniti sit corporis, iste beatae autem officiis explicabo sint!', sender: '1' }
]

const Chat = () => {
  const { id } = useParams()

  return (
    <div className="w-3/4">
      <Header name={'name'} />
      <MessagesList messages={messages} />

    </div>
  )
}

export default Chat
