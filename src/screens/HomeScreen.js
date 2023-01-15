import React from 'react'
import Row from '../components/Row'
import Banner from '../components/Banner'
import "./HomeScreen.css"
import Nav from '../components/Nav'
import requests from '../Requests'
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        {/* Nav */}
        <Nav />
      
      <Banner />
        {/* Banner */}


        {/* Row */}
      <Row 
       title="NETFLIX ORIGINALS"
       fetchUrl ={requests.fetchNetflixOriginals}
       isLargeRow
      />

      <Row 
       title="Trending Now"
       fetchUrl ={requests.fetchTrending}
      
      />
       <Row 
       title="Top Rated"
       fetchUrl ={requests.fetchTopRated}
      
      />

      <Row 
       title="Action Movies"
       fetchUrl ={requests.fetchActionMovies}
      
      />
      <Row 
       title="Comedy Movies"
       fetchUrl ={requests.fetchComedyMovies}
      
      />
      <Row 
       title="Horror Movies"
       fetchUrl ={requests.fetchHorrorMovies}
      
      />
       <Row 
       title="Romance Movice"
       fetchUrl ={requests.fetchRomanceMovies}
      
      />
       <Row 
       title="Documentaries"
       fetchUrl ={requests.fetchDocumentaries}
      
      />
    </div>
  )
}

export default HomeScreen