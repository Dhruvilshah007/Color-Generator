import React, { useState } from "react";

//single color is component
import SingleColor from "./SingleColor";

//its library which is installed and fetchingdata from it
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  // const [color,setColor]=useState('aaaaaa');here vlaue will be shown in input box so onchange is used

  //this state is when user enters wrong input value input box becomes red
  const [error, setError] = useState(false);

  const [list, setList] = useState(new Values('#f15025').all(10));
  //divide 100 by 10
  // const [list, setList] = useState(new Values('#f15025').all(20));divide 100 by 20
  // const [list, setList] = useState(new Values('#f15025').all(1));divide 100 by 1



  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('hello')
    try {
      //10% changing
      let colors = new Values(color).all(10);
      setList(colors)
      // console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  //<> </> fragement when want to sent more tha one thing

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error?'error':null}`}
            // this classname is used to show red input box for wrong value
            //error class is added if error or else null if not error 
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {/* index is sent as prop to Snglecolor component and ...color is spread operator used to send all property in object color */}
       {list.map((color,index)=>{
        //  console.log(color)
       
         return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>

       })}
      </section>
    </>
  );
}

export default App;
