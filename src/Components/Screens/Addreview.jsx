import React from 'react'
import { useState } from 'react';
function Addreview () {
    const [inps, setInps] = useState({});

    const onChangeInp = (event) => {
        var aux = inps
        aux[event.target.name]=event.target.value;
        setInps(aux);
    };
    const onSearch = () => {
      console.log(value);
    };
  return (
    <div>
        <div className="authorName">
            <div>
                <span>Name</span>
                <input type="text" />
            </div>
            <div>
                <span>Name</span>
                <input               
                    className="inp"
                    type="text"
                    value={value}
                    onChange={onChangeInp}
                    placeholder="Search..." />
            </div>
            <div>
                <button onClick={onSearch}>Submit</button>
            </div>

        </div>
    </div>
  )
}

export default Addreview