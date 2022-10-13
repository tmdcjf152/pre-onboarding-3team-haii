import { useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import styled from 'styled-components';
import { AiOutlineDownload } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';

const Musicplayer = () => {
	const musicTracks = [
		{
			musicName: 'Muse Oasis',
			musicArtist: 'BackDoor',
			src: 'https://www.bensound.com/bensound-music/bensound-memories.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/656ad018-1677-4ede-9702-afc7616e3b48/artwork/20a51961-5ac6-4e76-add8-f66a89e00971/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Bring The Beats back',
			musicArtist: 'A-DEMSON',
			src: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/bbfbeb36-3f69-4a82-8391-520746a557fb/artwork/9d41d5da-86f1-4218-88ee-f46608da820a/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Bobby Anderson',
			musicArtist: 'Bold-Fortune',
			src: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/0d696628-1cda-438d-9dbb-1dcd4604fb8f/artwork/3a6f628c-0893-4da9-94cd-276de88b89a6/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Lover Boys',
			musicArtist: 'Ariana franchen',
			src: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/276739b9-542d-41d3-bfaf-28cd02ee2774/artwork/242c7510-5d47-4289-8bd8-ce328fe12d4e/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: '01 15 19',
			musicArtist: 'Sam Michele',
			src: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/7ddd5242-a64b-48c8-bffe-604366fd7f3f/artwork/e663758d-ba26-42f4-8358-9dfe7c0cd412/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Serene',
			musicArtist: 'maya',
			src: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/8f6748e1-5894-48e5-9a83-7b44abd78d1c/artwork/bbb65afe-970c-4dce-a50d-f34fdf47ecd2/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Delete Memory',
			musicArtist: 'Sias',
			src: 'https://www.bensound.com/bensound-music/bensound-sweet.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/a4029bc8-f04b-4e90-8a38-5b143ad17d35/artwork/c04dbbfb-19c3-417c-b3f8-12f95b6b581d/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Max Madder(inst.)',
			musicArtist: 'Moa Rinam',
			src: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/de7069f4-5f51-4b11-925d-d2f364fd2ddf/artwork/ad1a1624-8826-4008-8df6-350853780a43/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Code Block Error',
			musicArtist: 'T AYA',
			src: 'https://www.bensound.com/bensound-music/bensound-pianomoment.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/6a69142f-036a-441c-8622-e3f4838019ab/artwork/53cf6bc9-2117-436f-8f34-9568b5001568/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'King Of Sketch(inst.)',
			musicArtist: 'Chaos Theory',
			src: 'https://www.bensound.com/bensound-music/bensound-erf.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/bd903bba-4c61-4446-9700-cc8a59fbb298/artwork/7bab8700-1167-44d3-a543-f884094bf55b/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Back Back Back',
			musicArtist: 'Behyonse',
			src: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/9ee018eb-f3c0-4c89-ae71-703f07544c91/artwork/5f46e054-4c8c-412f-aa3a-17a7e28195e6/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Good For You',
			musicArtist: 'BBD',
			src: 'https://www.bensound.com/bensound-music/bensound-adventure.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/0f7c6ee8-cdc7-45cb-a770-b43f2aa933a8/artwork/a93aafce-4719-4ab4-a87c-8a192d3dc1d0/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Max Worship',
			musicArtist: 'Moa Rinam',
			src: 'https://www.bensound.com/bensound-music/bensound-photoalbum.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/de7069f4-5f51-4b11-925d-d2f364fd2ddf/artwork/ad1a1624-8826-4008-8df6-350853780a43/version/0/format/jpg/dimension/height/size/384',
		},
		{
			musicName: 'Falling In Reverse',
			musicArtist: 'Burenos',
			src: 'https://www.bensound.com/bensound-music/bensound-november.mp3',
			img: 'https://cdn.cp.adobe.io/content/2/rendition/3f46afa1-8a25-469a-a90d-7e8e084caa10/artwork/c63bf9e5-e153-4587-8a0d-444ffb957ec1/version/0/format/jpg/dimension/height/size/384',
		},
	];

	const [trackIndex, setTrackIndex] = useState(0);
	const [toggle, setToggle] = useState(false);

	const handleClickPrevious = () => {
		setTrackIndex((currentTrack) => (currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1));
	};

	const handleClickNext = () => {
		setTrackIndex((currentTrack) => (currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0));
	};

	return (
		<MusicplayerBlock>
			<div className='musicPlayerInnerBox'>
				{/* 앨범이미지 */}
				<div className='musicImgBox'>
					<img src={musicTracks[trackIndex].img} alt='' />
				</div>
				{/* 오디오 제어 박스 */}
				<AudioPlayer
					layout='horizontal'
					src={musicTracks[trackIndex].src}
					showSkipControls={true}
					showJumpControls={false}
					header={`${musicTracks[trackIndex].musicName}`}
					footer={`${musicTracks[trackIndex].musicArtist}`}
					onClickPrevious={handleClickPrevious}
					onClickNext={handleClickNext}
					onEnded={handleClickNext}
				/>
				{/* 다운로드 버튼 */}
				<div className='downLoadInnerBox'>
					<a
						href={musicTracks[trackIndex].src}
						onMouseOver={() => {
							setToggle(true);
						}}
						onMouseOut={() => {
							setToggle(false);
						}}>
						<AiOutlineDownload />
					</a>
				</div>
			</div>
		</MusicplayerBlock>
	);
};

export default Musicplayer;

const MusicplayerBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	padding: 50px 0px;
	.musicPlayerInnerBox {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 50px;
		background-color: #ffffff40;
		border-radius: 10px;
		box-shadow: 1px 1px 5px #ccc;
		.musicImgBox {
			margin: 0 auto;
			max-width: 100%;
			height: auto;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.rhap_container {
			position: relative;
			width: 100%;
			background-color: initial;
			box-shadow: none;
			.rhap_header {
				padding: 20px 0px 50px 0px;
				text-align: center;
				font: bold 30px/1 'apple';
				color: #fff;
			}
			.rhap_main {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				max-width: 100%;
				/* 타이머바 박스 */
				.rhap_progress-section {
					width: 100%;
					margin-bottom: 30px;
					/* 재생 시간 텍스트 */
					.rhap_time {
						color: #fff;
					}
					.rhap_progress-container {
						/* 프로그래스 바 */
						.rhap_progress-bar {
							.rhap_progress-indicator {
								background-color: #fff;
							}
							.rhap_progress-filled {
								background: linear-gradient(to right, #b993d6, #8ca6db);
							}
							.rhap_download-progress {
								background-color: #ffffff90;
							}
						}
					}
				}
				/* 조작버튼 박스 */
				.rhap_controls-section {
					position: relative;
					padding-right: 80px;
					button {
						width: 100%;
						color: #fff;
					}
					.rhap_volume-bar-area {
						position: absolute;
						left: 190px;
						width: 60px;
						.rhap_volume-bar {
							background-color: #ffffff90;
							.rhap_volume-indicator {
								background-color: #fff;
							}
						}
					}
				}
			}
			.rhap_footer {
				position: absolute;
				left: 50%;
				top: 40%;
				transform: translate(-50%, -50%);
				color: #fff;
			}
		}
		/* 다운로드 버튼 */
		.downLoadInnerBox {
			position: relative;
			position: absolute;
			top: 5%;
			right: 5%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 100%;
			height: 40px;
			svg {
				font-size: 30px;
				color: #ffffff60;
				transition: all 0.5s;
				&:hover {
					color: #fff;
				}
			}
		}
	}

	@media screen and (max-width: 375px) {
		.musicPlayerInnerBox {
			.rhap_container {
				.rhap_header {
					padding: 20px 0px 50px 0px;
					text-align: center;
					font: bold 25px/1 'apple';
					color: #fff;
				}
				.rhap_footer {
					position: absolute;
					left: 50%;
					top: 40%;
					transform: translate(-50%, -50%);
					color: #fff;
				}
			}
		}
	}
`;
