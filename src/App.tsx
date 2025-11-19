import { Route, Routes } from "react-router"
import Home from "./page/Home"
import MainLayout from './layout/MainLayout'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App