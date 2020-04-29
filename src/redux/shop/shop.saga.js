import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.type";
import { convertCollectionsSnapshotToMap } from "../../config/firebase/firebase.function";
import { firestore } from "../../config/firebase/firebase.util";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop.action";

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));            
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}

export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLETIONS_START, 
        fetchCollectionAsync
    )
}

export function* shopSaga() {
    yield all([
        call(fetchCollectionStart)
    ])
}