# Como usar o git?
Após a instalaçã, é necessario configurar algumas opções do seu usuario, como o nome, email e a Ide para desenvolvimento. A baixo esta a lista dos comandos e sua sintaxe:
```
git config --global user.name"Kawan Araújo" 
```
```
git config --global user.email "kawanaraujocontato@gmail.com" 
```
```
git config --global core.editor vscode
```
Primeiramente, vá para a pasta raiz do seu projeto, abra o console e digite:
```
git init
```
Isso irá adicionar o git ao seu projeto, criando uma pasta oculta chamada .git.

Em seguida voce deve informar ao git quais arquivos ele deve adicionar, basta usar o comando:
```
git add "nomdearquivo.js"
```

Outra alternativa para adicionar todos os arquivos ao git seria usando a seguinte sintaxe:

```
git add --a
```

Para que essas alterações sejam salvas é necessario enviar um commit, seguindo um dos dois modelos a baixo:
```
git commit -a -m "Explicando como adicionar arquivos ao git"
```
com essa sintaxe, vc é capaz de criar commits de todos os arquivos do repositório e adicionar uma explicação do que foi feito.

```
git commit "README.js" -m "aqui eu atualizei informações sobre a criação de commits"
```
Já a sintaxe acima é capaz de explicar quais foram as alteraçoes feitas em arquivos individuais, adicionando uma descrição daquele commit.

## Vizualizando históricos de commits

erro proposital