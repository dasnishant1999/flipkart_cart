import firebase from "firebase/app";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAd-viSX1fC29JxC09Y4p5zLi40bE4WB-Y",
  authDomain: "flipkart-cart-79d12.firebaseapp.com",
  projectId: "flipkart-cart-79d12",
  storageBucket: "flipkart-cart-79d12.appspot.com",
  messagingSenderId: "426977699955",
  appId: "1:426977699955:web:433af7345e8552006a2206",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
