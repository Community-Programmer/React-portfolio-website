import React from 'react'
import { Link } from 'react-router-dom'

const Technologies = (props) => {

  

  return (
    <>
    <Link to={props.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}> 
    <img data-aos={`${props.showAnimations ? 'zoom-in':'' }`} data-aos-duration="1000" src={props.imagePath} alt={props.alt} width={props.width} height={props.height}/> 
    </Link>
    </>
  )
}

Technologies.defaultProps = {
  width: '60',
  height: '60'
};

export default Technologies