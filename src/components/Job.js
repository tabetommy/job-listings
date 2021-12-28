import React from 'react';
import './jobStyles.css';
//className="flex self-center mr2"

function Job(props) {
  
 function handleRole(){
   const newRole=props.jobLists.filter(jobList=>jobList.role===props.role)
   props.filteredJobs(newRole)
   props.tags(prevTag=>!prevTag.includes(props.role)?[...prevTag,newRole[0].role]:[...prevTag])
 }
 function handleLevel(){
  const newLevel=props.jobLists.filter(jobList=>jobList.level===props.level)
  props.filteredJobs(newLevel)
  props.tags(prevTag=>!prevTag.includes(props.level)?[...prevTag,newLevel[0].level]:[...prevTag])
}

function handleLanguages(event){
    const languageValue=event.target.id
    const newLanguage=props.jobLists.filter(jobList=>jobList.languages.includes(languageValue))
    props.filteredJobs(newLanguage)
    props.tags(prevTag=>!prevTag.includes(languageValue)?[...prevTag,languageValue]:[...prevTag])
}


function handleTools(event){
  const toolValue=event.target.id
  const newTool=props.jobLists.filter(jobList=>jobList.tools.includes(toolValue))
  props.filteredJobs(newTool)
  props.tags(prevTag=>!prevTag.includes(toolValue)?[...prevTag,toolValue]:[...prevTag])
}
    return(
      <div className="container flex justify-between  w-80 ">
        <div className="left_box flex">
          <div className='box_1'>
            <img src={props.logo} alt={props.company} id='imgs' />
          </div>
          <div className='box_2' >
            <p id='box_2_1'>
              <span id="company">
                {props.company}
              </span>
              {props.new?<span id="new">NEW!</span>:null}
              {props.featured?<span id="featured">FEATURED</span>:null}
            </p>
            <p id="position">{props.position}</p>
            <p id='postedAt'>
              {props.postedAt}. 
              {props.contract}. 
              {props.location}
            </p>
          </div> 
        </div>
        <div className="right_box flex self-center">
          <span onClick={handleRole}>{props.role}</span>
          <span onClick={handleLevel}>{props.level}</span>
          {props.languages.map((language,i)=><span id={language} key={i} onClick={handleLanguages}>{language}</span>)}
          {props.tools.map((tool,j)=><span id={tool} key={j} onClick={handleTools}>{tool}</span>)}
          
        </div>

      </div>
      )
    }

export default Job;

