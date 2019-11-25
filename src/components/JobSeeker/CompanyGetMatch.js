import React, { useEffect, useState } from "react";
import MatchPage from './MatchPage';
import api from '../../utils/api';

// import Job from './Company/Job/Job';

// Company sees the job seekers they have paired with

// function CompanyGetMatch(props) {
//     console.log(props)

//     const id = props.company_id;

//     const [companyMatches, setNewCompanyMatches]= useState({
//         "job_seeker_id": 1,
//         "company_id": 1,
//         "job_id": 1,
//         "quality": 90,
//         "id": 1,
//         "name": "Jake",
//         "email": "Jake@statefarm.com",
//         "occupation": "sales",
//         "experience": "10 years in insurance sales",
//         "dream_job": "model",
//         "password": "soundugly"
//     })

//     useEffect(() => {
        
//         api().get(`/api/company/1/match/`) 
//         .then((response) => {
//             console.log(response.data)
//             setNewCompanyMatches(response.data)      
//             console.log(companyMatches)
//         })
//         .catch((error) => 
//             error.response.message,
//             // console.log('Network request was unsuccesful'),
//         )
        
//         },[]);


//     return(
//         <>
//             <h1>Your Job Seeker Matches</h1>

//             {companyMatches.map(jobSeeker => (
//                     <MatchPage key={companyMatches.job_seeker_id} companyMatches={jobSeeker}/> 
//                 )
//             )}
        
//         </>
//     )
// }

// export default CompanyGetMatch;


export default function CompanyGetMatch(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCompany = () => {
      api()
      .get('/api/company/')
      .then(res =>{
        console.log('The response data: ', res.data);
        setData(res.data);
      })
      .catch(err =>{
        console.log('Can not get data', err);
      })
    }
    getCompany();
  }, [])
  return <section c>
    {data.map((company, key) =>(
           
           <MatchPage key={key}
                          name={company.name}
                          email={company.email}
                          />
    ))}
    </section>
}