import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

// my component page
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BookList } from './pages/BookList';
import { Book } from './pages/Book';
import { NotFound } from './pages/NotFound';

// my componnet
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />        
          <Route path='/books'>
            <Route index element={<BookList />} />
            <Route path=':id' element={<Book />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
