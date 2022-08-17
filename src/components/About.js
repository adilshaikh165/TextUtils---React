import React from 'react'

export default function About(props) {

    // const[myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // });

    let myStyle={
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? '#042743' : 'white',
        border : '1px solid',
        borderColor : props.mode === 'dark' ? 'white' : 'dark'
    }

    
    
    
  return (
    
    
        <div>
                    <div className="conatiner" >
                    <h1 className = "my-3 mx-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1>
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style = {myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong> Analyze your text</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {myStyle}>
                            Using this app you can perform verious different operations on your text viz - Convert to UpperCase,Convert to LowerCase,Copy your text,Remove empty spaces and clear your text from textbox
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style = {myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {myStyle}>
                            This application is totally free to use with no registration fees and absolute free service for the liftime. No extra Costs.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style = {myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {myStyle}>
                            The TextUtils website is very compatible with various browsers lige chrome,mozilla firefox,Microsoft,yahoo and many more. This website is responsive in every device and work very fluently.
                        </div>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </div>
            
  )
}
