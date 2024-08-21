import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const gnrt_pass = useRef();

  const [length, setLength] = useState(8);

  const [password, setPassword] = useState("Generate_password ");


  const generatePassword = () => {
    const arr = "abcdefghij";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += arr.charAt(Math.floor(Math.random() * arr.length));
    }
    setPassword(pass);
  };

  return (
    <>
      <div className="bg-zinc-700 p-20 justify-around flex flex-col m-10 gap-10 rounded-xl relative right-10">
        <input className="text-black-900 bg-black text-white p-3 rounded-xl" type="text" value={password} ref={gnrt_pass} />
        <input type="range" max={20} min={8} className="pointer" onChange={(e)=>setLength(e.target.value)}/>
        <p className="text-white font-bold">Length : {length}</p>
      </div>
      <input  value="special_character"/>
      <button className="bg-red-500 p-3 rounded-xl text-white-400 relative left-20" onClick={generatePassword }>Generate Password</button>
    </>
  );
};

export default App;
