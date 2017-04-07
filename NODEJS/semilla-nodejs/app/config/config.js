//Guarda las constantes para la app
const path  = require('path'); //manejo de las rutas
const config = {
  root:path.normalize(path.join(__dirname, '/../..')), //normalize: ruta absoluta
  server: {
    port: process.env.PORT || 3000
  }
};

module.exports = config;
