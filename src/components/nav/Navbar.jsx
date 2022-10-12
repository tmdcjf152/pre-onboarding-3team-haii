import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavWrap>
            <div className='navInner'>
                <Link to={'/'} className='navList'>메인</Link>
                <Link to={'/record'} className='navList'>녹음화면</Link> 
                <Link to={'/player'} className='navList'>음악재생화면</Link>
            </div>
        </NavWrap>
    )
}

const NavWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: #96e7fab0;

    .navInner {
        padding: 100px 30px;

        .navList {
            display: block;
            font-size: 30px;
            color: #fff;
            margin-bottom: 20px;
        }
    }
`

export default Navbar;