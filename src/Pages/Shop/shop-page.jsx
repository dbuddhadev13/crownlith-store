import React, { Component } from 'react';

import CollectionOverview from '../../Components/Collection-Overview/collection-overview.component.jsx'
import { Route } from 'react-router-dom';
import CategoryPage from '../Category/category.component.jsx';
import { firestore } from '../../config/firebase/firebase.util.js';
import { convertCollectionsSnapshotToMap } from '../../config/firebase/firebase.function.js';
import { updateCollections } from '../../redux/shop/shop.action.js';
import { connect } from 'react-redux';
import WithSpinner from '../../Components/With-Spinner/with-spinner.component.jsx';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage)

class ShopPage extends Component {
    state = {
        loading: true
    }
    unSubscribeFromShop = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');
        
        this.unSubscribeFromShop = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }

    render () {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page"> 
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props} />} />
            </div>    
        )
    }
}
 
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);