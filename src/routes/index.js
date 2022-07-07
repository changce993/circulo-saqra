import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const Index = () => {
  return (
    <Switch>
      {routes.map(({path, component: Component, ...props}, index) => (
        <Route key={index} exact path={path} {...props} render={props => <Component {...props}/>}/>
      ))}
    </Switch>
  )
};

export default Index;
