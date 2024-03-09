import 'bootstrap/dist/css/bootstrap.min.css'
import FirstPage from './components/FirstPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Products from './components/Products'




function App() {
    return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<FirstPage />} />
     <Route path="/product/:id" element={<Products />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
