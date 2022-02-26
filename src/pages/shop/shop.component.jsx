import React from 'react'
import {connect} from 'react-redux'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'
import { selectCollections } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'


//routuing

import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component.js'
// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//        collections: SHOP_DATA
//      }

//   }
  
//   render() {
//  const {collections} = this.state
//     return (
//       <div className="shop-page">
//         {
//           collections.map(({id,...otherCollectionProps}) => (
//             <CollectionPreview key={id} {...otherCollectionProps}  />
//           ))
//         }
//       </div>
//     )
//   }
// }


// second time changes
// const ShopPage = ({ collections }) => (
//   <div className='shop-page'>
//      {
//         collections.map(({id,...otherCollectionProps}) => (
//            <CollectionPreview key={id} {...otherCollectionProps}  />
//          ))
//        }
//   </div>
// )

// const mapStateToProps = createStructuredSelector({

//   collections: selectCollections
// }
// )

// third time changes and shop is now independect componet
const ShopPage = ({ collections, match }) => {
  console.log(match);
  return (
      <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/*<CollectionsOverview /> */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>

  )
}

export default ShopPage