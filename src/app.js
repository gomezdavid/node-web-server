const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion agnostica autoconvada
//agnostica porque no tiene nombre
//autoconvocada porque le ponemos parentesis al final
(async () => {
    main();
})()