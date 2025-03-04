import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import SuspenseLoader from "./components/Common/SuspenseLoader"


const Layout = lazy(() => import("./components/Layout/Layout"))
const Landing = lazy(() => import("./Pages/Landing"))
const Feed = lazy(() => import("./Pages/Feed"))
const Auth = lazy(() => import("./Pages/Auth"))
const Profile = lazy(() => import("./Pages/Profile"))
const EditProfile = lazy(() => import("./Pages/EditProfile"))
const NotFound = lazy(() => import("./Pages/NotFound"))

function App() {


  return (


    <>

      <Suspense fallback={<SuspenseLoader fullScreen text="Loading..." />}>

        <Routes>

          <Route element={<Layout />} >

            <Route path="/" element={<Landing />} />

            <Route path="/feed" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading feed..." />} ><Feed /></Suspense>} />

            <Route path="/profile" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading profile..." />} ><Profile /></Suspense>} />

            <Route path="/edit-profile" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading profile..." />} ><EditProfile /></Suspense>} />

            <Route path="/auth" element={<Auth />} />

          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>

      </Suspense>


    </>


  )
}

export default App
