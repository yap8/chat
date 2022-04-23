import { useSelector } from "react-redux"
import { getTime } from "../../helpers/dateTime"

import ChatItem from "./ChatItem"
import UserItem from "./UserItem"

const ChatList = () => {
  const users = useSelector(state => state.users)
  const chats = useSelector(state => state.chats)

  return (
    <div className="h-full overflow-auto">
      <ul>
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
      {users && <>
        <h1 className="p-4 text-xl font-semibold">Results:</h1>
        {users.map(user => (
          <ul>
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
            />
          </ul>
        ))}
      </>}
    </div>
  )
}

export default ChatList
