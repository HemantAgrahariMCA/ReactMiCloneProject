import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BiPlay } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'

const apiKey = 'c61462d5645d0fe886e300553f59764c'
const url = 'https://api.themoviedb.org/3'
const imgUrl = 'https://image.tmdb.org/t/p/original'
const upcoming = 'upcoming'
const nowPlaying = 'now_playing'
const popular = 'popular'
const topRated = 'top_rated'

const Card = ({ img }) => <img className="card" src={img} alt="" />

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
)

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)

      setUpcomingMovies(results)
    }
    const fetchnowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)

      setNowPlayingMovies(results)
    }
    const fetchpopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)

      setPopularMovies(results)
    }
    fetchUpcoming()
    const fetchtopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)

      setTopRatedMovies(results)
    }
    
    fetchUpcoming()
    fetchnowPlaying()
    fetchpopular()
    fetchtopRated()
   
  })
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title="Upcoming Movies on Netflix" arr={upcomingMovies} />
      <Row title="Now Playing on Netflix" arr={nowPlayingMovies} />
      <Row title="Popular Movies on Netflix" arr={popularMovies} />
      <Row title="Top Rated on Netflix" arr={topRatedMovies} />
    
    </section>
  )
}

export default Home
