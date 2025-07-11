import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './assets/pages/Home';
import Favourites from './assets/pages/Favourites';
import MovieDetails from './assets/pages/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />,
  },
  {
    path: "/Favourites",
    element: <Favourites />
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />
  }
]);

const App = () => {
  return (
    <RouterProvider 
    router={router} />
  )
}

export default App;
