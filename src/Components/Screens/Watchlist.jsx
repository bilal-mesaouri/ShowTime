import React from 'react'
import { useState,useEffect } from 'react'
import Trending from '../Trending'
import { findAll } from '../../Network/Lib/Movies'
import PrimarySearchAppBar from '../AppBar'
import PopularNow from '../PopularNow'
function Watchlist() {
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
    Popular?<div>
        <PrimarySearchAppBar/>
        <PopularNow data={Popular} title={"Your Watchlist"}/>
        <PopularNow data={Popular} title={""}/>
        <PopularNow data={Popular} title={""}/>
        <PopularNow data={Popular} title={""}/>
        <PopularNow data={Popular} title={""}/>
        <PopularNow data={Popular} title={""}/>
    </div>:(
        <div>Loading...</div>
      )
  )
}

export default Watchlist