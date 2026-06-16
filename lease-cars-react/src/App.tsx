import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Home from './pages/Home';
import NewCars from './pages/NewCars';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-car" element={<NewCars />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}
