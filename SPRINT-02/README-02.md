# 🚀 TechEvents Enterprise Edition – Sprint 2 (README Oficial)

Bem-vindo à **Sprint 2** do projeto **TechEvents Enterprise Edition**, onde o sistema evolui para um nível corporativo com novas funcionalidades, hotfix crítico e resolução de conflitos colaborativos!

Este documento consolida as rodadas, instruções, papéis, tarefas e fluxos Git necessários para a execução completa da sprint.


# 📋 Contexto Geral

A diretoria aprovou a primeira versão do TechEvents e solicitou novas capacidades financeiras e de relatórios para lançar a edição **Enterprise**.

Durante o desenvolvimento, um problema crítico foi encontrado em produção, exigindo um **HOTFIX imediato**.

Esta sprint também apresenta desafios de conflito e colaboração real com múltiplos desenvolvedores alterando o mesmo arquivo.

---

# 👥 Papéis da Equipe

| Função                     | Membro    | Responsabilidade                              |
| -------------------------- | --------- | --------------------------------------------- |
| **Tech Lead / Reviewer**   | Bruna     | HOTFIX, merges finais, revisão de código.     |
| **Quality Assurance (QA)** | Rodrigo   | Validações em staging e aprovação da release. |
| **Dev Fullstack 1**        | Gabriel   | Módulo de Eventos (cancelamento).             |
| **Dev Fullstack 2**        | Guilherme | Módulo de Palestrantes (avaliação).           |
| **Dev Backend 3**          | Filipe    | Novo módulo de Vendas.                        |
| **Dev Backend 4**          | Marcelo   | Novo módulo de Relatórios.                    |

---

# 🟦 Rodada 1 – Preparação

Todos os desenvolvedores devem iniciar o trabalho a partir da branch **MAIN**.

### Criar branch da sua feature

```
git checkout staging
git pull
git checkout -b feat/<nome-da-feature>
```

---

# 🟩 Rodada 2 – Desenvolvimento das Features

Cada desenvolvedor implementa sua tarefa conforme instruções.

## 🔧 Gabriel – Cancelamento de Eventos

**Arquivo:** `src/controllers/eventoController.js`

```js
cancelar(idEvento) {
    const evento = this.eventos.find(e => e.id === idEvento);
    if (evento) {
        evento.status = 'cancelado';
        return `Evento ${evento.nome} foi cancelado com sucesso.`;
    }
    return 'Evento não encontrado.';
}
```

## 🔧 Guilherme – Avaliação de Palestrantes

**Arquivo Model:** `src/models/palestrante.js`

```js
this.nota = 0;
```

**Arquivo Controller:** `src/controllers/palestranteController.js`

```js
avaliar(idPalestrante, nota) {
    const palestrante = this.lista.find(p => p.id === idPalestrante);
    if (palestrante) {
        palestrante.nota = nota;
        return `Palestrante ${palestrante.nome} recebeu nota ${nota}.`;
    }
    return 'Palestrante não encontrado.';
}
```

## 🔧 Filipe – Módulo de Vendas

**Arquivo:** `src/controllers/vendaController.js`

```js
class VendaController {
    constructor() {
        this.receitaTotal = 0;
    }

    venderIngresso(participante, valor) {
        if (participante.tipoIngresso === 'VIP') {
            this.receitaTotal += valor * 1.2;
        } else {
            this.receitaTotal += valor;
        }
        return { mensagem: "Venda registrada", total: this.receitaTotal };
    }
}
module.exports = VendaController;
```

## 🔧 Marcelo – Módulo de Relatórios

**Arquivo:** `src/utils/relatorio.js`

```js
class Relatorio {
    gerarResumoGeral(eventos, participantes) {
        return {
            totalEventos: eventos.length,
            totalParticipantes: participantes.length,
            dataGeracao: new Date().toISOString()
        };
    }
}
module.exports = Relatorio;
```

---

# 🟥 Rodada 3 – HOTFIX

Um cliente reclamou do nome incorreto da aplicação.
A **Bruna** deve corrigir imediatamente.

### Passos:

```
git checkout main
git checkout -b hotfix/correcao-nome
```

Editar `config/config.json`:

```json
"appName": "TechEvents Enterprise Edition"
```

Merge direto para **main** e depois para **staging**.

---

# ⚔️ Rodada 4 – Conflito Planejado (CHANGELOG)

Cada desenvolvedor deve editar **docs/CHANGELOG.md**, escrevendo **na linha 1**:

* Gabriel → `v1.1 - Adicionado cancelamento`
* Guilherme → `v1.1 - Adicionada avaliação`
* Filipe → `v1.1 - Módulo de Vendas`
* Marcelo → `v1.1 - Dashboard Financeiro`

Ao fazerem merge em *staging*, conflitos surgirão.
A equipe deve resolver juntos.

### Resultado final esperado:

```md
# Changelog v1.1
- Feature: Cancelamento de Eventos (Gabriel)
- Feature: Avaliação de Palestrantes (Guilherme)
- Feature: Módulo de Vendas (Filipe)
- Feature: Dashboard Financeiro (Marcelo)
```

---

# 🟦 Rodada 5 – QA

Rodrigo testa na branch **staging**:

* ✔ HOTFIX aplicado
* ✔ Features implementadas
* ✔ CHANGELOG sem conflitos

Cria arquivo:

```
docs/qa-release-v1.1.md
```

Com:

```
APROVADO
```

---

# 🟩 Rodada 6 – Release Final

A **Bruna** faz o merge final:

```
pull request → main
```

Versão final é liberada.

---

# 🔁 Fluxo Git (Resumo)

```
Devs: git checkout -b feat/minha-feature
Bruna (HOTFIX): hotfix → main → staging
Devs: merge → staging (resolver conflitos do changelog)
Rodrigo: QA em staging
Bruna: staging → main (release final)
```

---

# 🏁 Versão Final da Sprint

**v1.1 – Enterprise Edition** concluída com sucesso! 🎉

---


