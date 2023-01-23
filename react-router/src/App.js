import './App.css';

// pacotes do react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        {/* Search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* redirect */}
          <Route path='/company' element={<Navigate to='/about' />} />
          {/* rota dinamica */}
          <Route path='/products/:id' element={<Product />}/>
          {/* nested routes */}
          <Route path='/products/:id/info' element={<Info />}/>
          {/* página de busca */}
          <Route path='/search' element={<Search />}/>
          {/* No match route */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
