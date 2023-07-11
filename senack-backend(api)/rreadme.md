# verificar versão do node instalada
node -v

# gerar arquivo package.json
npm init -y

# instalar o type script
npm i -g typscript

# transpilar o codigo ts
npx tsc index.ts

# criar arquivo de configuração do ts
npx tsc --init

# configurações tsconfig.json
"target":"es6",
"module":"commonjs",
"sourceMap": true,
"outDir":"./build",
"rootDir":"./src",
"removeComments": true,
"noImplicitAny": true

# adicionar script no package.json
"start":"npx tsc && node ./build/index.js"

# express

   # 1 passo 1
    verificar a versão do node
    node v

   # 2 passo 2
    para instalar o express
    npm i express

   # 3 passo 3
    pacote(1)
    npm i mysql2

   # 4 passo 4
    pacote(2)
    npm i nodemon - D

   # 5 passo 5
    pacote(3)
    npm i dotenv

   # 6 passo 6
    .gitignore
    node_modules

   # 7 passo 7
    configurar eslint
    npx eslint --init 
        style
        commonjs
        no
        browser
        guide
        standard
        json
        yes
        npm
   # 8 passo 8
    criar src
    criar index.js dentro do src 
