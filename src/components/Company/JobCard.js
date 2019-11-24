import React from 'react';

const JobCard = props => {
  const { title, description } = props.job;
  return (
    <div >
      <h2>{title}</h2>
      <div >
        Description: <em>{description}</em>
      </div>          
    </div>
  );
};

export default JobCard;