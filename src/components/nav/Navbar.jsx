import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    return (<>
        <NavWrap>
            <div className='navInner'>
                <Link to={'/'} className='navList'>메인</Link>
                <Link to={'/record'} className='navList'>녹음화면</Link> 
                <Link to={'/player'} className='navList'>음악재생화면</Link>
            </div>
        </NavWrap>

        
        {/* 768px 이하에 보임 */}
        <NavMobile>
            <CgMenu className='mobileBar' onClick={() => setShowNav(!showNav) }/>
            {showNav &&
                <div>
                    <Link to={'/'} className='navMbList'>메인</Link>
                    <Link to={'/record'} className='navMbList'>녹음화면</Link>
                    <Link to={'/player'} className='navMbList'>음악재생화면</Link>
                </div>
            }
           

        </NavMobile>
        
    </>)
}

const NavWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: #96e7fab0;
        // 반응형
    @media (max-width: 768px) {
        display: none;
    }

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

const NavMobile = styled.div`
       display: none;
            @media (max-width: 768px) {
            display: block;
        }
   .mobileBar {
        font-size: 50px;
        display: none;
            @media (max-width: 768px) {
            display: block;
        }
    }
`
export default Navbar;