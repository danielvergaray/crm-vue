import api from "../lib/axios"

export default {
    obtenerClientes(){
        return api.get('/clientes') /* Para obtener todos los clientes */
    },
    agregarCliente(data){
        return api.post('/clientes', data)
    },
    obtenerCliente(idCliente){
        return api.get('/clientes/' + idCliente)/* Para obtener un cliente en particular */
    },
    actualizarCliente (idCliente, data){
        return api.patch('/clientes/' + idCliente, data)
    },
    cambiarEstado(idCliente, estado){
        return api.patch('/clientes/' + idCliente, estado)
    },
    eliminarCliente(idCliente){
        return api.delete('/clientes/' + idCliente)
    }
}