import {Link} from 'react-router-dom'

function Header() {
    return ( 
        <div className='flex justify-center items-center gap-[20px]'>
            <Link to='/'>Angus</Link>
            <Link to='/phil'>Phil</Link>
            <Link to='/'>Cliff</Link>
            <Link to='/brian'>Brian</Link>
            <Link to='/stevie'>Stevie</Link>
        </div>
     );
}

export default Header;