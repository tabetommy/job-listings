import React,{useState} from 'react';
import './App.css';
import {Data} from './Data';
import Jobs from './components/Jobs';

//when i click it filters and data contains only fronend
//when i close frontend data should contain all other roles

function App() {
   const[data,setData]=useState(Data);
   const[filteredTags,setFilteredTags]=useState([]);
  
   function handleClear(){
     setData(Data)
     filteredTags.length=0
   }

   function handleRemove(i){
    const newTags=filteredTags;
    newTags.splice(i,1);
    setFilteredTags([...newTags])
    
   }
  return(
      <div className="app">
      <div className="header">
        <img src="./assets/images/bg-header-desktop.svg" alt="header"/>
      </div>
      <div id="tagsBar">
        {filteredTags.map((filteredTag,i)=>{
        return <span key={i} id="tag-con">
          <span className="tag">
            {filteredTag}
          </span>
          <span className='icon' onClick={()=>handleRemove(i)}>
              <img src="./assets/images/icon-remove.svg"  alt="icon-remove"/>
          </span>
          </span>
        })}
        <span id="clear" onClick={handleClear}>Clear</span>
      </div>
      <Jobs 
      jobListings={data}
      filteredJobs={setData}
      tags={setFilteredTags}
      />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <span>Tommy Tabe.</span>
      </div>
      </div>
      
      );
    }
    
export default App;


