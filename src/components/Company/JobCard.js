import React from 'react';

const JobCard = props => {
  const { title, description } = props;
  return (
    <div >
      <h2>Job Title: {title}</h2>
      <div >
        Description: <em>{description}</em>
      </div>          
    </div>
  );
};

export default JobCard;