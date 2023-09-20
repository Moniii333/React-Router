import { Link } from 'react-router-dom'

export default function Footer() {
  return(
    <div className='footer-div'>
      <Link to='/fact' style={{textDecoration:"none"}}>Go here to see a random fact!</Link>
    </div>
  )
}
