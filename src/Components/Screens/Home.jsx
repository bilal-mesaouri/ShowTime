import { useState,useEffect } from 'react'
import PrimarySearchAppBar from '../AppBar'
import Trending from '../Trending'
import PopularNow from '../PopularNow'
import { findAll } from '../../Network/Lib/Movies'
function Home() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState()
  const [Popular, setPopular] = useState()
    useEffect(() => {
      async function fetchData(){
        const datos = await findAll();
        console.log(datos)
        setdata(datos)
        setPopular(datos.slice(0,4))
      }
      fetchData();
    }, [])
  return (
    <div className='main' >
      {Popular?<div className="appbar">
        <PrimarySearchAppBar data={data} />
        <Trending data={data} parent={"home"} title={"what to watch ?"}/>
        <PopularNow data={Popular} title={"Popular now"}/>
        {/* <PopularNow data={Popular} title={"Popular now"}/> */}
        <div className="footer">
          
        </div>
        

      </div>:(
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Home