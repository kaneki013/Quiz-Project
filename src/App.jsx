import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './Pages/QuizPage'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/quizpage' element={<QuizPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
