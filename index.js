import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

let CurDate=new Date();
CurDate=CurDate.getHours();

let greeting=' ';

if(CurDate>=1 && CurDate<12)
  greeting='Good Morning';
else if(CurDate>=12 && CurDate<19)
  greeting='Good Afternoon';
else
  greeting='Good Night';

ReactDom.render(
    <>
    <div className='div-style'>
        <h1>Hello Sir, {greeting}</h1>
    </div>
    </>,
    document.getElementById("root")
);
