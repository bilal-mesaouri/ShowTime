import React from 'react'
import { useEffect,useState } from 'react'
import { findAll } from '../../Network/Lib/Movies'
import '../Card.css'
function Test() {
    const [data, setdata] = useState()
    const [Popular, setPopular] = useState({})

    useEffect(() => {
      async function fetchData(){
        const datos = await findAll();
        console.log(Object.keys(datos).length)
        
        for(var obj in Object.keys(datos)){
          var aux={}
          aux[obj]=datos[obj];
          setPopular(Object.assign(Popular,aux));
        }
        

        setdata(datos)
      }
      fetchData();
    }, [])
    
  return (
    data&&<div className="card">
      <div className="card-image-container">
        {/* we need to put data[Index][img] here */}
        <img src='https://drive.google.com/uc?export=view&id=1QLEqhiWGcl1aPCoaxwLnw8fx1_GyDKmt'  alt="Card image" className="card-image" />
      </div>
      <div className="card-description">{data[0]['plot']}</div>
      <div className="card-buttons">
        <button>Open</button>
        <button>Add To Watchlist</button>
      </div>
    </div>
    
  )
}

export default Test