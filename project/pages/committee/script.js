function addCard(topic, oneLineDesc) {
  const main = document.querySelector(".cards");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");

  const heading = document.createElement("h2");
  heading.textContent = topic;

  const description = document.createElement("p");
  description.textContent = oneLineDesc;

  cardBodyDiv.appendChild(heading);
  cardBodyDiv.appendChild(description);

  cardDiv.appendChild(cardBodyDiv);

  main.appendChild(cardDiv);
}
// const admin = require("../form/firebase");

// const db = admin.firestore();
// const usersRef = db.collection("insideOut");

// async function getData() {

// // Create a new document in the collection

// // Set the data in the document to the values from the form
// const citiesRef = db.collection("insideOut");
// const snapshot = await citiesRef.get();
// //   const dataarr = [];
// snapshot.forEach((doc) => {
//   const obj = { id: doc.id, ...doc.data() };
//   addCard(obj.problem, obj.solution);
// });
// }
// getData();

// const dataarr = require('../../server')
// dataarr.forEach(ele => addCard(ele.problem, ele.solution))
// function addCard(topic, oneLineDesc) {
//   const main = document.querySelector(".cards");

//   const cardDiv = document.createElement("div");
//   cardDiv.classList.add("card");

//   const cardBodyDiv = document.createElement("div");
//   cardBodyDiv.classList.add("card-body");

//   const heading = document.createElement("h2");
//   heading.textContent = topic;

//   const description = document.createElement("p");
//   description.textContent = oneLineDesc;

//   cardBodyDiv.appendChild(heading);
//   cardBodyDiv.appendChild(description);

//   cardDiv.appendChild(cardBodyDiv);

//   main.appendChild(cardDiv);
// }
// const admin = require("../form/firebase");

// const db = admin.firestore();
// const usersRef = db.collection("insideOut");

// async function getData() {

// // Create a new document in the collection

// // Set the data in the document to the values from the form
// const citiesRef = db.collection("insideOut");
// const snapshot = await citiesRef.get();
// //   const dataarr = [];
// snapshot.forEach((doc) => {
//   const obj = { id: doc.id, ...doc.data() };
//   addCard(obj.problem, obj.solution);
// });
// }
// getData();

// const data = require('./.../server')
// console.log(data)
// [...dataarr].forEach(ele => addCard(ele.problem, ele.solution))
// const admin = require('../form/firebase')
// const db = admin.firestore();
//   const usersRef = db.collection("insideOut");

//   // Create a new document in the collection
//   const newUserRef = usersRef.doc(formData.email);

//   // Set the data in the document to the values from the form
//   await newUserRef.set(formData);
//   const citiesRef = db.collection("insideOut");
//   const snapshot = await citiesRef.get();
//   snapshot.forEach((doc) => {
//     const obj = { id: doc.id, ...doc.data()}
//     dataarr.push(obj); })