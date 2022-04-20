const initialState = [
  { id: '12312', content: 'lorem', date: '02/09/2002' },
  { id: '12312', content: 'lorem', date: '02/09/2002' },
  { id: '12312', content: 'lorem', date: '02/09/2002' },
  { id: '12312', content: 'lorem', date: '02/09/2002' },
  { id: '12312', content: 'lorem', date: '02/09/2002' },
  { id: '12312', content: 'lorem', date: '02/09/2002' }
]

const messagesReducer = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state
  }
}

export default messagesReducer
