import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const handleClick = () => (
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
                    <div className='overlay' onClick={handleClick}>
                        <div className='navMb' onClick={() => setShowNav(showNav)}>
                            <CgClose className='closeBtn' onClick={handleClick} />
                            <img className='imgMbLogo' src='../../../src/assets/images/haii_logo.png' alt='하이로고' />
                            <Link to={'/'} className='navMbList' onClick={handleClick}>메인</Link>
                            <Link to={'/record'} className='navMbList' onClick={handleClick}>녹음화면</Link>
                            <Link to={'/player'} className='navMbList' onClick={handleClick}>음악재생화면</Link>
                        </div>
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
            .mobileBar {
                font-size: 30px;
                display: none;
                @media (max-width: 768px) {
                    display: block;
                    position: absolute;
                    top: 30px;
                    left: 20px;
                }
            }
            .overlay {
                position: fixed;
                width: 100%;
                height: 100%;
                background-color:rgba(0, 0, 0, 0.3);
                .navMb {
                    background-color: #B4C3D5;
                    border-radius: 10px;
                    box-shadow: 1px 1px 5px #ccc;
                    height: 100%;
                    width: 200px;
                    position: absolute;
                    top:0;
                    left: 0; 
                    padding: 30px 20px;
                    .closeBtn {
                        font-size: 30px; 
                        color :#fff;
                        margin-bottom: 10px;
                    }
                    .imgMbLogo {
                        display: block;;
                        width: 50px;
                        margin-bottom: 20px;
                    }
                    .navMbList {
                        display: block;
                        color: #fff;
                        margin-bottom: 20px;
                    }
                }
            }
        }
`
export default Navbar;