import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import MainPage from '@/pages/MainPage'
import Navbar from './components/Navbar'
import ModelViewPage from './pages/ModelViewPage'

const App = () => {
  return (
    <Router>
      <div className="grid h-dvh grid-rows-[auto,1fr] text-coal-black">
        <Navbar />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/model" index element={<ModelViewPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
