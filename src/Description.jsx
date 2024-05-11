import './Description.css'
import cd from './cd.svg'

const Description = (properties) => {
    return (
        <div className='descriptionContainer'>
            <p className='userName'>{properties.desc['vidName']}</p>
            <p className='description'>{properties.desc['vidDesc']}</p>
            <img className='spinner' src={cd} /> <p className='mediaName'>{properties.desc['media']}</p>
        </div >
    )
}

export { Description }