import Vue from 'vue'
// import { firebase } from '@firebase/app'
import firebase from 'firebase/app'
import '@firebase/auth'
import '@firebase/database'

import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)
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
