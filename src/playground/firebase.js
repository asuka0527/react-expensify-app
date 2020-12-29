// import * as firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyDjTH9CVf1wJoGklM-0yPMlIJ52xpGPka8",
//   authDomain: "expensify-8863f.firebaseapp.com",
//   databaseURL: "https://expensify-8863f-default-rtdb.firebaseio.com",
//   projectId: "expensify-8863f",
//   storageBucket: "expensify-8863f.appspot.com",
//   messagingSenderId: "588058431279",
//   appId: "1:588058431279:web:918706fe319b98dc4f1bda",
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// /////  on.( "EVENTS" , ()=>{}) ////////// ✅ child_remove - a subscriber that listen whenever a child is removed

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// ///// on.( "EVENTS" , ()=>{}) ////////// ✅ child_changed - a subscriber that listen whenever a child is changed

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// ///// on.( "EVENTS" , ()=>{}) ////////// ✅ child_added - a subscriber that listen whenever a child is added and for existing datas

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// /////////////// ✅ converting firebase object data  into arrays
/// key() - a method to extract the id generated from firebase
// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//       console.log(expenses);
//     });
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// /////////////// ✅ Working with list based DATA (Arrays)
// /////////////// ✅ push({object}) - also generates an random key as a parent property of the objects inside push

// database.ref("notes").push({
//   title: "React Native",
//   body: "Course Topics",
// });

// /////////////// ✅ access those ids
// database.ref("notes/-MPg7h90wd_AHBncA0hQ").remove();

// database.ref("expenses").push({
//   description: "coffee",
//   note: "",
//   amount: 3,
//   createdAt: 54544556450,
// });

// ------------------------------------------------
// ////// SUBSCRIBERS ///////// ✅ SUBRCRIBING fetching data through on()
// /////////////// ✅ listens to changes in the data
// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// });

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(35);
// }, 3500);

// // ////// SUBSCRIBERS /////////  ❌  UNSUBRCRIBING fetching data through off()

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(40);
// }, 10500);

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// ////// SUBSCRIBERS ///////// ✅ fetching data through once()
// /////////////// ✅ returns a promise
// /////////////// ✅ does not re-run

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fecthing data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Asuka Nakajima",
//     age: 28,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google",
//     },
//     isSingle: false,
//     location: {
//       city: "Tokyo",
//       country: "Japan",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((error) => {
//     console.log("This failed", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// });

// // database.ref().set("this is my data");

// database
//   .ref("attributes")
//   .set({
//     height: 153,
//     weight: 54,
//   })
//   .then(() => {
//     console.log("Height and weight added");
//   })
//   .catch((error) => {
//     console.log("This has failed", error);
//   });

// console.log("I made a request to change the data");

/////////////// ✅ remove() - option 1 Remove data
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch((error) => {
//     console.log("Data was not removed", error);
//   });

/////////////// ✅ set(null) - option 2 Remove data
// database.ref("isSingle").set(null);

/////////////// ✅ Update multiple fields in the database ( ONLY UPDATES ROOT LEVEL - not nested objects)
// database.ref().update({
//   name: "Era Rosales",
//   age: 30,
//   job: "accountant",
//   isSingle: null,
// });

// /////////////// ✅ Update nested objects

// database.ref().update({
//   job: "Manager",
//   "location/city": "Kyoto",
// });
