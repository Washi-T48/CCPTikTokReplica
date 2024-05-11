import './Player.css'
import { useRef } from 'react'

const Player = (properties) => {

    const handleVideoClick = (e) => {
        e.target.paused ? e.target.play() : e.target.pause()
        if (e.target.muted && e.target.paused) { e.target.play(); e.target.muted = false }
    }

    const videoRef = useRef()
    return (
        <>
            <video className='videoPlayer' ref={videoRef}
                src={properties.video} onClick={handleVideoClick}
                autoPlay loop muted />
        </>
    )

}

export { Player }