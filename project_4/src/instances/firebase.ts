import firebase from "firebase";
import config from "../config";

const conf = config;
const firebaseApp = firebase.initializeApp(conf.firebase);
const db = firebaseApp.firestore();
export default db;