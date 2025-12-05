const Palestrante = require('../models/palestrante');

class PalestranteController {
    constructor() {
        this.lista = [];
    }

    adicionar(nome, expertise, bio) {
        const id = this.lista.length + 1;
        const palestrante = new Palestrante(id, nome, expertise, bio);
        this.lista.push(palestrante);
        return palestrante;
    }
}
module.exports = PalestranteController;