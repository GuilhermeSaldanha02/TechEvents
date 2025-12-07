class CheckinController {
    constructor(participanteController) {
        this.participanteController = participanteController;
    }

    realizarCheckin(idParticipante) {
        const participante = this.participanteController.participantes
            .find(p => p.id === idParticipante);
        
        // !!! BUG PROPOSITAL: Quebra se o ID não for achado
        
        return `Bem-vindo ao evento, ${participante.nome}! Seu crachá é: ${participante.tipoIngresso}`;
    }
}
module.exports = CheckinController;