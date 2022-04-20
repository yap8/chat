import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Chat from "../components/Chat/Chat"
import Sidebar from "../components/Sidebar/Sidebar"
import usePrivateRoute from "../hooks/usePrivateRoute"
import { fetchMe } from '../redux/actions/userActions'
import { fetchChats } from '../redux/actions/chatsActions'

const Home = () => {
  usePrivateRoute()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMe())
    dispatch(fetchChats())
  }, [dispatch])

  return (
    <div className="flex w-full">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Home
