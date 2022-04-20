import { useSelector } from "react-redux"

import ChatItem from "./ChatItem"

const ChatList = () => {
  const chats = useSelector(state => state.chats)

  return (
    <div>
      <ul className="h-screen overflow-auto">
        {chats.map(chat => (
          <ChatItem
            key={chat.id}
            id={chat.id}
            name={chat.name}
            lastMessage={chat.lastMessage}
            unread={chat.unread}
          />
        ))}
      </ul>
    </div>
  )
}

export default ChatList
