import { useSelector } from "react-redux"
import { getTime } from "../../helpers/dateTime"

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
            title={chat.title}
            lastMessageContent={chat.lastMessageContent}
            lastMessageTime={chat.lastMessageCreatedAt && getTime(chat.lastMessageCreatedAt)}
          />
        ))}
      </ul>
    </div>
  )
}

export default ChatList
