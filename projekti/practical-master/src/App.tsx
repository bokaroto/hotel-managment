import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './routes/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;