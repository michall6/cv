import admin from "firebase-admin";
import { getApps } from "firebase-admin/lib/app";

import serviceAccount from "./config";

if(!getApps().length){

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount )
});
}
export const firestore= admin.firestore();