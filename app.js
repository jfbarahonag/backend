import { async } from '@firebase/util';
import express from 'express'
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';

const app = express()
const port = 3000

const firebaseConfig = {
  apiKey: "AIzaSyDGRVeMqscc6VFC84R3CbHfpH6j_0wM6QQ",
  authDomain: "test-fb-mintic.firebaseapp.com",
  projectId: "test-fb-mintic",
  storageBucket: "test-fb-mintic.appspot.com",
  messagingSenderId: "159181197302",
  appId: "1:159181197302:web:899c84b982022f000d41d7",
  measurementId: "G-ZZTPH7VXZ5"
};

// Initialize Firebase
const FBApp = initializeApp(firebaseConfig);

const storage = getStorage(FBApp);
const imagesRef = ref(storage, 'images')
const book1Ref = ref(storage, 'images/book_1.jpg')



app.get('/image', (req, res) => {
  getDownloadURL(book1Ref)
    .then(url => {
      res.send(url)
    }).catch(err => {
      console.log(err);
    })
})

async function getUrl(ref) {
  const url = await getDownloadURL(ref)
  // console.log(url);
  return url
}

app.get('/images', async (req, res) => {
  const books = []
  const list = await listAll(imagesRef)
  list.items.forEach( async book => {
    const bookRef = ref(storage, book.fullPath)
    const url = await getUrl(bookRef)
    books.push(url)
  })
  //TODO: Fix this async issue
  console.log(books);
  res.send(books)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})