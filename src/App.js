import './App.css';
import Header from './components/home/header/Header';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/pageContent/HomePage';
import Footer from './components/home/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
