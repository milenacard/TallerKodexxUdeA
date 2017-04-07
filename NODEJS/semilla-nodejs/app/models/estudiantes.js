var estudiante=[{nombre:"martin",telefono:"2337323"}, {nombre: "delany", telefono: "2222222"}];


/**
 *Se crea un nuevo router que va a contener las rutas de
 *las peticiones que atacaran al modelo especificado.
**/
const Router = require('express').Router;
const router = new Router();
/**
  * Se crean las rutas del modelo , recordar que estas son las que se van a aplicar
  * al modelo especificado en routes.
  * Por ejemplo, si el modelo es 'perritos', las rutas que en este archivo se asignan
  * estan predecedidas por /perrito/
  *
**/

/*
  /modelo/
*/
router.route('/')//retorna todos los estudiantes http://localhost:3000/estudiantes
  .get((req,res) => {
    return res.send(estudiante);
  })
  .delete((req, res) =>{
    estudiante = ""
    return res.send(estudiante)
  });
  /*
    /modelo/:id
  */
router.route('/:id') //http://localhost:3000/estudiantes/1
  .get((req,res) => {
    console.log("Buscando estudiante " + req.body.id);
    return res.send(estudiante[req.params.id])
  });

/**Exportamos nuestro router**/
module.exports = router;
