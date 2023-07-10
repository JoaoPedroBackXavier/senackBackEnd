## conceitos

# API, ( aplication programing interface / interface de programação de aplicativos )
- um conjunto de especificaçoes que definem de que forma as aplicaçoes
irão se cmunicar.
- regras e protocolos para que softwares  interajam entre si.
- interface para que um sistema interaja com outro sistema.
- API é como o cardapio de um restaurante e os produtos ceriam informaçoes,
o cardapio conectaria o cliente ao restaurante.

# REST, ( representation state transfer / transferencia reprensatacional de estadio )
- restrição de arquitetura.
- conjunto de regras que permite dois sistemas se comuniquem pela internet.
- separa backend de frontend.

# RESTFUL, 'REST' com 'FUL'
- utiliza metodos HTTP.
- utilizadas em nuvens.
- capacidade de aplicar os principios de REST.

# maturidadede de modelo RESTful
   - nivel 0;
       A API prescisa utilizar o protcolo HTTP para a comunicaçao

   - nivel 1;
       A API deve possuir mapeamento de recurso bem definidos.
       Representando substantivos que fazem a correta  utilização
       das URIs para  os recursos respectivos.

   - nivel 2;
       A API deve utilizar o protocolo HTTP de forma semantica 
       com seus verbos com o uso GET, POST, PUT, DELETE e PATCH de acordo
       com a requisição.

   - nivel 3.
       A API deve mostrar o seu estado atual de relacionamento 
       com os demais recursos da API.

# JSON, ( Javascript Object Notation / notação de dados Javascript )
- padrão de dados.
- estruturar dados em forma de dados.
- transferir informaçao entre servidor e cliente.

# Requisiçoes HTTP
- O protocolo define um conjunto de metodos de
requisição responsaveis por indicar a ação a 
ser executada para um dado recurso.
- GET, PUSH, DELETE, PUT, PATCH.

# Headers HTTP
-  campo para envio de informaçoes adicionais 
(normalmente formataçoes ou autorizaçoes) que
nao tem relação com os dado em si.
- autorization, Content Type e Accept.

# HTTP codes
- 100 - 199: informativos.
- 200 - 299: susseso.
- 300 - 399: redirecionamento.
- 400 - 499: erros do cliente.
- 500 - 599: erros de servidor.

# FrameWork
- biblioteca.
- reune varios projetos provendo uma funcionalidade generica.

# ExpressJS
- frameWork para nodeJS.
- fornece requisitos minimos para servidores web.