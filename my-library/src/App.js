import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from './component/Student/StudentPage/StudentPage';
import BookPage from './component/Book/BookPage/BookPage';

function App() {
  return (
   <>
   <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<StudentPage />} />
        <Route path="book" element={<BookPage/>} />
      </Routes>

   </BrowserRouter>
   

  
   </>
  );
}

export default App;
