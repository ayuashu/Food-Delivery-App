import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAetAGJ2j5b1c1oBhB44-PEnSgijZOMGi4",
    authDomain: "restaurantapp-a5526.firebaseapp.com",
    databaseURL: "https://restaurantapp-a5526-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-a5526",
    storageBucket: "restaurantapp-a5526.appspot.com",
    messagingSenderId: "183762317646",
    appId: "1:183762317646:web:a08e163985bd0178f32e1f"
  };

  const app = getApps().length>0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };