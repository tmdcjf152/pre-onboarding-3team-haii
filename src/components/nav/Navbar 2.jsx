import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import { Fade, Zoom } from 'react-reveal';


const Navbar = () => {
	const [showNav, setShowNav] = useState(false);
	const handleClick = () =>
		setShowNav(!showNav);

	return (
		<>
			{/* 웹화면 */}
			<NavWrap>
                <Fade up>
				<div className='navInner'>
					<div className='LogoInnerBox'>
                        <Zoom>
						<span to='/' className='logo'>
							HAII
						</span>
                        </Zoom>
					</div>
					<Link to={'/'} className='navList'>
						Main
					</Link>
					<Link to={'/recorder'} className='navList'>
						Recorder
					</Link>
					<Link to={'/player'} className='navList'>
						MusicPlayer
					</Link>
				</div>
                </Fade>
			</NavWrap>

			{/* 모바일화면 */}

			<NavMobile>
				<div className='navMbInner'>
					<CgMenu className='mobileBar' onClick={handleClick} />

						<div className={showNav == true ? 'navMbOn' : 'navMbOff'} onClick={handleClick}>
							<div className='logoInnerBox'>
								<h1 className='logo'>HAII</h1>
							</div>
							<Link to={'/recorder'} className='navMbList' onClick={() => setShowNav(showNav)}>
								Recorder
							</Link>
							<Link to={'/player'} className='navMbList' onClick={() => setShowNav(showNav)}>
								Musicplayer
							</Link>
							<CgClose className='closeBtn' onClick={() => setShowNav(showNav)} />
						</div>
			
				</div>
			</NavMobile>

		</>
	);
};

const NavWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 300px;
	height: 100%;
	@media screen and (max-width: 768px) {
		display: none;
	}
	.navInner {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		height: 90%;
		padding: 50px 30px;
		margin-left: 20px;
		background-color: #ffffff30;
		border-radius: 10px;
		box-shadow: 5px 1px 5px #876b90;
		.LogoInnerBox {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin-bottom: 50px;
			.logo {
				font: bold 60px/1 'Contrail One';
				color: #fff;
				&::after {
					content: '(주)하이';
					font: 12px/1 'apple';
				}
			}
		}
		.navList {
			position: relative;
			display: block;
			padding-left: 20px;
			font: 30px/1.3 'Contrail One';
			color: #fff;
			margin-bottom: 30px;
			transition: all 0.5s;
			&:hover {
				transform: scale(1.1);
			}
			&::before {
				position: absolute;
				top: 0;
				left: 0;
				display: block;
				content: '';
				width: 5px;
				height: 40px;
				background: #fff;
			}
		}
	}
`;

const NavMobile = styled.div`
	display: none;
    transition: all 0.5s;
	.navMbInner {
		position: relative;
		width: 100%;
		height: 100%;
		.mobileBar {
			font-size: 30px;
			display: none;
			display: block;
			position: absolute;
			top: 65px;
			left: 70px;
			color: #ffffff70;
			transition: all 0.5s;
			cursor: pointer;
			z-index: 4;
			&:hover {
				color: #fff;
			}
		}
        
		.navMbOn {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			position: fixed;
			top: 0;
			bottom: 10px;
			width: 100%;
			height: 400px;
			margin: 0 auto;
			padding: 30px 20px;
			background-color: #ffffffd5;
			box-shadow: 6px 4px 30px rgb(0 0 0 / 90%);
			z-index: 2;
            opacity: 1;
            transition: all 0.5s;
			/* 로고박스 */
			.logoInnerBox {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100px;
                margin-bottom: 50px;
				.logo {
					font: 60px/1 'Contrail One';
					color: #fff;
					text-shadow: 2px 2px 5px #000;
					&::after {
						content: '(주)하이';
						font: 12px/1 'apple';
					}
				}
			}
			.closeBtn {
                position: absolute;
                bottom: 20px;
				font-size: 30px;
				color: #aaa;
				transition: all 0.5s;
				cursor: pointer;
				&:hover {
					color: #b993d6;
				}
			}
			.navMbList {
				display: block;
				color: #aaa;
				margin-bottom: 30px;
				font: bold 25px/1 'Contrail One';
                transition: all 0.5s;
                &::after{
                        display: block;
                        content: '';
                        width: 0%;
                        height: 5px;
                        background:#aaa;
                        transition: all 0.5s;
                    }
                &:hover{
                    color: #b993d6;
                    &::after{
                        display: block;
                        content: '';
                        width: 100%;
                        height: 5px;
                        background:#b993d6;
                    }
                }
			}
		}
        .navMbOff {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			position: fixed;
			top: -500px;
			bottom: 10px;
			width: 100%;
			height: 400px;
			margin: 0 auto;
			padding: 30px 20px;
			background-color: #ffffffd5;
			box-shadow: 6px 4px 30px rgb(0 0 0 / 90%);
			z-index: 2;
            opacity: 0;
            transition: all 0.5s;
			/* 로고박스 */
			.logoInnerBox {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100px;
                margin-bottom: 50px;
				.logo {
					font: 60px/1 'Contrail One';
					color: #fff;
					text-shadow: 2px 2px 5px #000;
					&::after {
						content: '(주)하이';
						font: 12px/1 'apple';
					}
				}
			}
			.closeBtn {
                position: absolute;
                bottom: 20px;
				font-size: 30px;
				color: #aaa;
				transition: all 0.5s;
				cursor: pointer;
				&:hover {
					color: #b993d6;
				}
			}
			.navMbList {
				display: block;
				color: #aaa;
				margin-bottom: 30px;
				font: bold 25px/1 'Contrail One';
                transition: all 0.5s;
                &::after{
                        display: block;
                        content: '';
                        width: 0%;
                        height: 5px;
                        background:#aaa;
                        transition: all 0.5s;
                    }
                &:hover{
                    color: #b993d6;
                    &::after{
                        display: block;
                        content: '';
                        width: 100%;
                        height: 5px;
                        background:#b993d6;
                    }
                }
			}
		}
	}

	@media screen and (max-width: 768px) {
		display: block;
		position: relative;
	}
`;
export default Navbar;
