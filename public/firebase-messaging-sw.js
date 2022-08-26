/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCt8gcJmCYNsbU17yOFaQBlaT0iBOulnpI",
  authDomain: "zwitch-board.firebaseapp.com",
  projectId: "zwitch-board",
  storageBucket: "zwitch-board.appspot.com",
  messagingSenderId: "773301776826",
  appId: "1:773301776826:web:50381b34af51b5ed9e6d83"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  console.log('Received background message ', { notificationTitle, notificationOptions });

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});