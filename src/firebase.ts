import {environment} from './environments/environment.prod';
import Firebase from 'firebase'

let firebaseApp = Firebase.initializeApp(environment.firebase);

export const db = firebaseApp.database!();
