import React from 'react';

import './collection-overview.style.scss';
import PreviewCollection from "../Preview-Collection/preview-collection.component.jsx"
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))    
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
})

export default connect(mapStateToProps)(CollectionOverview);