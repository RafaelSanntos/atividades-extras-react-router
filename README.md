# Exercícios extras de React Router

# Como Baixar e Executar os Projetos Localmente

Cada exercício é um projeto separado. Siga as instruções abaixo para baixar e executar cada um deles:

1. **Clone o repositório:**
   Abra o terminal e execute o comando abaixo para clonar o repositório:
   ```bash
   git clone https://github.com/RafaelSanntos/atividades-extras-react-router.git
   ```

2. **Navegue até o diretório do exercício**: Cada exercício está em uma pasta separada dentro do repositório. Por exemplo, para o Exercício 1:

    ```bash
    cd atividadeExtra/parametrosDeRotas
    ```

3. **Instale as dependências**: Dentro do diretório do exercício, instale as dependências necessárias:
  
    ```bash
    npm install
    ```

4. **Execute o projeto**: Após instalar as dependências, execute o projeto:
  
    ```bash
    npm run dev
    ```

5. **Acesse o projeto no navegador**: Abra o navegador e acesse a URL fornecida pelo Vite, geralmente

    ```bash
    http://localhost:3000
    ```

## Exercício 1: Parâmetros de Rotas

Utilizar parâmetros de rotas para exibir detalhes dinâmicos.

- Crie um componente `UserDetail.jsx` que exiba detalhes de um usuário com base em um parâmetro de rota (por exemplo, `userId`).
- No `App.jsx`, defina uma rota dinâmica para o componente `UserDetail.jsx` utilizando um parâmetro de rota.
- No `UserDetail.jsx`, utilize o hook `useParams` para acessar o parâmetro de rota e exibir as informações correspondentes.

## Exercício 2: Navegação Programática

Implementar navegação programática usando o React Router.

- Crie um componente `Login.jsx` com um formulário de login simples.
- No `Login.jsx`, após a submissão do formulário, redirecione o usuário para a página `Profile.jsx` utilizando o hook `useNavigate`.
- Crie um componente `Profile.jsx` para exibir informações do perfil do usuário após o login.

## Exercício 3: Rotas Aninhadas

Configurar rotas aninhadas para criar uma estrutura de navegação hierárquica.

- Crie um componente `Dashboard.jsx` que contenha links de navegação para diferentes seções do painel.
- Crie componentes `Overview.jsx`, `Settings.jsx` e `Reports.jsx` para as diferentes seções do painel.
- No `Dashboard.jsx`, defina rotas aninhadas para os componentes `Overview.jsx`, `Settings.jsx` e `Reports.jsx`.

## Exercício 4: Redirecionamento

Implementar redirecionamentos no React Router.

- Crie um componente `NotFound.jsx` para exibir uma mensagem de erro quando a rota não for encontrada.
- No `App.jsx`, defina uma rota que redirecione para a página `NotFound.jsx` quando uma rota inválida for acessada.
- Crie um componente `ProtectedRoute.jsx` que redirecione para a página de login se o usuário não estiver autenticado.

## Exercício 5: Guardas de Rotas

Implementar guardas de rotas para proteger rotas específicas.

- Crie um contexto `AuthContext.jsx` para gerenciar o estado de autenticação do usuário.
- Crie um componente `PrivateRoute.jsx` que utilize o contexto `AuthContext` para verificar se o usuário está autenticado antes de renderizar a rota.
- Utilize o componente `PrivateRoute.jsx` para proteger rotas sensíveis, como o painel (`Dashboard.jsx`).

## Exercício 6: Animações de Transição

Adicionar animações de transição entre as páginas utilizando React Router e CSS.

- Instale a biblioteca `react-transition-group` em sua aplicação.
- No `App.jsx`, configure animações de transição para as rotas utilizando o componente `CSSTransition` do `react-transition-group`.
- Crie estilos CSS para definir as transições entre as páginas.

## Exercício 7: Breadcrumbs

Implementar breadcrumbs para melhorar a navegação e a experiência do usuário.

- Crie um componente `Breadcrumbs.jsx` que exiba a trilha de navegação atual com base nas rotas.
- No `App.jsx`, adicione o componente `Breadcrumbs.jsx` ao layout principal da aplicação.
- Utilize o hook `useLocation` para atualizar a trilha de navegação dinamicamente conforme o usuário navega entre as páginas.

## Exercício 8: Parâmetros de Consulta (Query Params)

Utilizar parâmetros de consulta para filtrar ou buscar informações.

- Crie um componente `Search.jsx` com um formulário de busca.
- No `Search.jsx`, redirecione o usuário para uma página de resultados (`SearchResults.jsx`) utilizando parâmetros de consulta.
- No `SearchResults.jsx`, utilize o hook `useLocation` para acessar e utilizar os parâmetros de consulta na exibição dos resultados.

## Exercício 9: Lazy Loading

Implementar carregamento dinâmico (lazy loading) das rotas para melhorar a performance da aplicação.

- Crie componentes que simulam páginas com conteúdo grande (`HeavyComponent1.jsx`, `HeavyComponent2.jsx`).
- Utilize `React.lazy` e `Suspense` para carregar os componentes grandes de forma dinâmica nas rotas.
- No `App.jsx`, envolva as rotas com o componente `Suspense` para exibir um fallback enquanto os componentes são carregados.

## Exercício 10: Roteamento com Tabs

Implementar navegação com abas (tabs) utilizando React Router.

- Crie um componente `Tabs.jsx` que exiba abas para navegação entre diferentes seções.
- No `Tabs.jsx`, configure rotas para cada aba utilizando o React Router.
- Crie componentes para o conteúdo de cada aba (`TabContent1.jsx`, `TabContent2.jsx`, `TabContent3.jsx`).

## Exercício 11: Roteamento com Modal

Implementar navegação utilizando modais com React Router.

- Crie um componente `Modal.jsx` que exiba conteúdo em um modal.
- No `App.jsx`, configure uma rota para exibir o `Modal.jsx` com base na URL.
- Utilize a navegação programática para abrir e fechar o modal com base na rota.

