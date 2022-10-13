import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);
	const handleClick = () =>
		// console.log(showNav),
		setShowNav(!showNav);

	return (
		<>
			<NavWrap>
				<div className='navInner'>
					<div className='LogoInnerBox'>
						<Link to='/player' className='logo'>
							HAII
						</Link>
					</div>
					<Link to={'/recorder'} className='navList'>
						Recorder
					</Link>
					<Link to={'/player'} className='navList'>
						MusicPlayer
					</Link>
				</div>
			</NavWrap>
			<NavMobile>
				<div className='navMbInner'>
					<CgMenu className='mobileBar' onClick={handleClick} />
					{showNav && (
						<div className='navMb' onClick={handleClick}>
							<CgClose className='closeBtn' onClick={() => setShowNav(showNav)} />
							<img className='imgMbLogo' src='../../../src/assets/images/haii_logo.png' alt='하이로고' />
							{/* <Link to={'/'} className='navMbList' onClick={() => setShowNav(showNav)}>메인</Link> */}
							<Link to={'/recoder'} className='navMbList' onClick={() => setShowNav(showNav)}>
								녹음화면
							</Link>
							<Link to={'/player'} className='navMbList' onClick={() => setShowNav(showNav)}>
								음악재생화면
							</Link>
						</div>
					)}
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
	@media (max-width: 768px) {
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
            &:hover{
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
				color: #b993d6;
				margin-bottom: 50px;
			}
			.imgMbLogo {
				display: block;
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
`;
export default Navbar;
