import React, { useState, useEffect } from 'react';
import api from './services/api'
import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

// função do navegador para acessar a API de geolocalização precisa ser executada uma unica vez a cada vez que o componente for exibido em tela



function App() {
  const [devs, setDevs] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, [])  //useEffect serve para disparar uma função toda vez que uma informação alterar ou uma unica vez duraante a renderezição do componente 


  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('./devs');

      setDevs(response.data);
    }
    loadDevs();

  }, []); // passa um array vazio para executar apenas uma vez
  // função para enviar o cadastro
  async function handleAddDev(e) {
    e.preventDefault(); // evitar que envie o usuário para outra tela.

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    //console.log(response.data)

    setGithubUsername('');
    setTechs('');
  }


  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <li className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(',')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
            </li>
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;
