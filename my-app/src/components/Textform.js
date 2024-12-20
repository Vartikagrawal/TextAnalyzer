import React ,{useState} from 'react'



export default function Textform(props) {
    const handleClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase(); 
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
   
  return (
    <>
    <div className="container">
     <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleClick}>Convert to Uppercase</button> 
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minute read</p>
       <h2>Preview</h2>
       <p>{text}</p>

    </div>
    </>
  )
}
