import axios from "axios";
import React from "react";

const ShowData = ({ data, onDropOneWay, allowDrop }) => {
  const [countries, setCountries] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([false]);

  React.useEffect(() => {
    if (data !== "") {
      const lowerData = data.toLocaleLowerCase();
      setIsLoading(true);
      axios
        .get(`https://restcountries.eu/rest/v2/region/${lowerData}`)
        .then((res) => {
          setIsLoading(false);
          setCountries(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  }, [data]);

  console.log(countries);

  return (
    <div
      onDrop={onDropOneWay}
      onDragOver={allowDrop}
      className="w-2/3 h-full border-2 border-solid border-gray-400 text-white  p-4"
    >
      {data === "" ? <div className='text-blue-400 text-4xl font-bold'> Please Drag one of religions...  </div> : <div>
      {isLoading && data !== "" ? (
        <div className='text-4xl text-black flex justify-center'>
          <img src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif' alt='loading'/>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {countries.map((item) => (
            <div
              key={item.name}
              className="bg-purple-400 h-8 p-1 m-1 rounded-md"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
      </div> }
    </div>
  );
};

export default ShowData;
