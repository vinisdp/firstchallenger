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
      "country": "SP",
      "email": "vini@vini.com",
      "password": "123",
      "confirmPassword": "123"
    }
    
