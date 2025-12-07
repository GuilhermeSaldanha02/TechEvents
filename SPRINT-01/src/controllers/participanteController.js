const Participante = require('../models/participante');

class ParticipanteController {
    constructor() {
        this.participantes = [];
    }

    registrar(nome, email, empresa, tipoIngresso) {
        const id = this.participantes.length + 1;
        const participante = new Participante(id, nome, email, empresa, tipoIngresso);
        this.participantes.push(participante);
        return participante;
    }
}
module.exports = ParticipanteController;
