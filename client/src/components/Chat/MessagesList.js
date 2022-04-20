import { useSelector } from "react-redux"

import Message from './Message'

const MessagesList = () => {
  const messages = useSelector(state => state.messages)

  return (
    <ul className="p-4 flex flex-col-reverse justify-endl overflow-auto">
      {messages.map(message => <Message message={message} />)}
    </ul>
  )
}

export default MessagesList
