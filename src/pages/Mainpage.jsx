import styled from 'styled-components';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Fade, Slide } from 'react-reveal';

const Mainpage = () => {
	return (
		<MainpageBlock>
			<Fade right>
				<div className='mainInnerBox'>
					{/* 로고박스 */}
					<Fade top delay={1000}>
						<div className='logoInnerBox'>
							<h1 className='logo'>HAII</h1>
						</div>
					</Fade>
					<Fade bottom delay={1000}>
						<main className='textInnerBox'>
							<section className='textOne'>
								<p>디지털 치료제가 만든 새로운 안녕,</p>
								<p>
									진단과 치료가 동시에 가능한 선순환의 기술력
									<br />
									하이는 국내 최고의 디지털 치료제 회사입니다.
								</p>
							</section>
							<section className='productSlide'>
								<p className='product'>Product</p>
								<Swiper
									slidesPerView={1}
									spaceBetween={30}
									loop={true}
									pagination={{
										clickable: true,
									}}
									navigation={true}
									modules={[Pagination, Navigation]}
									className='mySwiper'>
									{/* product - alzguard */}
									<SwiperSlide>
										<div className='appLogo'>
											<img src='https://www.haii.co.kr/img/productLogo/Asset%201@4x.png' alt='' />
										</div>
										<p className='subTitle'>
											카카오톡 기반 뇌건강을 위한
											<br /> 인지강화훈련 챗봇 서비스
										</p>
										<p className='productTitle'>
											새미톡은 뇌건강을 위한 인지강화훈련에서 더 나아가, 대화를 통해 노인들에게 필요한 돈, 건강, <br />
											관계에 대한 종합적인 정보를 제공하는 노인들을 위한 맞춤형 메신저포탈로 나아가고자 합니다.
										</p>
										<div className='productImg'>
											<img src='https://www.haii.co.kr/img/productImage/SaemiTalk_Minimal_1.png' alt='' />
										</div>
									</SwiperSlide>

									{/* product - AnzeiLax3.0 */}
									<SwiperSlide>
										<div className='appLogo'>
											<img className='appIcon' src='https://www.haii.co.kr/img/productAppIcon/mind-garden.png' alt='' />
											<span className='logoTitle'>AnzeiLax 3.0</span>
										</div>
										<p className='subTitle'>2030청년들을 위한 불안장애 치료제</p>
										<p className='productTitle'>
											마음정원 앱은 수용전념치료와 자기긍정이론 기반의 자기대화
											<br /> 훈련을 통해 사용자가 불안장애 치료에 효과적인 자기초점주의 전환과 균형을 맞출 수 있도록 도움을 제공합니다.
										</p>
										<div className='productImg'>
											<img src='https://www.haii.co.kr/img/productImage/Mind%20Garden_Minimal_1.png' alt='' />
										</div>
									</SwiperSlide>

									{/* product - ForMe1.0 */}
									<SwiperSlide>
										<div className='appLogo'>
											<span className='logoTitle'>ForMe 1.0</span>
										</div>
										<p className='subTitle'>ADHD 환아의 자기 조절 향상을 돕는 컴패니언</p>
										<p className='productTitle'>
											ADHD 환아의 뇌 억제 기능 기반 자기 조절 능력 향상 보조 소프트웨어로 환아 스스로 자신의 행동을 계획하고, 실행하고, 평가하는 자기 조절 능력
											함양이 목표입니다.
										</p>
										<div className='productImg'>
											<img src='https://www.haii.co.kr/img/productImage/forme_new_1.png' alt='' />
										</div>
										<div className='productImg'>
											<img src='https://www.haii.co.kr/img/productImage/forme_new_2.png' alt='' />
										</div>
									</SwiperSlide>

									{/* product - PaTaKa*/}
									<SwiperSlide>
										<div className='appLogo'>
											<img className='pataka' src='https://www.haii.co.kr/img/productAppIcon/patakaWithName.png' alt='' />
										</div>
										<p className='subTitle'>뇌졸중으로 인한 마비말장애 환자의 자가 언어 재활을 돕는 디지털 치료제</p>
										<p className='productTitle'>
											환자 스스로도 매일 체계적인 마비말장애 언어 재활을 할 수 있도록, 에이전트 고돌이와 함께하는 훈련을 제공 합니다. 언어 훈련과 동시에
											얻어지는 환자의 음성을 분석하여 피드백 해 주며, 데이터를 통해 환자의 상태를 정확하게 분석하여 맞춤형 재활훈련을 제공 합니다.
										</p>
										<div className='productImg'>
											<img src='https://www.haii.co.kr/img/productImage/PATAKA_1.png' alt='' />
										</div>
										<div className='productImg'>
											<img src='https://www.haii.co.kr/img/productImage/PATAKA_2.png' alt='' />
										</div>
									</SwiperSlide>
								</Swiper>
							</section>
						</main>
					</Fade>
				</div>
			</Fade>
		</MainpageBlock>
	);
};

const MainpageBlock = styled.div`
	margin-left: 300px;
	padding: 50px 50px;
	color: #fff;
	.mainInnerBox {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 50px;
		background-color: #ffffff30;
		border-radius: 10px;
		box-shadow: 5px 1px 5px #6b6e90;
		.logoInnerBox {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			height: 100%;
			margin: 100px 0px 50px 0px;
			.logo {
				font: bold 150px/1 'Contrail One';
			}
		}
		.textInnerBox {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 100%;
			.textOne {
				width: 100%;
				height: 100%;
                margin-bottom: 200px;
				font: bold 30px/2 'apple';
				text-align: center;
			}
			.productSlide {
				width: 100%;
				height: 100%;
				.product {
					position: relative;
					width: 100%;
					margin-bottom: 100px;
					text-align: center;
					font: bold 50px/1 'apple';
				}
				.swiper {
					width: 100;
					height: 100%;
					margin: 0 auto;
					/* 각 슬라이드 */
					.swiper-slide {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						flex-wrap: wrap;
						.appLogo {
							display: flex;
							justify-content: center;
							align-items: center;
							width: 400px;
							height: 100px;
							margin-bottom: 50px;
							.pataka {
								width: 300px;
								height: 150px;
							}
							.appIcon {
								width: 100px;
								height: 100px;
							}
							img {
								width: 100%;
								height: 100%;
							}
							.logoTitle {
								font: bold 45px/1 'apple';
							}
						}
						.subTitle {
							text-align: center;
							font: bold 35px/1 'apple';
							margin-bottom: 50px;
						}
						.productTitle {
							text-align: center;
							font: 25px/1.5 'apple';
							margin-bottom: 50px;
						}
						.productImg {
							display: flex;
							justify-content: center;
							width: 100%;
							height: 100%;
                            img{
                                width: 50%;
                                height: 50%;
                            }
						}
					}
                    .swiper-button-prev {
                        color:#fff;
                    }
                    .swiper-button-next {
                        color:#fff;
                    }
                    .swiper-pagination-bullet {
                        background: #fff;
                    }
				}
			}
		}
	}

	@media screen and (max-width: 1028px) {
        .mainInnerBox {
		.textInnerBox {
			.textOne {
				font: bold 23px/2 'apple';
			}
			.productSlide {
	
				.swiper {
		
					/* 각 슬라이드 */
					.swiper-slide {
		
						.appLogo {
							display: flex;
							justify-content: center;
							align-items: center;
							width: 400px;
							height: 100px;
							margin-bottom: 50px;
							.pataka {
								width: 300px;
								height: 150px;
							}
							.appIcon {
								width: 100px;
								height: 100px;
							}
							img {
								width: 100%;
								height: 100%;
							}
							.logoTitle {
								font: bold 45px/1 'apple';
							}
						}
						.subTitle {
							text-align: center;
							font: bold 30px/1 'apple';
							margin-bottom: 50px;
						}
						.productTitle {
							text-align: center;
							font: 20px/1.5 'apple';
							margin-bottom: 50px;
						}
						.productImg {
							display: flex;
							justify-content: center;
							width: 100%;
							height: 100%;
                            img{
                                width: 50%;
                                height: 50%;
                            }
						}
					}
                    .swiper-button-prev {
                        color:#fff;
                    }
                    .swiper-button-next {
                        color:#fff;
                    }
                    .swiper-pagination-bullet {
                        background: #fff;
                    }
				}
			}
		}
	}
	}

	@media screen and (max-width: 768px) {
		margin-left: 0;
        .mainInnerBox {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 50px;
		background-color: #ffffff30;
		border-radius: 10px;
		box-shadow: 5px 1px 5px #6b6e90;
		.logoInnerBox {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			height: 100%;
			margin: 100px 0px 50px 0px;
			.logo {
				font: bold 150px/1 'Contrail One';
			}
		}
		.textInnerBox {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 100%;
			.textOne {
				width: 100%;
				height: 100%;
                margin-bottom: 200px;
				font: bold 20px/2 'apple';
				text-align: center;
			}
			.productSlide {
				width: 100%;
				height: 100%;
				.product {
					position: relative;
					width: 100%;
					margin-bottom: 100px;
					text-align: center;
					font: bold 50px/1 'apple';
				}
				.swiper {
					width: 100;
					height: 100%;
					margin: 0 auto;
					/* 각 슬라이드 */
					.swiper-slide {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						flex-wrap: wrap;
						.appLogo {
							display: flex;
							justify-content: center;
							align-items: center;
							width: 400px;
							height: 100px;
							margin-bottom: 50px;
							.pataka {
								width: 300px;
								height: 150px;
							}
							.appIcon {
								width: 100px;
								height: 100px;
							}
							img {
								width: 100%;
								height: 100%;
							}
							.logoTitle {
								font: bold 45px/1 'apple';
							}
						}
						.subTitle {
							text-align: center;
							font: bold 28px/1 'apple';
							margin-bottom: 50px;
						}
						.productTitle {
							text-align: center;
							font: 20px/1.5 'apple';
							margin-bottom: 50px;
						}
						.productImg {
							display: flex;
							justify-content: center;
							width: 100%;
							height: 100%;
                            img{
                                width: 50%;
                                height: 50%;
                            }
						}
					}
                    .swiper-button-prev {
                        color:#fff;
                    }
                    .swiper-button-next {
                        color:#fff;
                    }
                    .swiper-pagination-bullet {
                        background: #fff;
                    }
				}
			}
		}
	}
	}
`;
export default Mainpage;
