import React from 'react';

const QuoteMBox = ({state, generateIndex}) => {
    const {quotes, index} = state;
    const quote = quotes[index];
    return (
    <div id="container" className="row">
        { quote && (
            <div id="quote-box" className='col s12 m6 offset-m3 card '>
                <div className='card-content white-text'>
                    <p id='text' className='valign-wrapper'>{quote.quote}</p>
                    <cite id='author' className='col s4 offset-s9'>- {quote.author}</cite>
                </div>
                <button className="waves-effect waves btn col s2 offset-s1" >
                    <i class="fa fa-twitter"></i>
                    <a id="tweet-quote" rel="noreferrer" target='_blank' href= {`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`} > tweet</a>
                </button>
                <button className='waves-effect waves-light btn col s3 offset-s5' id="new-quote" onClick={generateIndex}>New Quote</button>
                
            </div>
            ) 
        }  
    </div>
)}

export default QuoteMBox