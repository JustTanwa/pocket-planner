import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAwfZvoqP6JfxqeaWOcS9qgAygO1kO-z2g",
    authDomain: "pocketplanner-dev.firebaseapp.com",
    projectId: "pocketplanner-dev",
    storageBucket: "pocketplanner-dev.appspot.com",
    messagingSenderId: "12138294616",
    appId: "1:12138294616:web:39ddea08504d5561cf092d"
});

export const auth = app.auth();
export default app;