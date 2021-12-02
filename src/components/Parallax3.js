import React, { useState } from 'react';

export default function Parallax3() {
  const words = ['Unique', 'Engageante', 'Accessible'];
  const colors = ['#F472B6', '#60A5FA', '#fff'];

  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="flex items-center justify-center text-purple-600 font-extrabold text-4xl xs:text-5xl md:text-6xl mt-20">
        Pour :
      </h2>

      <div className="container flex-col  h-80 m-auto mb-12 bg-fixed bg-center bg-cover custom-img mt-20">
        <div className=" bg-purple-600 bg-opacity-50 shadow-lg">
          <div>
            <h2 className="text-3xl text-center mt-10">
              Une expérience utilisateur <br></br>
              <span style={{ color: colors[count] }}>{words[count]}</span>
            </h2>
          </div>
          <div className="flex justify-center align-items">
            <button
              aria-label='Touchez'
              className="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg items-center justify-center"
              onClick={() => setCount(count => (count + 1) % 3)}
            >
              Touchez
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
