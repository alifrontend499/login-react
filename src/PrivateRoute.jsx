import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import checkUser from './_helpers/_checkUser';


export const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={props =>
            checkUser().isAutheniticated ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
}

