const Evento = require('../models/evento');

class EventoController {
    constructor() {
        this.eventos = [];
    }

    criar(nome, data, local, capacidade) {
        const id = this.eventos.length + 1;
        const evento = new Evento(id, nome, data, local, capacidade);
        this.eventos.push(evento);
        return evento;
    }
}
module.exports = EventoController;