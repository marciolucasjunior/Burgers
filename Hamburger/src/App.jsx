
import Home from './pages/Home'
import Next from './pages/Next'

import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {


  return (

    
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Pedidos' element={<Next />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
