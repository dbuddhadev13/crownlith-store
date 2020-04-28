import React, { Component } from 'react';

import CollectionOverview from '../../Components/Collection-Overview/collection-overview.component.jsx'
import { Route } from 'react-router-dom';
import CategoryPage from '../Category/category.component.jsx';
import { connect } from 'react-redux';
import WithSpinner from '../../Components/With-Spinner/with-spinner.component.jsx';

import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector.js';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action.js';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage)

class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render () {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props
        return (
            <div className="shop-page"> 
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
            </div>    
        )
    }
}
 
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);