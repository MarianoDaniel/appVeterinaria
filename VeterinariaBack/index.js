const http = require('http');
const url = require('url');

const callbackDelServidor = (req, res) => {
    //1.obtener url desde objeto request //OK
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);

    //2.obtener la ruta
    const ruta = urlParseada.pathname;

    //3. quitar slash a la ruta
    const rutaLimpia = ruta.replace('/',"")
    console.log(rutaLimpia);

    //3.1 obtener el método http
    console.log('req.method', req.method);

    //4. enviar una respuet dpendiendo de la ruta
    if (rutaLimpia === 'ruta') {
        res.end('Hola estas en /ruta');
    } else {
        res.end('estas en una ruta que no conozco');
    }


    res.end('Hola mundo en un server http');
}

const server = http.createServer(callbackDelServidor);

server.listen(5000, () => {
    console.log('el servidor está escuchando peticiones en http://localhost:5000/');
});