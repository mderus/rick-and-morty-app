import Layout from './components/layout/Layout';
import {Routes, Route, Navigate} from 'react-router-dom';
import AllCharactersPage from './pages/AllCharactersPage';
import CharacterPage from './pages/CharacterPage';
import MyFavoritesPage from './pages/MyFavoritesPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/characters' />} />
        <Route path='/characters' element={<AllCharactersPage />} />
        <Route path='/character/:id' element={<CharacterPage />} />
        <Route path='/favorite-characters' element={<MyFavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
