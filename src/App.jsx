// src/App.jsx
// src/App.jsx

import { useState } from 'react';
import "./App.css"


const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      return console.log(`You do not have enough money.`)
    } else {
      const fightersArr = [...team, fighter]
      setTeam(fightersArr)
      setMoney(money - fighter.price)
      setTotalAgility(fightersArr.reduce((acc, fighter) => {
        return acc + fighter.agility
      }, 0))
      setTotalStrength(fightersArr.reduce((acc, fighter) => {
        return acc + fighter.strength
      }, 0))
    }
  }

  const handleRemoveFighter = (teamFighter, index) => {
      const fightersArr = team.toSpliced(index, 1)
      setTeam(fightersArr)
      setMoney(money + teamFighter.price)
      setTotalAgility(fightersArr.reduce((acc, fighter) => {
        return acc + fighter.agility
      }, 0))
      setTotalStrength(fightersArr.reduce((acc, fighter) => {
        return acc + fighter.strength
      }, 0))
  } 


return(
  <>
    <p>Team:</p>
    <p>Team dex: {totalAgility}</p>
    <p>Team str: {totalStrength}</p>
    {team.map((teamFighter, index) => {
      return (<ul key={index}>
        <li>{teamFighter.name}</li>
        <li>Cost: {teamFighter.price}</li>
        <li> Str: {teamFighter.strength}</li>
        <li> Dex: {teamFighter.agility}</li>
        <li><img src={teamFighter.img} /></li>
        <li><button onClick={() => handleRemoveFighter(teamFighter, index)}>Remove</button></li>
      </ul>)
    })}
    <p>Available money: {money}</p>
    {zombieFighters.map((fighter, index) => {
      return (<ul key={index}>
        <li>{fighter.name}</li>
        <li>Cost: {fighter.price}</li>
        <li> Str: {fighter.strength}</li>
        <li> Dex: {fighter.agility}</li>
        <li><img src={fighter.img} /></li>
        <li><button onClick={() => handleAddFighter(fighter)}>Add</button></li>
      </ul>)
    })}
  </>
)
}

export default App
