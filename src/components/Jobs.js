import React from 'react';
import Job from './Job';


function Jobs(props) {
  const mapJobs=props.jobListings.map(joblisting=>{
  return <Job
  filteredJobs={props.filteredJobs}
  tags={props.tags}
  jobLists={props.jobListings}
  filterJobs1={props.filterJobs}
  removedJobs1={props.removedJobs}
  key={joblisting.id}
  logo={joblisting.logo}
  company={joblisting.company}
  new={joblisting.new}
  featured={joblisting.featured}
  position={joblisting.position}
  postedAt={joblisting.postedAt}
  contract={joblisting.contract}
  location={joblisting.location}
  role={joblisting.role}
  level={joblisting.level}
  languages={joblisting.languages}
  tools={joblisting.tools}

  />
  })
  return (
   <div>{mapJobs}</div>
  )
}

export default Jobs;