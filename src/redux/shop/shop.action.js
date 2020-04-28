import ShopActionTypes from "./shop.type";
import { firestore } from "../../config/firebase/firebase.util";
import { convertCollectionsSnapshotToMap } from "../../config/firebase/firebase.function";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLETIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLETIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLETIONS_SUCCESS,
    payload: errorMessage
})


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
           
        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionsMap))    
        }).catch(error => {
            dispatch(fetchCollectionsFailure(error.message))
        })
    }
}