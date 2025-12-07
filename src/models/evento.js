class Evento {
    constructor(id, nome, data, local, capacidadeMax) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.local = local;
        this.capacidadeMax = capacidadeMax;
        this.inscritos = 0;
    }
}
module.exports = Evento;