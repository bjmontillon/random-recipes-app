import React from 'react'
import ReactPlayer from 'react-player'

import './responsive-player.css'

const Responsiveplayer = ({ url }) => {
    return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url = { url }
            width ='70%'
            height ='80%'
            controls = {true}
          />
        </div>
      )
}

export default Responsiveplayer