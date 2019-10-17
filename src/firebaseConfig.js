//import Firebase from 'firebase'
import firebase from 'firebase'
import 'firebase/firestore'

// firebase init
const config = {
    apiKey: "AIzaSyDkKOpImjbjS2O0RhIQNJLQXx2SuYbxsfU",
    authDomain: "cornell-courseplan.firebaseapp.com",
    databaseURL: "https://cornell-courseplan.firebaseio.com",
    projectId: "cornell-courseplan",
    storageBucket: "cornell-courseplan.appspot.com",
    messagingSenderId: "1031551180906",
}
firebase.initializeApp(config)
let db = firebase.firestore()

// firebase collection
let emailsCollection = db.collection('emails')

export default {
    emailsCollection
}