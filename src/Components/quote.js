import React, {useState} from 'react';
import axios from 'axios';

function Quote() {

    const [num, setNum] =useState(0);
    function upVote(){
        setNum(num+1);
     }
   
    function downVote(){
        if (num > 0){
            setNum(num-1);
        }
        else{
            alert('Zero limit reached');
            setNum(0);
        }
    
     }
    
const [quote, setQuote] = useState("");
const getQuote = () => {

  axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes").then(
    (response) => {
      console.log(response);
      setQuote(response.data)}
    
  );
};



    return (
        
        <div className='main_div'>
            <div className='center_div'>
                <h1> {num} </h1>
            <div className='btn_div'>
        <button onClick={getQuote}>Get Quote</button>
        {quote}
        
        <button onClick={upVote}> Upvote</button>
        <button onClick={downVote}> DownVote </button>
        
                </div>
            </div>
        </div>
    )
}


export default Quote;
