import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screen/HomeScreen'
import FormScreen from './screen/FormScreen';
import PageNotFoundScreen from './screen/PageNotFoundScreen';

import './App.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen/>}></Route>
        <Route path="/form" element={<FormScreen />}></Route>
        <Route path="/*" element={<PageNotFoundScreen />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
