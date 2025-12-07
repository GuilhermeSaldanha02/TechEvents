class CheckinController {
    constructor(participanteController) {
        this.participanteController = participanteController;
    }

    realizarCheckin(idParticipante) {
        const participante = this.participanteController.participantes
            .find(p => p.id === idParticipante);
        
        // CORREÇÃO APLICADA: Validação se o participante existe
        if (!participante) {
            return "Erro: Participante não encontrado na lista.";
        }
        
        return `Bem-vindo ao evento, ${participante.nome}! Seu crachá é: ${participante.tipoIngresso}`;
    }
}
module.exports = CheckinController;