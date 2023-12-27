import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




 //  web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAvzJN5TrOhfzeqEOFbdLsxIphimOQvd1c",
authDomain: "resumeproject-7e338.firebaseapp.com",
projectId: "resumeproject-7e338",
storageBucket: "resumeproject-7e338.appspot.com",
messagingSenderId: "825907200989",
appId: "1:825907200989:web:fe14a6a4f62a4ab5c62c34",
measurementId: "G-EZZ4SXBLC7"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

 
 

  
