
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchPage } from './components/search-page/SearchPage'
import { CardDetails } from './components/card-details/CardDetails'

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

export default App
