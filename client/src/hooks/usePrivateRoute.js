import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const usePrivateRoute = (redirect = '/login') => {
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth) navigate(redirect)
  }, [navigate, auth, redirect])
}

export default usePrivateRoute
