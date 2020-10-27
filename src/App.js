import React from "react";
import "./style.css";
let title='Cowboy';
let i=0;
export default function App() {
  
  let dt=[
    {
 src: 'https://media.istockphoto.com/photos/the-silhouette-of-a-cowboy-on-horseback-at-sunset-on-a-background-picture-id1165094937?b=1&k=6&m=1165094937&s=170667a&w=0&h=wQhFjWY-tp3rP-j8RafeRVWDOAT2IKpXYoVF2hDijxc=',
 title:'Cowboy',
    },
    {
 src:'https://cdn.pixabay.com/photo/2016/07/04/19/49/cowgirl-1497258__340.jpg',

  title:'Cowgirl',
    }
  ]
 
 let next=()=>{
   if(i < dt.length-1){
 i+=1;
   }else{
     i-=1;
   }
 ttl.innerHTML=dt[i].title;
 img1.src=dt[i].src;
 }
  
  return (
    <div>
    <div style={{backgroundColor:'lightGrey'}}>
      <h1>Western wworld!</h1>
      
    </div>
    <div style={{backgroundColor:'lightGrey',width:50,height:350}}>
      <img id='img1' style={{width:350,height:350}} src={dt[i].src} />
      <p id='ttl' style={{marginLeft:150}}>{dt[i].title}</p>
      <button style={{marginLeft:150}} onClick={next}>next</button>
    </div>
    </div>
  );
}
