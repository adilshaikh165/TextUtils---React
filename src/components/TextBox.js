/* eslint-disable no-unused-expressions */
import React, {useState} from'react'
//import { useTranslation } from 'react-i18next';





export default function TextBox(props) {

    
      

    

    const handleUpClick = ()=> {
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
        //const style={backgroundColor : props.mode==='green'?'#FFB4B4':'blue'}
    }
    
    

    const handleLowClick = ()=> {
        //console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleOnChange = (event)=> {
        //console.log("On Change");
        setText(event.target.value);
    }

    const handleCopyClick = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to keyboard", "success");

    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleClrTxt = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    
    
   
    const [text, setText] = useState('');

    const[style,setStyle] = useState({
        backgroundColor:'light',
    });

    
    const changeBtnColor = ()=> {
        if(style.backgroundColor === 'green'){
            setStyle({
                backgroundColor : '#FFB4B4'
            })
        }else if(style.backgroundColor === 'red'){
            setStyle({
                backgroundColor : '#F47C7C'
            })
        }
        else if(style.backgroundColor === 'grey'){
            setStyle({
                backgroundColor : '#000000'
            })
        }
    }

    
  return (
    
          <div className=" container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#16003B' }}>

              <h1>{props.heading}</h1>
              <div className="mb-3">
                  <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
              </div>
              
              <div className="container"  onClick={changeBtnColor}>
                <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-3' onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-primary mx-3' onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-3' onClick={handleClrTxt}>Clear</button>
             </div>
             

          {/* <button className="btn btn-primary mx-3" onClick={()=>handleLanClick('en')}>English</button>
    <button className="btn btn-primary mx-3" onClick={()=>handleLanClick('hin')}>Hindi</button>
    <button className="btn btn-primary mx-3" onClick={()=>handleLanClick('ar')}>Arabic</button> */}
          {/*  */}




      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#16003B' }}>
              <h1>Text Summary</h1>
              <p><i><b>{text.split(" ").length-1}</b></i> words and <i><b>{text.length}</b></i> charachters</p>
              <p><i><b>{0.008 * text.split(" ").length}</b></i> Minutes read</p>
              <h2>Preview</h2>
              <p>{text.length > 0 ? text : "Enter your text in above TextBox for preview"}</p>
        </div>
        </div>
    
    
    
  )


}

