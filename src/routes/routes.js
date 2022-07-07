import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const routes = [
  {
    path: '/',
    component: Home,
  },

  // Este "NotFound" debe estar siempre al final de la lista :)
  {
    component: NotFound,
  }
];

export default routes;
