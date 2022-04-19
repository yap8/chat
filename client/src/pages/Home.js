import Chat from "../components/Chat/Chat"
import Sidebar from "../components/Sidebar/Sidebar"
import usePrivateRoute from "../hooks/usePrivateRoute"

const Home = () => {
  usePrivateRoute()

  return (
    <div className="flex w-full">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Home
