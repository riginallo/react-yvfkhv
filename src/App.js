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
    },
      {
 src:'https://cdn.pixabay.com/photo/2017/09/12/17/32/horse-2743013__340.jpg',

  title:'Mustang',
    }
  ]
 
 let next=()=>{
   if(i < dt.length-1){
 i+=1;
   }
 ttl.innerHTML=dt[i].title;
 img1.src=dt[i].src;
 }

 let Previous=()=>{
   if(i > 0){
 i-=1;
   }
 ttl.innerHTML=dt[i].title;
 img1.src=dt[i].src;
 }
  
  return (
    <div>
    <div style={{backgroundColor:'lightblue',width:350,height:50,marginBottom:10}}>
      <h1>Western world!</h1>
      
    </div>
    <div style={{
    flex: 1,
    marginLeft:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',}}>
      <img id='img1' style={{width:350,height:350}} src={dt[i].src} />
      <p id='ttl' style={{ marginLeft:130,
    borderColor:'black'}}>{dt[i].title}</p>
      <>
      <button style={{ padding:5,borderColor:'black',borderWidth:1,width:100}} onClick={next}>next</button>
      <button style={{ padding:5,marginLeft:20,borderColor:'black',borderWidth:1,
    width:100, }} onClick={Previous}>Previous</button>
      </>
    </div>
    </div>
  );
}
