// const { envs } = require('./config/env')
import { envs } from './config/env.js'
import { startServer } from './server/server.js'
// const { startServer } = require('./server/server')

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