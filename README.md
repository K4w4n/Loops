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

Para fazer isso basta digitar o seguinte:

```
git log
```
ou

```
git log --oneline
```
Se por um acaso voce tiver duvidas sobre se os arquivos do git estão sincronizados com os seus arquivos então basta digitar:

```
git status
```
O comando acima retorna um erro se houver algo de errado(como um arquivo que ainda não foi commitado por exemplo).

Provavelmente voce ficará preso no console do git em algum momento ao usar o "log", para conseguir sair basta digitar r ou q no console.

Existem 3 diferentes formas de voltar em verços anteriores do projeto em caso de erro:

1. `git reset --soft fa9cbd992e065800f64864411fdf1dc69f6f2982`

    É o responsavel por voltar a verção do repositório de acordo com o commit feito, mas a verção do repositório na maquina do usuario não é alterada. 
2. `git reset --mixed fa9cbd992e065800f64864411fdf1dc69f6f2982`

    É responsavel por modificar a verção tanto no git como na maquina do usuario
3. `git reset --hard fa9cbd992e065800f64864411fdf1dc69f6f2982`

    É responsavel por modificar a verção do usuario e a verção do git, não permitindo retornar a verção.

O `git reset` não é indicado quando se trabalha em equipes, para esses casos o melhor é utilizar:

```
git revert fa9cbd992e065800f64864411fdf1dc69f6f2982
``` 

Esse comando pega o hash do comit especificado e fas uma cópia para o ponteiro atual, não deletando modificações anteriores.

## criando uma branch

Para ver uma lista de branch e a branch selecionada basta digitar:
```
git branch
```

Para criar uma nova branch basta digitar:
```
git branch "teste"
```

para mudar de branch basta udar o comando:
```
git checkout teste
```