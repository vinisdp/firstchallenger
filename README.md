# Planner
![nodejs-logo-vector](https://user-images.githubusercontent.com/83310782/218368308-9a7acfc7-f581-4db5-8fc5-9317659ef0bf.svg)
<p>Este projeto foi utilizado para testar as habilidades adquiridas, nele foi feito um planner para gerenciar e planejar eventos</p>
<h2>Instalação do node.js no projeto</h2>
<h3>Passo 1:</h3>
<p>Execute o comando:</p>
    
    $ npm install
    
<p>Este comando irá instalar as propriedades do node no projeto</p>
<h2>Instalação do Yarn</h2>
<h3>Passo 2:</h3>
<p>Após intalação do node.js em sua maquina execute o comando:</p>
            
    $ npm install --global yarn 

<p>Este conmando</p>
<p>Para verificar se a instalação ocorreu de acordo execute o comando:</p>

    $ yarn --version
    
<h2>Adicionando o pacote Express</h2>
<h3>Passo 3:</h3>
<p>Apos instalar o yarn de modo global execute o comando:</p>

    $ yarn add express

<p>Este comando irá adicionar o express as dependências</p>
<h2>Instalando nodemon</h2>
<h3>Passo 4:</h3>
<p>Basta executar a seguinte linha de comando:</p>
    
    $ npm install -g nodemon # or using yarn: yarn global add nodemon

<h2> Instalação UUID </h2>
<h3>Passo 5:</h3>
<p>Para instalar as propriedades do UUID basta executar a seguinte linha de comando:</p>
    
    npm i @types/uuid
    
<h2>Utilização da API<h2>
<h3>Rotas Post</h3>
<h4>SingUP<h4>
<p>localhost:3000/api/v1/user/singup para utilizar essa rota basta ir no postman e utilizar o metodo post selecionar a opção body e mudar para json, em seguida adicionar no corpo o seguinte json<p>
    
    {
      "firstName": "Vinicius",
      "lastName": "Silva",
      "birthDate": "07-10-1998",
      "city": "Bauru",
      "country": "Brasil",
      "email": "vini@vini.com",
      "password": "123",
      "confirmPassword": "123"
    }
    
<h4>SingIn<h4>
<p>localhost:3000/api/v1/user/singin para utilizar essa rota basta ir no postman e utilizar o metodo post selecionar a opção body e mudar para json, em seguida adicionar no corpo o seguinte json:<p>
    
    {
      "email": "vini@vini.com",
      "password": "123"
    }
    
<h4>Criação de Eventos<h4>
<p>localhost:3000/api/v1/events/ para utilizar essa rota basta ir no postman e utilizar o metodo post selecionar a opção body e mudar para json, em seguida adicionar no corpo o seguinte json:<p>
    
    {
       "description":"Prova de alg2",
       "dateTime":"2022-11-10T14:47:32.92Z"
    }
    
<h3>Rotas Get</h3>
<h4>Busca de eventos<h4>
<p>Existem três maneiras de utilizar a busca, localhost:3000/api/v1/events/:id é uma delas onde buscará um evento atraves de um id especifico, outra forma é a busca geral onde basta bater a rota padrão localhost:3000/api/v1/events/ onde ela retornará todos os eventos e por fim a busca por dia da semana basta acessar a rota padrão  da seguinte localhost:3000/api/v1/events?diaOfTheWeek=Monday (monday é apenas um exemplo poderia ser qualquer dia da semana) essa busca retornará todos os eventos agendados no dia que foi fornecido na query<p>
<h3>Rotas Delete</h3>
<h4>Remoção de eventos<h4>
<p>Existem duas rotas para deletar eventos a primeira é por dia da semana basta colocar o postman em delete e bater a seguinte rota localhost:3000/api/v1/events?diaOfTheWeek=Monday (lembrando que monday é meramente ilustrativo) isso deletará todos os eventos que foram cadastrados naquele dia da semana e a outra opição é por id localhost:3000/api/v1/events/:id onde irá deletar o evento pertencente ao id</p>
