const initialState = [
  { id: '0', content: 'lorem1231232131231212312312321312312312 3123 123123 123 123 0', time: '02:38', senderId: '123123' },
  { id: '1', content: 'lorem 1', time: '02:38', senderId: '123123' },
  { id: '2', content: 'lorem 2', time: '02:38', senderId: '321321' },
  { id: '3', content: 'lorem 3', time: '02:38', senderId: '123123' },
  { id: '4', content: 'lorem 4', time: '02:38', senderId: '123123' },
  { id: '5', content: 'lorem 5', time: '02:38', senderId: '123123' },
  { id: '6', content: 'lorem 6', time: '02:38', senderId: '123123' }
]

const messagesReducer = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state
  }
}

export default messagesReducer
