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
        navigator.clipboard.writeText(text);
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

    // const[style,setStyle] = useState({
    //     backgroundColor:'light',
    // });


    
  return (
    
          <div className=" container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#16003B' }}>

              <h1 className="mb-3">{props.heading}</h1>
              <div className="mb-3">
                  <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#27283d' : 'white', color: props.mode === 'dark' ? 'white' : '#27283d' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
              </div>
              
              <div className="container" >
                <button style={{backgroundColor: props.btncolor}} disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
                <button style={{backgroundColor: props.btncolor}} disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button style={{backgroundColor: props.btncolor}} disabled = {text.length === 0}className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy Text</button>
                <button style={{backgroundColor: props.btncolor}} disabled = {text.length === 0}className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button style={{backgroundColor: props.btncolor}} disabled = {text.length === 0}className='btn btn-primary mx-1 my-1' onClick={handleClrTxt}>Clear</button>
             </div>
             

          {/* <button className="btn btn-primary mx-3" onClick={()=>handleLanClick('en')}>English</button>
    <button className="btn btn-primary mx-3" onClick={()=>handleLanClick('hin')}>Hindi</button>
    <button className="btn btn-primary mx-3" onClick={()=>handleLanClick('ar')}>Arabic</button> */}
          {/*  */}




      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#100720' }}>
              <h1>Text Summary</h1>
              <p><i><b>{text.split(/\s+/).filter((elements)=>{return elements.length!==0}).length}</b></i> words and <i><b>{text.length}</b></i> charachters</p>
              <p><i><b>{0.008 * text.split(" ").filter((elements)=>{return elements.length!==0}).length}</b></i> Minutes read</p>
              <h2>Preview</h2>
              <p>{text.length > 0 ? text : "Nothing to preview here"}</p>
        </div>
        </div>
    
    
    
  )


}

