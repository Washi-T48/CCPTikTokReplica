import './Buttons.css'
import heart from './heart.svg'
import comment from './comment.svg'
import share from './share.svg'
import { useState } from 'react'

const Heart = (properties) => {
  const [likesCount, setLikesCount] = useState(properties.likesCount)
  const [likeStatus, setLikeStatus] = useState(properties.likeStatus)

  const handleLikeButton = () => {
    if (likeStatus === true) {
      setLikesCount(likesCount - 1)
      setLikeStatus(false)
    }
    else {
      setLikesCount(likesCount + 1)
      setLikeStatus(true)
    }
  }

  if (likeStatus === true) {
    return (
      <>
        <div className='singleButtonContainer'>
          <img className='heart filter-red' src={heart} onClick={handleLikeButton} />
        </div>
        <p className='subText'>{likesCount}</p>
      </>

    )
  }
  else {
    return (
      <>
        <div className='singleButtonContainer'>
          <img className='heart filter-white' src={heart} onClick={handleLikeButton} />
        </div >
        <p className='subText'>{likesCount}</p>

      </>
    )
  }
}

const Comment = (properties) => {
  return (
    <>
      <div className='singleButtonContainer'>
        <img className='comment filter-white' src={comment} />
      </div >
      <p className='subText'>{properties.commentsCount}</p>
    </>
  )
}

const Share = () => {
  return (
    <>
      <div className='singleButtonContainer'>
        <img className='share filter-white' src={share} />
      </div >
      <p className='subText'>SHARE</p>
    </>
  )

}


const Buttons = (properties) => {
  return (
    <div className='buttonsContainer'>
      <Heart likeStatus={properties.data.isLiked} likesCount={properties.data.likes} />
      <Comment commentsCount={properties.data.comments} />
      <Share />
    </div>
  )
}

export { Buttons };