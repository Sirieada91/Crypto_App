import { Routes, Route } from "react-router-dom"
import CoinList from './Components/CoinList'

function App() {
  return (

    <Routes>
      <Route path="/coin" element={<CoinList />}></Route>
      </Routes>
  )
}

export default App