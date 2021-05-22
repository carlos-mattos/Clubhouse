export const constants = {
  socketUrl: 'http://localhost:3000',
  // socketUrl: 'https://call-club-app.herokuapp.com/',
  socketNamespaces: {
    room: 'room',
    lobby: 'lobby',
  },
  peerConfig: Object.values({
    id: undefined,
    config: {
      host: 'call-club-peerjs-server.herokuapp.com',
      secure: true,
      path: '/',
      // port: 9000,
      // host: 'localhost',
      // path: '/',
    },
  }),
  pages: {
    lobby: '/pages/lobby',
    login: '/pages/login',
  },
  events: {
    USER_CONNECTED: 'userConnection',
    USER_DISCONNECTED: 'userDisconnection',

    JOIN_ROOM: 'joinRoom',
    LOBBY_UPDATED: 'lobbyUpdated',
    UPGRADE_USER_PERMISSION: 'upgradeUserPermission',

    SPEAK_REQUEST: 'speakRequest',
    SPEAK_ANSWER: 'speakAnswer',
  },
  firebaseConfig: {
    apiKey: 'AIzaSyDt4PWTwpp8AuMUYfb01XhC2t6MqcYtff4',
    authDomain: 'call-club.firebaseapp.com',
    projectId: 'call-club',
    storageBucket: 'call-club.appspot.com',
    messagingSenderId: '547725119743',
    appId: '1:547725119743:web:47900bbd9d493c9ed17cca',
    measurementId: 'G-SWCZWPQ44Z',
  },
  storageKey: 'jsexpert:storage:user',
};
