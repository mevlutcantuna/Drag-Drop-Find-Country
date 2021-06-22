import React from "react";
import Preview from "./components/Preview";
import Sidebar from './components/Sidebar';


const App = () => {
  const [data,setData] = React.useState('');

  const dragStart = (e) => {
    e.dataTransfer.setData("Text", e.target.id);
    console.log('start')
  }

  const allowDrop = (e) => {
    e.preventDefault();
    //console.log('allow')
  }

  const onDrop = (e) => {
    e.preventDefault();
  }

  const onDropOneWay = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("Text");
    const text = document.getElementById(data).innerHTML
    //console.log(text);
    setData(text);
    }

  console.log(data);

  return (
    <div className='p-20 flex justify-center h-screen'>
      <Sidebar data={data} dragStart={dragStart} onDrop={onDrop} allowDrop={allowDrop}/>
      <Preview data={data} onDropOneWay={onDropOneWay} allowDrop={allowDrop}/>
    </div>
  );
};

export default App;
