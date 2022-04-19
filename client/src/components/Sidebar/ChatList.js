import ChatItem from "./ChatItem"

const chats = [
  { id: '1', name: 'name 1', lastMessage: 'Lorem, ipsum dolor.' },
  { id: '2', name: 'name 2', lastMessage: 'Lorem, ipsum dolor.' },
  { id: '3', name: 'name 3', lastMessage: 'Lorem, ipsum dolor.' },
  { id: '4', name: 'some user 1', lastMessage: 'Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. ' },
  { id: '5', name: 'some user 2', lastMessage: 'Lorem, ipsum dolor.' },
  { id: '6', name: 'some user 3', lastMessage: 'Lorem, ipsum dolor.' }
]

const ChatList = () => {
  return (
    <div>
      <ul>
        {chats.map(chat => (
          <ChatItem
            key={chat.id}
            id={chat.id}
            name={chat.name}
            lastMessage={chat.lastMessage}
          />
        ))}
      </ul>
    </div>
  )
}

export default ChatList
