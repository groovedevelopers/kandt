import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { authState } from "rxfire/auth";
import { collectionData, docData } from "rxfire/firestore";
import { } from "firebase/functions";
import {  refCount, shareReplay, publishReplay, switchMap } from "rxjs/operators";
import { of } from "rxjs";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtUVtrDub-VcnfWRnfLSQOFs5XqWMdlvg",
    authDomain: "kandt-998e1.firebaseapp.com",
    projectId: "kandt-998e1",
    storageBucket: "kandt-998e1.appspot.com",
    messagingSenderId: "678440719587",
    appId: "1:678440719587:web:319b0b7b36768777fae1d6",
    measurementId: "G-F0EMHBVVWT"
  };




firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const fireAuthState = authState(auth).pipe(
  shareReplay(1)
);




export const firebaseFunctions = firebase.functions();

//about
export const getabout=() => {
    const ref = db.doc(`about/TJamFHAEHVBtUYDvquOH`)
    return docData(ref)
  }

  // get all blogs from database
export const getAllBlog =() => {
    const ref = db.collection('blog')
    return collectionData(ref, "id")
  }

  //get just one blog
export const getOneBlogFromFirebase =  (id) => {
    const ref = db.doc(`blog/${id}`)
    return docData(ref, "id")
  };

  //get blog category
export const getBlogCategoriesFromFirebase =() => {
    const ref = db.collection('blogCategory')
    return collectionData(ref, "id")
  }

  // get all digital from database
export const getAllDigital =() => {
    const ref = db.collection('digital')
    return collectionData(ref, "id")
  }

  // get all eventsfrom database
export const getAllEvent =() => {
    const ref = db.collection('events')
    return collectionData(ref, "id")
  }
  
