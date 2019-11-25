import React, { useEffect, useState } from "react";
import MatchPage from './Company/MatchPage';
import api from '../utils/api';

// import Job from './Company/Job/Job';

// Company sees the job seekers they have paired with

function CompanyGetMatch(props) {
    console.log(props)

    const id = props.company_id;

    const [companyMatches, setNewCompanyMatches]= useState({
        "job_seeker_id": 1,
        "company_id": 1,
        "job_id": 1,
        "quality": 90,
        "id": 1,
        "name": "Jake",
        "email": "Jake@statefarm.com",
        "occupation": "sales",
        "experience": "10 years in insurance sales",
        "dream_job": "model",
        "password": "soundugly"
    })

    useEffect(() => {
        
        api().get(`/api/company/`) 
        .then((response) => {
            console.log(response.data)
            setNewCompanyMatches(response.data)      
            console.log(companyMatches)
        })
        .catch((error) => 
            error.response.message,
            // console.log('Network request was unsuccesful'),
        )
        
        },[]);


    return(
        <>
            <h1>Your Job Seeker Matches</h1>

            {companyMatches.map(jobSeeker => (
                    <MatchPage key={companyMatches.job_seeker_id} companyMatches={jobSeeker}/> 
                )
            )}
        
        </>
    )
}

export default CompanyGetMatch;







export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = () => {
      api()
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
           <MatchPage key={key}
                          name={character.company_name}
                          email={character.company_email}
                          />
    ))}
    </section>
}