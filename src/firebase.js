import firebase from "firebase/app";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyCdtaNCZxtqDDp8VGMVwLs6BV_6J3ke7WQ",
	authDomain: "challenge-de067.firebaseapp.com",
	projectId: "challenge-de067",
	storageBucket: "challenge-de067.appspot.com",
	messagingSenderId: "1059290144393",
	appId: "1:1059290144393:web:9cd3c24fc5ad1085163058",
	measurementId: "G-X18W31FZ7W",
};

export const defaultProject = firebase.initializeApp(firebaseConfig);

// export const db = firebaseApp.firestore();

export const auth = firebase.auth();
