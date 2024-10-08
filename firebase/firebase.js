/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage } from "firebase/storage"
import {getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyBhclW5NDT6q7eN-k7xOf0e3YLsg-L261g",
  authDomain: "expense-tracker-60bdc.firebaseapp.com",
  projectId: "expense-tracker-60bdc",
  storageBucket: "expense-tracker-60bdc.appspot.com",
  messagingSenderId: "851299650440",
  appId: "1:851299650440:web:6410e4a454f0ce8371883d",
  measurementId: "G-BY00JTQE9R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()