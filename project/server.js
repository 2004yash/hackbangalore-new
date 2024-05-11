const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./pages/form/firebase"); // Import the initialized admin object
const addCard = require('./pages/committee/script')

// const app2 = initializeApp(firebaseConfig);
// const db = getFirestore(app2);
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (optional, if you have any)
app.use(express.static("pages/form"));

// Route for serving the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/form/form.html");
});

const dataarr = [];

// Route for handling form submission
app.post("/submit", async (req, res) => {
  // Access form data from request body
  const formData = req.body;
  // console.log(formData); // You can process this data as per your requirements
  // Get a reference to the collection where you want to store the data
  const db = admin.firestore();
  const usersRef = db.collection("insideOut");

  // Create a new document in the collection
  const newUserRef = usersRef.doc(formData.email);

  // Set the data in the document to the values from the form
  await newUserRef.set(formData);
  const citiesRef = db.collection("insideOut");
  const snapshot = await citiesRef.get();
  snapshot.forEach((doc) => {
    const obj = { id: doc.id, ...doc.data()}
    dataarr.push(obj);
    // addCard(obj.problem,obj.solution)
  });
//   console.log(JSON.stringify(snapshot));
  // module.exports = {dataarr}
  // You can send a response back to the client if needed
  res.send("Our Committee will review and get back to you soon.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
