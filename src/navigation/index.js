import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { book } from './books';

import { GlobalFeed } from '../pages/globalFeed';
import { Article } from '../pages/article';
import { Authentication } from '../pages/authentication'


export const Routes = () => (
    <Switch>
        <Route exact path={book.root}>
            <GlobalFeed />
        </Route>
        <Route path={book.article}>
            <Article />
        </Route>
        <Route path={book.login} component={Authentication} />
        <Route path={book.register} component={Authentication} />
    </Switch>
);