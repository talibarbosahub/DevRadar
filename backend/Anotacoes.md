
 metodos Http : GET, POST PUT, DELETE
 Tipos de parametros
#Query params: req.query  usados no método GET usado para filtrar/buscar/ordenar/paginar através da url 
exemplo:
 app.get('/users', (request, response)=> {   
 console.log(request.params)
     return response.json({message: "Hello mundo"})
     }); 

 #Route params usado nos métodos Put e delete para identificar um recurso na alteração ou remoção
 exemplo :
 app.delete('/users/:id', (request, response)=> {    
 console.log(request.params)
 return response.json({message: "Hello mundo"})  
 }); 

#Body acessar por request.body usado nos métodos Post e Put para criar/ enviar/alterar as informações de um registro pelo corpo da requisição toda propriedade e valor deve ser como objeto {""}. 
 exemplo:
  app.post('/users', (request, response)=> {    
 console.log(request.body)
 return response.json({message: "Hello mundo"})  
 });
 app.use (expres.json())  
 por padrão o express não entende o Json precisamos colocar o método use para informar que algo que vai ser válido para todas as rotas da aplicação, virão em formato json

Controller geralmente tem 5 funções
index monstrar uma lista do recuso
show mostrar um unico recurso
store criar
uptade alterar
destoy deletar
