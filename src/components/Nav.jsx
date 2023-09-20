import { Link } from 'react-router-dom'

export default function Nav() {
  return(
      <div id="navbar">
      <Link to='/red' style={{textDecoration:"none"}}>Red Page</Link>
      <Link to='/blue' style={{textDecoration:"none"}}>Blue Page</Link>
      <Link to='/' style={{textDecoration:"none"}}>Home Page</Link>
    </div>
  )
}