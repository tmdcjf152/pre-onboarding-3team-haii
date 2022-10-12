import { useEffect, useRef, useState } from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import styled from 'styled-components';

const MusicplayerBlock = styled.div``;

const Musicplayer = () => {
	const [audio, setAudio] = useState('');
	const myRef = (useRef < H5AudioPlayer) | (null > null);
	const [play, setPlay] = useState(false);
	const [volume, setVolume] = useState(50);
	const [mute, setMute] = useState(false);
  const [musicData, setMusicData] =useState('')

	useEffect(() => {
		fetch('http://localhost:3000/data/musicData.json')
    .then((res) => {res.json()});
    .then((data)=>{
      setMusicData(data);
    })
  },[])

	return (
		<MusicplayerBlock>
			<div className='musicPlayerInnerBox'>
				<AudioPlayer />
			</div>
		</MusicplayerBlock>
	);
};

export default Musicplayer;
