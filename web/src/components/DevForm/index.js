import React, {useState,  useEffect} from 'react';

function DevForm({onSubmit}) { // quando chamar a função onSubmit dentro do form estará recebendo a função handleAddDev do app.js

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  
  useEffect(() => {  // função do navegador para acessar a API de geolocalização do usuário, precisa ser executada uma unica vez a cada vez que o componente for exibido em tela

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
  
    // função para enviar o cadastro
  async function handleSubmit(e){ 
    e.preventDefault();
    await onSubmit({
        github_username,
        techs,
        latitude,
        longitude,
      });
      setGithubUsername('');
      setTechs('');
  }
  return(
    <form onSubmit={handleSubmit}>
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
    )
}

export default DevForm;