import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { fetchChats } from '../redux/actions/chatsActions'
import usePrivateRoute from "../hooks/usePrivateRoute"
import { fetchMe } from '../redux/actions/userActions'
import Sidebar from "../components/Sidebar/Sidebar"
import Spinner from "../components/Spinner"
import Chat from "../components/Chat/Chat"
import Modal from "../components/Modal"

const Home = () => {
  usePrivateRoute()

  const auth = useSelector(state => state.auth)
  const chats = useSelector(state => state.chats)
  const modal = useSelector(state => state.modal)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth) {
      dispatch(fetchMe())
      dispatch(fetchChats())
    }
  }, [auth, dispatch])

  return (
    <div className="flex w-full items-center justify-center">
      {modal && <Modal />}
      {user && chats ? <>
        <Sidebar />
        <Chat />
      </> : <Spinner className="text-white text-6xl" />}
    </div>
  )
}

export default Home
