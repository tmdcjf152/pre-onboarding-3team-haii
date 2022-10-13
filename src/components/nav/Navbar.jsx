import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const handleClick = () => (
        // console.log(showNav),
        setShowNav(!showNav)
    )

    return (<>
        <NavWrap>
            <div className='navInner'>
                <img className='imgLogo' src='../../../src/assets/images/haii_logo.png' alt='하이로고' />
                <Link to={'/'} className='navList'>메인</Link>
                <Link to={'/record'} className='navList'>녹음화면</Link>
                <Link to={'/player'} className='navList'>음악재생화면</Link>
            </div>
        </NavWrap>
        <NavMobile>
            <div className='navMbInner'>
                <CgMenu className='mobileBar' onClick={handleClick} />
                {showNav &&
              
                    <div className='navMb' onClick={handleClick}>
                        <CgClose className='closeBtn' onClick={() => setShowNav(showNav)} />
                        <img className='imgMbLogo' src='../../../src/assets/images/haii_logo.png' alt='하이로고' />
                        <Link to={'/'} className='navMbList' onClick={() => setShowNav(showNav)}>메인</Link>
                        <Link to={'/record'} className='navMbList' onClick={() => setShowNav(showNav)}>녹음화면</Link>
                        <Link to={'/player'} className='navMbList' onClick={() => setShowNav(showNav)}>음악재생화면</Link>
                    </div>

                    
               
                }
            </div>
        </NavMobile>
    </>)
}

const NavWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: #B4C3D5;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #ccc;
    @media (max-width: 768px) {
        display: none;
    }
    .navInner {
        padding: 50px 30px;
        .imgLogo {
            width: 150px;
            margin-bottom: 30px;
        }
        .navList {
            display: block;
            font-size: 30px;
            color: #fff;
            margin-bottom: 30px;
        }
    }
`

const NavMobile = styled.div`
    display: none;
        @media (max-width: 768px) {
            display: block;
            position: relative;
        }
        .navMbInner {
            position: relative;
            height: 100%;
            .mobileBar {
                font-size: 30px;
                display: none;
                @media (max-width: 768px) {
                    display: block;
                    position: absolute;
                    top: 30px;
                    left: 20px;
                    color: #fff;
                }
            }
                .navMb {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 6px 4px 30px rgb(0 0 0 / 90%);
                    height: auto;
                    width: 96%;
                    position: fixed;
                    top: 10px;
                    right: 0;
                    left: 0; 
                    bottom: 10px;
                    margin: 0 auto;
                    padding: 30px 20px;
                    .closeBtn {
                        font-size: 30px; 
                        color :#b993d6;
                        margin-bottom: 50px;
                    }
                    .imgMbLogo {
                        display: block;;
                        width: 100px;
                        margin-bottom: 30px;
                    }
                    .navMbList {
                        display: block;
                        color: #b993d6;
                        margin-bottom: 30px;
                        font-size: 20px;
                    }
                }
            
        }
`
export default Navbar;