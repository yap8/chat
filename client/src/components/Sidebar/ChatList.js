import ChatItem from "./ChatItem"

const chats = [
  { id: '1', name: 'name 1' },
  { id: '2', name: 'name 2' },
  { id: '3', name: 'name 3' },
  { id: '4', name: 'some user 1' },
  { id: '5', name: 'some user 2' },
  { id: '6', name: 'some user 3' }
]

const ChatList = () => {
  return (
    <div>
      <ul>
        {chats.map(chat => (
          <ChatItem key={chat.id} id={chat.id} name={chat.name} />
        ))}
      </ul>
    </div>
  )
}

export default ChatList
