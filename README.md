# ⚡ Monitoramento Gamer de Consumo de Energia

API desenvolvida com NestJS como parte de um projeto acadêmico do curso de **Análise e Desenvolvimento de Sistemas**, com foco em impacto social e tecnologia consciente.

🎯 A missão é clara: monitorar consumo de energia com estilo, precisão e propósito — ajudando comunidades a entenderem seu uso de energia, com alertas inteligentes e uma API pronta pra evoluir.

Desenvolvido por: **Bruno Moreira da Silva**

---

## 🔥 Funcionalidades

- ⚡ **Registrar Consumo**: Envia os dados de uso mensal de energia (kWh + data).
- 📊 **Histórico**: Consulta de registros anteriores por usuário.
- 🚨 **Alerta Inteligente**: Notifica se o consumo atual for maior que o do mês passado.

---

## 🛠️ Tecnologias Utilizadas

- **Back-end**: NestJS + TypeScript + Node.js
- **Dados**: Armazenados em memória (sem banco de dados)
- **Testes**: Realizados via Postman

---

## 🚀 Execução do Projeto

### Pré-requisitos

- Node.js e npm instalados
- NestJS CLI instalado:

```bash
npm install -g @nestjs/cli
```

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nestjs-consumo-energia.git
cd nestjs-consumo-energia
```

### Instalar dependências

```bash
npm install
```

### Iniciar servidor

```bash
npm run start:dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Endpoints da API

**Base URL:** `http://localhost:3000/consumo`

### ➕ Registrar Consumo
- `POST /consumo`

**Body JSON:**
```json
{
  "user": "02021211221",
  "qtd": 130,
  "dataLeitura": "2025-05-01"
}
```

---

### 📚 Consultar Histórico
- `GET /consumo/02021211221"`

**Retorno:**
```json
[
  {
    "qtd": 130,
    "dataLeitura": "2025-05-01T00:00:00.000Z"
  }
]
```

---

### 🚨 Verificar Alerta
- `GET /consumo/02021211221"/alerta`

**Retorno:**
```json
{
  "alerta": "⚠️ Alerta: O consumo do mês atual (130 kWh) está maior que o anterior (110 kWh).",
  "user": "02021211221"",
  "data": "2025-05-01T00:00:00.000Z"
}
```

---

## 📁 Estrutura do Projeto

```
src/
├── consumo_energia/
│   ├── dto/
│   │   ├── create-consumo.dto.ts
│   │   ├── alerta-consumo.dto.ts
│   │   └── historico-consumo.dto.ts
│   ├── consumo_energia.controller.ts
│   ├── consumo_energia.service.ts
│   └── consumo_energia.model.ts
├── app.module.ts
└── main.ts
```

---

## 🧠 Observações Finais

Este projeto é 100% educacional e feito com foco em aplicar o conhecimento técnico de forma útil.  
Sinta-se à vontade para expandir, integrar com banco de dados ou transformar em uma dashboard futuramente! 🎮🔥
