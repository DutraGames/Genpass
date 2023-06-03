import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey:`${process.env.NEXT_PUBLIC_API_KEY}`,
  authDomain:`${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`,
  databaseURL:`${process.env.NEXT_PUBLIC_DATABASEURL}`,
  projectId:`${process.env.NEXT_PUBLIC_PROJECTID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_STORAGEBUCKET}`,
  messagingSenderId:`${process.env.NEXT_PUBLIC_MESSAGINGSENDID}`,
  appId:`${process.env.NEXT_PUBLIC_APPID}`
};
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)
export const auth = getAuth(app)