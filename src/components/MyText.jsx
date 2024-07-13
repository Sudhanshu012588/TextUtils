import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
function MyText() {
  const [text, settext] = useState("Enter your text");
  const [copyText, setcopytext] = useState("copy")
  const convertUP = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };
  const handlechange = (e) => {
    settext(e.target.value);
  };
  const convertLo = () => {
    let newText = text.toLowerCase();
    settext(newText);
  };

  const clearText = () => {
    settext("");
  };

  const genText = () => {
    let aplha =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz./,;:><}{[]+=_-*`~!@#$%^&*()1234567890";
    let randomtext = "";
    for (let i = 0; i < 92; i++) {
      const randomIndex = Math.floor(Math.random() * aplha.length);
      randomtext += aplha[randomIndex];
    }
    settext(text+randomtext);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const copy = () => {
    navigator.clipboard
      .writeText(text)

      
        setcopytext("Copied");
        setTimeout(() => {
            setcopytext("Copy")
        }, 1000);    
  };


  function stringToBinary(str) {
    return str.split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  }

  const setBinary=()=>{
    let BinaryText = stringToBinary(text);
    settext(BinaryText);

  }

  const Count = ()=>{
    let specChar=0;
    let specchatString = "./,;:><}{[]+=_-*`~!@#$%^&*()"
    for (let i = 0; i < text.length; i++) {
        for(let m = 0; m<specchatString.length;m++){
            if(text[i]===specchatString[m]){
                specChar++;
            }
        }
    }
    return specChar;
  }

  let specChar = Count()



  const Countalpha = ()=>{
    let specChar=0;
    let specchatString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < text.length; i++) {
        for(let m = 0; m<specchatString.length;m++){
            if(text[i]===specchatString[m]){
                specChar++;
            }
        }
    }
    return specChar;
  }

  const CountNumber = ()=>{
    let specChar=0;
    let specchatString = "1234567890"
    for (let i = 0; i < text.length; i++) {
        for(let m = 0; m<specchatString.length;m++){
            if(text[i]===specchatString[m]){
                specChar++;
            }
        }
    }
    return specChar;
  }
  let numbers = CountNumber()
  let nalpha = Countalpha();
  return (
    <>

        <NavBar nChar={text.length} specChar={specChar} nalpha={nalpha} numbers={numbers}/>
      <div className="mx-9">
        <textarea
          className="bg-slate-500 mt-5  w-full h-80 p-6 font-medium border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={text}
          value={text}
          onChange={handlechange}
        />
      </div>

      <div className="mx-5 my-1">
        <button
          className="quaternary p-3 rounded-xl mx-4 my-1"
          onClick={convertUP}
        >
          Convert To UpperCase
        </button>

        <button
          className="quaternary p-3 rounded-xl mx-4 my-1"
          onClick={convertLo}
        >
          Convert To LowerCase
        </button>

        <button
          className="quaternary p-3 rounded-xl mx-4 my-1"
          onClick={genText}
        >
          Genrate Random text
        </button>

        <button
          className="quaternary p-3 rounded-xl mx-4 my-1"
          onClick={genText}
        >
          Genrate Random text
        </button>

        <button
          className="quaternary p-3 rounded-xl mx-4 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          className="bg-yellow-700 p-3 rounded-xl mx-4 my-1"
          onClick={speak}
        >
          SPEAK
        </button>
        <button
          className="bg-yellow-700 p-3 rounded-xl mx-4 my-1"
          onClick={copy}
        >
          {copyText}
        </button>
        <button
          className="bg-yellow-700 p-3 rounded-xl mx-4 my-1"
          onClick={setBinary}
        >
          GetInBinary
        </button>
      </div>
      <div className="mx-9 my-1">
        <div className="bg-slate-500 mt-5  w-full h-80 p-6 font-medium border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ">
          <div className="flex justify-center items-center bg-slate-500">
            <h1 className="bg-slate-500 ">PREVIEW</h1>
          </div>
            <h1 className="bg-slate-500 mx-1">No of character={numbers}</h1>
            <h1 className="bg-slate-500 mx-1 ">No of specialchar={specChar}</h1>
            
            <h1 className="bg-slate-500 mx-1 ">No of Alphabets={nalpha}</h1>
            
            <h1 className="bg-slate-500 mx-1 ">No of Numerals={numbers}</h1>
   
          <p className="bg-slate-500 overflow-clip">{text}</p>
        </div>
      </div>
    </>
  );
}

export default MyText;
