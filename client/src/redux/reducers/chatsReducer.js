const initialState = [
  { id: '123123', name: 'name 1', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 0 },
  { id: '321321', name: 'name 2', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 2 },
  { id: '3213211', name: 'name 3', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 0 },
  { id: '1231213', name: 'some user 1', lastMessage: { text: 'Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 1 },
  { id: '511111', name: 'some user 2', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 15 },
  { id: '633333', name: 'some user 3', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 0 },
]

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default chatsReducer
