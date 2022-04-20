const initialState = [
  { id: '1', name: 'name 1', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 0 },
  { id: '2', name: 'name 2', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 2 },
  { id: '3', name: 'name 3', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 0 },
  { id: '4', name: 'some user 1', lastMessage: { text: 'Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 1 },
  { id: '5', name: 'some user 2', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 15 },
  { id: '6', name: 'some user 3', lastMessage: { text: 'Lorem, ipsum dolor.', date: '28/03/2022' }, unread: 0 },
]

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default chatsReducer
