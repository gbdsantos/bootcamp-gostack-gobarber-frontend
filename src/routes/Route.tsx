import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

/**
 * 💡 USE CASE -> Rota Privada/Usuário Autenticado
 *
 * true/true = OK
 * true/false = Redirecionar para a página de Login
 * false/true = Redirecionar para a página Dashboard
 * false/false = OK
 *
 * **/

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
      {...rest}
    />
  );
};

export default Route;
