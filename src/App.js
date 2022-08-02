
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/login';
import Signup from './components/signup';
import Contacts from './components/contacts';
// import DragDrop from './testComponents/dragDrop';
// import CsvFileTest from './testComponents/csv';
import Protected from './components/protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Protected/>}>
        <Route path="/contacts" element={<Contacts/>}></Route>
        </Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
          
          {/* <Route path="/drag" element={<DragDrop/>}></Route>
          <Route path="/csv" element={<CsvFileTest/>}></Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
