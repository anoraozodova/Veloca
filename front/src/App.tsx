import { Route, Routes } from 'react-router-dom'
import { Navbar } from './widgets/Navbar'
import { HomePage } from './pages/Home/ui/HomePage'
import { AboutPage } from './pages/About'
import { FindUsPage } from './pages/FindUs'

const ContactPage = () => <main />

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stocklists" element={<FindUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
