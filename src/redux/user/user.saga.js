import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.type";
import { auth, googleProvider, getCurrentUser } from "../../config/firebase/firebase.util";
import { createUserProfileDocument } from "../../config/firebase/firebase.function";
import { signInFailure, signInSuccess, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from "./user.action";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({id: userSnapshot.id,  ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithEmailAndPassword({payload: {email, password}}){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth){
            return;
        }
        yield getSnapShotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))        
    }
}

export function* signUpUser ({payload: {email, password, displayName}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp ({payload: {user, additionalData}}) {
    yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOut() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUp() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser)
}

export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOut),
        call(onSignUp),
        call(onSignUpSuccess),
    ])
}