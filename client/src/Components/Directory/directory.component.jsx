import React from 'react'
import MenuItem from '../Menu-Item/menu-item.components';

import './directory.style.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

const Directory = ({ category }) => (
    <div className="directory-menu">
        {
            category.map(({ id, ...otherDirectoryProps }) => (
                <MenuItem key={id} {...otherDirectoryProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
  category: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);