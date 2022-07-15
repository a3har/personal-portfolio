import admin from "firebase-admin";

if (!admin.apps.length) {
  var serviceAccount = require("firebase-config.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIRESTORE_DATABASE_URI,
  });
}

export default admin.database();
