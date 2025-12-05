📘 Exercício Prático: Gitflow - Projeto TechEvents (Versão Revisada)
📋 O Cenário
Continuamos com o projeto TechEvents, um sistema de gestão de eventos. A estrutura e os códigos dos módulos são os mesmos, mas os responsáveis mudaram.

👥 Organização da Equipe
Definição dos papéis para este exercício (Com Guilherme como Dev):

Code Reviewer (Gerente do Repositório): Filipe

Responsável por criar o repo, revisar PRs e fazer o merge na Master.

QA (Quality Assurance): Marcelo

Responsável por testar em Staging e aprovar/reprovar features.

Dev 1 (Eventos): Gabriel

Dev 2 (Participantes): Rodrigo

Dev 3 (Palestrantes): Guilherme 

Dev 4 (Check-in): Bruna

🚀 Preparação (Filipe)
Filipe deve criar o repositório no GitHub e subir a estrutura inicial.

Conteúdo inicial do config/config.json:

JSON

{
    "appName": "TechEvents System",
    "version": "1.0.0"
}
🏁 RODADA 1: Desenvolvimento das Features
Cada desenvolvedor cria sua branch (ex: feat/eventos) e implementa o seu módulo:

👨‍💻 Gabriel: Módulo de Eventos
Arquivo src/models/evento.js:

JavaScript

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
Arquivo src/controllers/eventoController.js:

JavaScript

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
👨‍💻 Rodrigo: Módulo de Participantes
Arquivo src/models/participante.js:

JavaScript

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
Arquivo src/controllers/participanteController.js:

JavaScript

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
👨‍💻 Guilherme: Módulo de Palestrantes
Arquivo src/models/palestrante.js:

JavaScript

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
Arquivo src/controllers/palestranteController.js:

JavaScript

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
👩‍💻 Bruna: Módulo de Check-in (Contém o Bug)
Arquivo src/controllers/checkinController.js:

JavaScript

class CheckinController {
    constructor(participanteController) {
        this.participanteController = participanteController;
    }

    realizarCheckin(idParticipante) {
        const participante = this.participanteController.participantes
            .find(p => p.id === idParticipante);
        
        // !!! BUG PROPOSITAL: Quebra se o ID não for achado (participante será 'undefined')
        
        return `Bem-vindo ao evento, ${participante.nome}! Seu crachá é: ${participante.tipoIngresso}`;
    }
}
module.exports = CheckinController;
💥 RODADA 2: O Conflito em Staging
Todos os 4 desenvolvedores (Gabriel, Rodrigo, Guilherme, Bruna) devem adicionar sua configuração no config/config.json em suas branches, e então tentar fazer merge na branch staging.

Gabriel: Adiciona "eventos": { "limiteDiario": 5 }

Rodrigo: Adiciona "participantes": { "dominioEmailBloqueado": "@spam.com" }

Guilherme: Adiciona "palestrantes": { "cacheMaximo": 5000.00 }

Bruna: Adiciona "checkin": { "horarioInicio": "08:00" }

🛠️ Tarefa Coletiva
Vocês devem resolver os conflitos de merge para que o arquivo final em staging contenha todas as configurações:

JSON

{
    "appName": "TechEvents System",
    "version": "1.0.0",
    "eventos": {
        "limiteDiario": 5
    },
    "participantes": {
        "dominioEmailBloqueado": "@spam.com"
    },
    "palestrantes": {
        "cacheMaximo": 5000.00
    },
    "checkin": {
        "horarioInicio": "08:00"
    }
}
🕵️ RODADA 3: QA (Marcelo)
Marcelo (QA) faz checkout na branch staging e executa os testes.

Cenário de Teste: Marcelo simula o uso do sistema e tenta realizar o check-in de um participante que não está registrado (ID inexistente).

O Problema: O código da Bruna no checkinController.js falha.

O Relatório (docs/qa-report.md):

Markdown

# Relatório de QA - TechEvents
- Eventos (Gabriel): ✅ Aprovado
- Participantes (Rodrigo): ✅ Aprovado
- Palestrantes (Guilherme): ✅ Aprovado
- Check-in (Bruna): ❌ REPROVADO - A aplicação quebra ao tentar fazer check-in com um ID não encontrado. Falta validação de existência do Participante.
🚑 A Correção (Bruna)
Bruna volta para sua branch, corrige o arquivo src/controllers/checkinController.js adicionando a validação de segurança:

JavaScript

    realizarCheckin(idParticipante) {
        const participante = this.participanteController.participantes
            .find(p => p.id === idParticipante);
        
        // CORREÇÃO APLICADA
        if (!participante) {
            return "Erro: Participante não encontrado na lista.";
        }
        
        return `Bem-vindo ao evento, ${participante.nome}! Seu crachá é: ${participante.tipoIngresso}`;
    }
Bruna faz commit da correção e merge para staging. Marcelo testa novamente e aprova.

👑 RODADA 4: Code Review (Filipe)
Com tudo testado e aprovado em staging:

Cada desenvolvedor abre um Pull Request da sua branch para a master.

Filipe (CR) revisa e aprova os 4 PRs (incluindo a correção da Bruna).

Filipe realiza o merge de todos os PRs para a master.

Exercício Finalizado! 🎉
