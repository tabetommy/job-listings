//1 creat one compoent from data
//2 map through data and creat the other components
//3 filter data based on the spans on right
//-Put click events on buttons
//-put state on buttons that contains the whole data, 
// will change(filter) when you click button
// and contain just filtered array
//4 append filtered data on a bar to clear
//5 creat a clear button that clears filtered data



/*
tags.map((tag,i)=>{
   return <span key={i} onClick={handleFilter}>{tag}</span>
 })


allJobs={props.jobListings}
filterJobs1={props.filterJobs}
removedJobs1={props.removedJobs}*/


/*const filteredJobs=props.allJobs
const filterRole=()=>{
    const filtJob=filteredJobs.filter(job=>job.role===props.role);
    props.filterJobs1(filtJob)
    props.removedJobs1(prevSearch=>[...prevSearch,props.role])
 }
 const filterLevel=()=>{
    const filtLevel=filteredJobs.filter(job1=>job1.level===props.level)
    props.filterJobs1(filtLevel)
    props.removedJobs1(prevSearch=>[...prevSearch,props.level])   
 }

 
const filterLang=()=>{
    const filtLang=filteredJobs.filter(job2=>job2.languages.includes(lang))
    props.filterJobs1(filtLang)
    props.removedJobs1(prevSearch=>[...prevSearch,props.level])   
 }


 const modifiedData = () => {
    const newData = filteredJobs.filter((d) => {
     return tags.every((tag) => {
        return (
          d.languages.includes(tag) || 
          d.tools.includes(tag)
        );
      });
    });
    props.filterJobs1(newData);
};

langs.map((lang,i)=><span key={i}>{lang}</span>)}
          {toos.map((too,i)=><span key={i}>{too}</span>)
*/