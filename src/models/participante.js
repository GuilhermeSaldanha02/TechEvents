class Participante {
     constructor(id, nome, email, empresa, tipoIngresso) { 
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.empresa = empresa;
        this.tipoIngresso = tipoIngresso; // 'VIP' ou 'Standard' 
    
    } 
}

module.exports = Participante;