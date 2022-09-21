import Home from '../view/pages/home';
import Favorites from '../view/pages/favorites';
import Detail from '../view/pages/detail';
import Search from '../view/pages/search';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorites': Favorites,
  '/detail/:id': Detail,
  '/search': Search,
};

export default routes;
