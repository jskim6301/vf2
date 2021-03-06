import Vue from 'vue'
// import { firebase } from '@firebase/app'
import firebase from 'firebase/app'
import '@firebase/auth'
import '@firebase/database'

import firebaseConfig from '../../firebaseConfig'
import store from '../store'


firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((fu) => {
    store.commit('setFireUser',fu)
})

Vue.prototype.$firebase = firebase

/*
반대 방법
import * as firebase from 'firebase/app'

옳은방법
import '@firebase/auth'
import '@firebase/firestore'

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }

*/
