import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from "../src/pages/homepage"// Import the HomePage component


function App() {
 

  return (
    <HashRouter>
            <Routes>
        <Route path="/" element={<HomePage />} /> 
         <Route path="/dashboard" element={<HomePage />} /> 
     
      </Routes>
    </HashRouter>
  )
}

export default App
