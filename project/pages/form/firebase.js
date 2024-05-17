const admin = require('firebase-admin');

const serviceAccount = require('./hackbangalore-75fdc-firebase-adminsdk-ycx5q-70f4c3911c.json'); // Replace with your actual path

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Add other Firebase configuration options if needed
});

module.exports = admin; // Export the initialized admin object

// const citiesRef = db.collection('insideOut');
// const snapshot = await citiesRef.get();
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });
