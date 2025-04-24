# Skina - Frontend

**Descrição:**  
O frontend do Skina é uma aplicação desenvolvida em React que utiliza Material Components para criar uma interface moderna e responsiva. O projeto segue o modelo de Atomic Design, organizando os componentes de forma hierárquica e modular para facilitar a escalabilidade e manutenção.

---

## Tecnologias utilizadas

- **React:** Biblioteca JavaScript para construção da interface de usuário.  
- **Material Components:** Framework de UI baseado no Material Design.  
- **Atomic Design:** Metodologia para organização de componentes em cinco níveis: Átomos, Moléculas, Organismos, Templates e Páginas.  
- **Axios:** Para comunicação com o backend via API REST.  
- **React Router:** Para gerenciamento de rotas na aplicação.  

---

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- Node.js 14+  
- npm (ou yarn)  

---

## Instalação

1. Clone o repositório do frontend:  
   ```bash
   git clone https://github.com/seu-usuario/skina-frontend.git
   cd skina-frontend
   
2. Instale as Dependencias:
    ```bash 
    npm install
    
3. Inicie o servidor de desenvolvimento:
     ```bash 
    npm run dev

4. Acesse o frontend no navegador em:
    http://localhost:3000/

---

## Estrutura de Pastas

```src/
├── assets/               # Arquivos estáticos como imagens e ícones.
├── components/           # Componentes reutilizáveis e de maior complexidade.
├── pages/                # Páginas principais da aplicação.
├── hooks/                # Hooks personalizados.
├── services/             # Arquivos para integração com APIs.
├── styles/               # Estilos globais e específicos.
├── utils/                # Funções auxiliares e utilitárias.
├── App.js                # Componente raiz da aplicação.
├── index.js              # Ponto de entrada da aplicação.

## Funcionalidades principais
- Gerenciamento de listas de compras.
- Adição, edição e exclusão de produtos e categorias.
- Integração com o backend para sincronização de dados.
- Design responsivo e amigável ao usuário.
