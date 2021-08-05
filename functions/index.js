const functions = require("firebase-functions");


var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://jskim-vf-default-rtdb.firebaseio.com"
  databaseURL: functions.config().admin.db.url
});

const db = admin.database()

exports.createUser = functions.auth.user().onCreate(async (user) => {
    const {uid, email, displayName, photoURL} = user
    const u = {
        email,
        displayName,
        photoURL,
        createdAt: new Date().getMilliseconds(),
        level: email === functions.config().admin.email ? 0 : 5
    }
    db.ref('users').child(uid).set(u);
});

exports.deleteUser = functions.auth.user().onDelete(async (user) => {
    const { uid } = user
    db.ref('user').child(uid).remove()
});