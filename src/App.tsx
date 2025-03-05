import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import SuspenseLoader from "./components/Common/SuspenseLoader"
import { Toaster } from "sonner"


const Layout = lazy(() => import("./components/Layout/Layout"))
const Landing = lazy(() => import("./Pages/Landing"))
const Feed = lazy(() => import("./Pages/Feed"))
const Auth = lazy(() => import("./Pages/Auth"))
const Profile = lazy(() => import("./Pages/Profile"))
const UsersProfile = lazy(() => import("./Pages/UsersProfile"))
const EditProfile = lazy(() => import("./Pages/EditProfile"))
const PeoplePage = lazy(() => import("./Pages/PeoplePage"))
const Notifcation = lazy(() => import("./Pages/Notification"))
const CreatePost = lazy(() => import("./Pages/CreatePost"))
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

            <Route path="/userprofile/:username" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading profile..." />} ><UsersProfile /></Suspense>} />

            <Route path="/edit-profile" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading profile..." />} ><EditProfile /></Suspense>} />

            <Route path="/people" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading people..." />} ><PeoplePage /></Suspense>} />

            <Route path="/create" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading..." />} ><CreatePost /></Suspense>} />

            <Route path="/notifications" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading Notifications..." />} ><Notifcation /></Suspense>} />

          </Route>

          <Route path="/auth" element={<Auth />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

        <Toaster />

      </Suspense>



    </>


  )
}

export default App
