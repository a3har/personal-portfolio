import admin from "firebase-admin";

if (!admin.apps.length) {
  // var serviceAccount = require("firebase-config.json");

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
    databaseURL: process.env.FIRESTORE_DATABASE_URI,
  });
}

export default admin.database();
