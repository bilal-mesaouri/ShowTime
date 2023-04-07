import { useState,useEffect } from 'react'
import PrimarySearchAppBar from '../AppBar'
import Trending from '../Trending'
import PopularNow from '../PopularNow'
import { findAll,findLatest } from '../../Network/Lib/Movies'
function Home() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState()
  const [Popular, setPopular] = useState()
  const [Newest, setNewest] = useState()
    useEffect(() => {
      async function fetchData(){
        const datos = await findAll();
        console.log(datos)
        setdata(datos)
        setPopular(datos.slice(0,4))
      }
      async function fetchLatest(){
        const datos = await findLatest();
        console.log(datos)
        setdata(datos)
        setNewest(datos.slice(0,4))
      }
      fetchLatest();
      fetchData();
    }, [])
  return (
    <div className='main' >
      {Popular?<div className="appbar">
        <PrimarySearchAppBar data={data} />
        <Trending data={data} parent={"home"} title={"What To Watch ?"}/>
        <PopularNow data={Popular} title={"Popular now"}/>
        <PopularNow data={Newest} title={"Latest"}/>

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