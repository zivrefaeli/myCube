import React, { useState } from 'react'
import home from './assets/home.png'
import learn from './assets/learn.png'
import tournament from './assets/tournament.png'
import getItOn from './assets/get_it_on.png'
import './styles/home.css'

const initDesc = {
  title: 'First Impression',
  content: 'Here are some of myCube screens'
}

const images = [
  { screen: 'Home', src: home },
  { screen: 'Learn', src: learn },
  { screen: 'Tournament', src: tournament }
]

export default function Home() {
  const [desc, setDesc] = useState(initDesc)

  const updateDesc = e => {
    const alt = e.target.alt
    let content;

    switch (alt) {
      case 'Home':
        content = 'Main page of the app where you can navigate to its others sections';
        break

      case 'Learn':
        content = "Full guide of the Rubik's Cube structure and its solution method";
        break

      case 'Tournament':
        content = 'After learning and practicing, you can compete against other users';
        break

      default:
    }

    setDesc({ title: alt, content: content })
  }

  return (
    <>
      <h1 className='home-title'>
        myCube
        <br />
        <i>Rubik's Cube Solver</i>
      </h1>

      <div className='wrapper explain'>
        <p>
          My graduation project of Computer Science major in high school.
          <span><b>Available Now</b> on Google Play.</span>
          <img src={getItOn} alt='Get it on' title='Get myCube on Google Play' />
        </p>
        <h2 className='sub-title'>History</h2>
        <p>
          The Rubik's Cube is a cube-shaped mechanical puzzle that was invented in 1974 by the Hungarian sculptor and architecture professor Arna Rubik.
          Each face of a Rubik's Cube is divided into 9 equal squares, which can move and replace places with each others.
          <br />
          <br />
          From the moment of distribution to the world, this puzzle was considered difficult due to the reason many people haven't been able to solve it.
          After a while, some have managed to develop a complex method to solve the Rubik's cube from any position.
        </p>
      </div>

      <div className='wrapper'>
        <div style={{ marginTop: 'calc(2 * var(--ms))' }}>
          <h2 className='sub-title'>{desc.title}</h2>
          <p>{desc.content}</p>
        </div>
        <div
          className='screens'
          onMouseLeave={() => setDesc(initDesc)}>
          {images.map(({ screen, src }, index) => (
            <img
              key={index}
              className='screen'
              src={src}
              onMouseOver={updateDesc}
              alt={screen} />
          ))}
        </div>
        <p>
          And there is a lot more!
          <br />
          <a href="./#">Download myCube</a> and learn how to solve the Rubik's Cube.
        </p>
      </div>
    </>
  )
}