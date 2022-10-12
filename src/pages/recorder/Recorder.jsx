import styled from "styled-components";
import { RecorderBlock } from "./RecorderBlockStyled";
import { useStopwatch } from "react-timer-hook";
import React, { useState } from "react";
import AudioAnalyser from "react-audio-analyser";
import {
  FaMicrophone,
  FaPause,
  FaStop,
  FaMicrophoneSlash,
} from "react-icons/fa";

function Recorder() {
  const [stat, setStat] = useState();
  const [audiotype, setAudiotype] = useState("audio/wav");
  const [audiosrc, setAudiosrc] = useState();

  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

  function controlAudio(status) {
    setStat(status);
  }

  function changeScheme(e) {
    setAudiotype(e.target.value);
  }

  function recordTimeOut(e) {
    e &&
      setTimeout(() => {
        reset();
        controlAudio("inactive");
      }, 30000);
  }

  const audioProps = {
    status: stat,
    audioType: audiotype,
    audioSrc: audiosrc,
    timeslice: 1000,
    stopCallback: (e) => {
      setAudiosrc(window.URL.createObjectURL(e));
    },

    width: 200,
    height: 50,
    backgroundColor: "#cedbf6",
  };

  return (
    <Wrapper>
      <RecorderBlock>
        <div className="timer_wrapper">
          <h1>Audio Recorder</h1>
          <p>Recording Time</p>
          <div className="timer_num_elem">
            <span>{hourTime}</span>:<span>{minuteTime}</span>:
            <span>{secondTime}</span>
          </div>
          <p className="timer_progress_elem">
            {isRunning ? (
              <div>
                Recording in progress
                <FaMicrophone />
              </div>
            ) : (
              <div>
                Recording stopped
                <FaMicrophoneSlash />
              </div>
            )}
          </p>
        </div>

        <AudioAnalyser {...audioProps} className="audio_recorder_wrapper">
          <div className="btn-box">
            <button
              className="btn_start"
              onClick={() => {
                controlAudio("recording");
                start();
              }}
              onMouseUp={recordTimeOut}
            >
              <FaMicrophone />
            </button>
            <button
              className="btn_pause"
              onClick={() => {
                controlAudio("paused");
                pause();
              }}
            >
              <FaPause />
            </button>
            <button
              className="btn_stop"
              onClick={() => {
                controlAudio("inactive");
                reset();
              }}
            >
              <FaStop />
            </button>
          </div>
        </AudioAnalyser>
      </RecorderBlock>
    </Wrapper>
  );
}

export default Recorder;

const Wrapper = styled.div`
  background: linear-gradient(to right, #b993d6, #8ca6db);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 0;
`;

const RecordTimer = styled.div``;

const AudioRecorder = styled.div`
  /* audio::-webkit-media-controls-mute-button {
    opacity: 0.3;
  } */
`;
