import React, { useEffect, useState } from "react";
import api from '../utils/api';
import MatchPage from './Company/MatchPage'

export default function CharacterList() { 
  const [characters, setCharacters] = useState([]);

  useEffect(() => {   
    const getCharacters = () => {
      axios
      .get('/api/seeker/1/match')      
      .then(res =>{
        console.log('The response data: ', res.data.results);        
        setCharacters(res.data.results);
      })     
      .catch(err =>{
        console.log('Can not get data');
      })
    }
    getCharacters();
  }, [])

  return <section c>
    
    {characters.map((character, key) => (
          //  console.log(character);
           <CharacterCard key={key} 
                          name={character.company_name} 
                          email={character.company_email} 
                          
                          />
    ))}
    
    </section>

}