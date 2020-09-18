export const environment = {
  production: false,
  authEnabled: true,
  title: 'Security & Publishing',
  markdownPath: '/assets/markdown/',
  api: 'http://localhost:3000/',
  firebaseConfig: {
    apiKey: 'AIzaSyDrWVNwZqyS2MZfn6R0jfKMai4BwIA7IEA',
    authDomain: 'ngbrz-aad7e.firebaseapp.com',
    databaseURL: 'https://ngbrz-aad7e.firebaseio.com',
    projectId: 'ngbrz-aad7e',
    storageBucket: 'ngbrz-aad7e.appspot.com',
    messagingSenderId: '534119571593',
    appId: '1:534119571593:web:1ed12d91e545e2ef8b6658',
    measurementId: 'G-0JBHMCSF7H',
  },
  o365Config: {
    tenant: 'd92b247e-90e0-4469-a129-6a32866c0d0a',
    clientId: '4e60c128-a813-4031-bd99-cf4327cce885',
    cacheLocation: 'localStorage',
    endpoints: {
      graphApiUri: 'https://graph.microsoft.com',
      sharePointUri: 'https://integrationsonline.sharepoint.com',
    },
    returnUrl: 'https://localhost:4200',
  },
};
