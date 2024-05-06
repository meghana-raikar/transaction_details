import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaction from './pages/Transaction';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
