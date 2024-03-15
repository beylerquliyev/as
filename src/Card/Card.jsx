import { IoPersonCircleSharp } from "react-icons/io5";
import Style from "../Card/Card.module.css"
import { useState } from "react";
export function Card(){
    const[person1,SetPerson1]=useState([])
    const[person2,SetPerson2]=useState([])
    const[person3,SetPerson3]=useState([])
    const[person4,SetPerson4]=useState([])
    const[Cards,SetCards]=useState([])
    
  async function RandomId(){
    let response=await fetch ("https://deckofcardsapi.com/api/deck/new/shuffle")
    let response2=await response.json()
    return response2
   
  }

 
 async function ResultData(){
    let randomData= await RandomId()
  
    let response=await fetch (`https://deckofcardsapi.com/api/deck/${randomData.deck_id}/draw/`)
    let response2=await response.json()
   return response2.cards[0].image

 }
 async  function  Pushdata(){
    let data= await ResultData()
    if((person1.length ===0||person1.length===1)&&person1.length<3){
       
        SetPerson1((prev)=>[...prev,data])
        }

        else if(person1.length ===2 && ( person2.length===0||person2.length===1)&&person2.length<3){
            SetPerson2((prev)=>[...prev,data])
    
        }
        else if(person1.length ===2 && person2.length===2&&(person3.length===0||person3.length===1)&&person3.length<3){
            SetPerson3((prev)=>[...prev,data])
    
        }
        else if(person1.length ===2 && person2.length===2&&person3.length===2&&(person4.length===1||person4.length===0)&&person4.length<3){
            SetPerson4((prev)=>[...prev,data])
    
        }
        else if(person1.length ===2 && person2.length===2&&person3.length===2&&person4.length===2&&Cards.length<5){

            SetCards((prev)=>[...prev,data])
    
        }

    }
  
    function Restart(){
        SetPerson1((pre)=>[])
        SetPerson2((pre)=>[])
        SetPerson3((pre)=>[])
        SetPerson4((pre)=>[])
        SetCards((pre)=>[])
    }


  

console.log( `person1 ${person1}`);
console.log( `person2 ${person2}`);
console.log( `person3 ${person3}`);
console.log( `person4 ${person4}`);
console.log( `Cards ${Cards}`);
  return(
    <div className={Style.FullDiv}>
      



        <div className={Style.Person1Div}>

     <div className={Style.CardTextDiv} >

     <div className={Style.person1} >

<div className={Style.text1}>
<h1>Player1</h1>
<h1>1001$</h1>
</div>
<IoPersonCircleSharp size={85} color="blue" />


</div>

<div className={Style.CardDiv} >
{person1.map((i,index)=>{
    return <img  className={Style.cards} src={i} alt="" />
})}

    
    
</div>


     </div>
     <div className={Style.buttonDiv}>
  <button className={Style.btn} onClick={Pushdata}>Dealing cards</button>
     <button className={Style.btn} onClick={Restart} >Restart</button>
  </div>




     <div className={Style.CardTextDiv} >

<div className={Style.person1} >

<div className={Style.text1}>
<h1>Player2</h1>
<h1>20054$</h1>
</div>
<IoPersonCircleSharp size={85} color="red" />


</div>
<div className={Style.CardDiv} >
{person2.map((i,index)=>{
    return <img  className={Style.cards} src={i} alt="" />
})}

</div>


















</div>

     


         
            

        </div>








        <div className={Style.CardCentre}>
        {Cards.map((i,index)=>{
    return <img  className={Style.cards} src={i} alt="" />
})}
       


        </div>
         {/*AltDivinBasdamagi  */}

        <div>

            
        <div className={Style.Person1Div}>

<div className={Style.CardTextDiv2} >

<div className={Style.person1} >

<div className={Style.text1}>
<h1>Player3</h1>
<h1>72345$</h1>
</div>
<IoPersonCircleSharp size={85} color="green" />


</div>
<div className={Style.CardDiv} >
{person3.map((i,index)=>{
    return <img  className={Style.cards} src={i} alt="" />
})}

</div>


















</div>




<div className={Style.CardTextDiv2} >

<div className={Style.person1} >

<div className={Style.text1}>
<h1>Player4</h1>
<h1>1234$</h1>
</div>
<IoPersonCircleSharp size={85} color="white" />


</div>
<div className={Style.CardDiv} >
{person4.map((i,index)=>{
    return <img  className={Style.cards} src={i} alt="" />
})}

</div>


















</div>




    
       

   </div>

           
            
        </div>

        {/* altDivKutarmagi */}
     

    </div>
  )
}