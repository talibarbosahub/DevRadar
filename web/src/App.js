import React, { useState, useEffect } from 'react';
import api from './services/api'
import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('./devs');

      setDevs(response.data);
    }
    loadDevs();

  }, []); // array vazio como parametro para executar apenas uma vez a função

  async function handleAddDev(data) { // função que recebe os dados para cadastrar o dev

    const response = await api.post('/devs', data)

    //console.log(response.data)
    setDevs([...devs, response.data]) // cria um array copiando todos os devs que já tem no estado e adiciona o novo se fosse uma remoção poderia usar.filter alteração poderia usar o .map
  }


  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />  {/* onSubmit envia a função handleAddDev*/}
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;
