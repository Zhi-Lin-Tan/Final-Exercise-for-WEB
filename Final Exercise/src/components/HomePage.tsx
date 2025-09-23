import React from 'react'
import football from '../assets/football.png'
import boardGame from '../assets/boardGame.jpg'
import Sing from '../assets/Sing.jpg'
import '../App.css'
import { useNavigate } from 'react-router'

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='picOfAll'>
        <img className='firstPic' src={football} alt='picture of football' 
          onClick={() => navigate('/session/football')}/>
        <img className='firstPic' src={boardGame} alt='picture of board game'
          onClick={() => navigate("/session/boardgame")} />
        <img className='firstPic' src={Sing} alt='picture of singing' 
          onClick={() => navigate("/session/sing")} />
      </div>


      
    </div>
  )
}
