// import React, { useEffect, useState } from "react";
// import MatchPage from './MatchPage';
// import api from '../../utils/api';

// // import Job from './Company/Job/Job';

// // Job Seeker sees the Comapnies they have paired with


// function SeekerGetMatch(props) {

//     const id = props.job_seeker_id;

//     const [seekersMatches, setNewSeekersMatches]= useState({
//         "job_seeker_id": '',
//         "company_id": '',
//         "job_id": '',
//         "quality": '',
//         "id": '',
//         "company_name": '',
//         "company_email": '',
//         "password": '',
//         "location": '',
//         "phone_number": '',
//         "job_title": '',
//         "description": ''
//     })

//     useEffect(() => {
        
//         api().get(`/api/seeker/${id}/match/`) 
//         .then((response) => {
//             console.log(response.data)
//             setNewSeekersMatches(response.data)      
//             console.log(seekersMatches)
//         })
//         .catch((error) => 
//             error.response.message,
//             // console.log('Network request was unsuccesful'),
//         )
        
//         },[]);


//     return(
//         <>
//             <h1>Your Company Matches</h1>

//             {seekersMatches.map(company => (
//                 <MatchPage key={seekersMatches.company_id} seekersMatches={company}/> 
//             )
//              )}
       
//         </>
//     )
// }

// export default SeekerGetMatch;

import React, { useEffect, useState } from "react";
import api from '../../utils/api';
import MatchPage from '../JobSeeker/MatchPage'

export default function SeekerGetMatch() { 
  const [data, setData] = useState([]);

  useEffect(() => {   
    const getData = () => {
      api
      .get('/api/seeker/1/match')      
      .then(res =>{
        console.log('The response data: ', res.data.results);        
        setData(res.data.results);
      })     
      .catch(err =>{
        console.log('Can not get data');
      })
    }
    getData();
  }, [])

  return <section>
    
    {data.map((company, key) => (
          //  console.log(character);
           <MatchPage key={key} 
                          name={company.company_name} 
                          email={company.company_email} 
                          
                          />
    ))}
    
    </section>

}