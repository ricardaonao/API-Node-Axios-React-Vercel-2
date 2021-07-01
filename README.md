# Consumindo API com Axios + Node.js na Vercel
## Objetivo deste código 🎯
Demonstrar como consumir uma API utilizando o **Axios** e hospedando na **Vercel**. 

## O que vamos usar. 🧰
- Node.js 
- Axios 
- Vercel
- Endpoint / API  


## Configurando Ambiente Local 📗
 Instale o **Node.Js** (caso não tenha, acesse o site do Node.js https://nodejs.org/en/, baixe a versão LTS, e instale. Next, next, next...), instale os seguintes pacotes utilizando seu terminal:


* **Axios** : Cliente **HTTP** assíncrono e baseado em *promisses*. Seu trabalho é facilitar as solicitações HTTP dos *verbos* CRUD, que serão feitas as rotas ou *endpoints*.<br> <br>
`npm install --save axios`<br> <br>

* **API** : Fonte de dados que serão exibidos na tela. Utilizaremos uma API ou endpoint ficitícia: APIs *fake*, foram criadas para testarmos nossas aplicações. Existem diversas, iremos utilizar como exemplo uma API que nos retorna dados da serie de filmes *Stars Wars*. 🛸<br> <br>
https://swapi.dev/<br> <br>



>Dica : A flag `--save` significa que este pacote ficará regitrado no package.json.<br>

<br>

## Configurando Ambiente no Backend - Vercel 📕
Antes, clone esta aplicação para seu repositório no Github, pois a Vercel irá identificar seus repositórios automaticamente no Git e sugerir que seu novo projeto (hospedagem) seja feito apartir do repositório que você escolher no Github, e com 1 clique sua aplicação já estará rodando em produrção com **segurança e certificado digital** 🤯. Prático não?<br><br>
Se você não conhce a Vercel, esta é a sua oportunidade. A Vercel é simplismente **magnifica**!! Rode aplicações **SSR (Server Side Rending)** com alta performance gratuitamente. E se precisar escalar, ela está pronta para isso com custo acessível. **Então vamos lá!**<br><br>
Acesse >> www.vercel.com <br><br>

Se ja tiver conta, faça o login, se não tiver, crie sua conta, é gratuita. Após isso em seu *"Dashboard"*, clique em *"New Project"*, selecione de onde quer importar seus repositórios. Escolha Github, autorize a comunicação da Vercel com a API da *Github*. Em seguida serão listados todas suas dependências no Github. Escolha este projeto que você clonou, clique em *"Import"*, clique em *"Select"* em sua conta, dê um nome para seu projeto, e finalize clicando em *"Deploy"*. <br> irá aparecer uma mensagem: *"Congratulations! Your project has been successfully deployed"*.<br><br>
Pronto, tá no ar. Clique em *"Visit"* e veja sua aplicação novinha!


## Testando Aplicação 🕹

Se você clonou o repositório, digite no seu terminal o comando: <br> <br>
`npm start` ou `yarn start` <br><br>

Acesse em seu navegador o localhost, e divirta-se!<br> 
http://localhost:3000/<br>

Se já enviou seu projeto para Vercel, basta acessar o link fornecido pela Vercel, e ver sua aplicação rodando. <br><br>
No meu caso, o link é este abaixo. Veja essa aplicação funcionando, clicando nele. <br> <br>
https://api-node-axios-react-vercel-2.vercel.app/<br>
## Conclusão 🏆
Com poucas ferramentas, porém poderosas, podemos criar aplicações dinâmicas, resposivas, com comportamento estático e de alto desempenho, graças o **SSR** servido pela **Vercel**. Já em nossa saga do *Star Wars*, podemos ver de forma randômica, os resultados da API utilizada. Em nosso código seguimos as boas práticas, e não bloquemos o fluxo síncrono do código, utilizando as *promisses* com *.then*, permitindo que toda aplicação seja fluída e rápida, dependendo apenas da resposta do servidor. **Viva ao Node.js!**



## Dica 📌
Na vercel, é possivel adicionar seu domínio personalizado (de qualquer TLD) adiquirido em qualquer lugar. Deixando sua aplicação perfeita. 😉 <br><br>
←[Voltar para lista anterior](https://github.com/ricardaonao/APIs)
____________________________________________________________________
Autoria: Ricardo Souza 