# React Native 

Não tem tag semantica e estilização própria por exemplo h1, h2 e etc. Só estilização CSS dentro do componente.

Não tem className ou id

Atributo style recebe um objeto contendo estilização do elemento espefico

View = Div /Container
Text = span / p 

const Style = StyleSheet.create({objeto JS não pode conter - como no css só camelCase
ex: background-color = backgroundColor})

# Para começar o projeto:

No cmd (não no bash)
npm install expo-cli --global
expo init mobile (nome do projeto)
slecionar um template: enter seleciona o blank
se estiver o yarn vai perguntar se quer instalar as dependencias com usando yarn
cd mobile
yarn start
ler o QR Code com o app expo

# Para fazer as rotas de acesso:

docs.expo.io - Documentação do Expo
manage workflow ->
 guides -> 
 routing and navigation ->
 install into a existing project

 No terminal do projeto:
  yarn add react navigation
  
  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context 
  
  (este ultimo comando se der erro tem que selecionar o bash no terminal pois o poweshell por motivos de segurança os scripts que não forem assinados terão sua execução bloqueada.)

  depois ainda na documentação clicar em Hello React Navigation
  No terminal :
  yarn add react-navigation-stack (navegação por pilha,stack que acontece de acordo com a ação do usuário, quando clicar em botão por exemplo)

  yarn add @react-native-community/masked-view

  importar as rotas no rotas.js


reload no celular é so chacoalhar 
# para instalar o mapa

Mapview

expo install react-native-maps

Sintax se {{}}
{ primeira para declarar que quero incluir codigo JS}{segunda para declarar que é um objeto Js}

# Para pegar a localização do usuário

expo install expo-location