const express = require('express');

const app = express();

app.use('/api/appareils', (req, res, next) => {
  appareils = [
    {
      id: 'abc12345',
      name: 'Refregirateur',
      status: 'éteint'
    },
    {
      id: 'zer12345',
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id: 'fre78956',
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  res.status(200).json({
    message: 'Requete réussie !',
    appareils: appareils
  });
});

app.use((req, res, next)=> {
  console.log('Hello Premier midleware !');
  next();
});

app.use((req, res, next)=> {
  res.end('Message from express !!!');
});

module.export = app;
