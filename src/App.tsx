import { Home, Login, PrivateRoute } from '@/pages';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '@/assets/global.css';
import { AuthProvider } from './context';
import { GuestRoute } from './pages/GuestRoute';

function App() {
  return (
    <AuthProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
          <Route path="/login" element={<GuestRoute><Login /></GuestRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
