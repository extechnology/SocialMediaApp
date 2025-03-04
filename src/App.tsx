import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import SuspenseLoader from "./components/Common/SuspenseLoader"


const Layout = lazy(() => import("./components/Layout/Layout"))
const Landing = lazy(() => import("./Pages/Landing"))
const Feed = lazy(() => import("./Pages/Feed"))
const Auth = lazy(() => import("./Pages/Auth"))

function App() {


  return (


    <>

      <Suspense fallback={<SuspenseLoader fullScreen text="Loading..." />}>

        <Routes>

          <Route element={<Layout />} >

            <Route path="/" element={<Landing />} />

            <Route path="/feed" element={<Suspense fallback={<SuspenseLoader fullScreen text="Loading feed..." />} ><Feed /></Suspense>} />

            <Route path="/auth" element={<Auth />} />

          </Route>

        </Routes>

      </Suspense>


    </>


  )
}

export default App
