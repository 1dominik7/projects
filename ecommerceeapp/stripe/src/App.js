import { BrowserRouter, Route, Routes} from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/pay" element={<Pay />} />
        <Route exact path="/success" element ={<Success/>}/> 
      </Routes>
    </BrowserRouter>
  )
  }

  export default App
