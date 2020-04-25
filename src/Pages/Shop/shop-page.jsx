import React from 'react';

import CollectionOverview from '../../Components/Collection-Overview/collection-overview.component.jsx'
import { Route } from 'react-router-dom';
import CategoryPage from '../Category/category.component.jsx';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
);
 
export default ShopPage;