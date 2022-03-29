import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log("POST stored data to the database");
// this is the method that is called when the user clicks the save button
const jateDB = await openDB("jate", 1);
// this transaction is used to add the data to the database
const tx = jateDB.transaction("jate", "readwrite");
// this is the object store that is used to add the data to the database
const store = tx.objectStore("jate");
const request = store.put({ jate: content });
// Await the result of the request
const result = await request;
console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

console.log("GET all stored data from the database");
// this is the event that is triggered when the user clicks the install button
const jateDB = await openDB("jate", 1);
// This is the transaction object
const tx = jateDB.transaction("jate", "readwrite");
// this is the object store
const store = tx.objectStore("jate");
// this is the request object
const request = store.getAll();
// this is the result object
const result = await request;
console.log(result);
};

initdb();
