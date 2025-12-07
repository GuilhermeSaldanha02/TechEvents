class Palestrante {
    constructor(id, nome, expertise, bio) {
        this.id = id;
        this.nome = nome;
        this.expertise = expertise;
        this.bio = bio;
        this.confirmado = false;
    }
}
module.exports = Palestrante;