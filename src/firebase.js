// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt8gcJmCYNsbU17yOFaQBlaT0iBOulnpI",
  authDomain: "zwitch-board.firebaseapp.com",
  projectId: "zwitch-board",
  storageBucket: "zwitch-board.appspot.com",
  messagingSenderId: "773301776826",
  appId: "1:773301776826:web:50381b34af51b5ed9e6d83"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getFirebaseToken = () => {
  return getToken(messaging, {vapidKey: 'BFAhHB73gd5FfBZCww35cfCo1vLkyYIgd_M6uKQiHCQz7p_mI2wVE2O1Gfoqjd18bVektQfNTtU0Oat95WJZUj0'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const handleForegroundMessageRecieve = () => {
  onMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
    console.log('Received background message ', { notificationTitle, notificationOptions });

    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
};