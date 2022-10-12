import styled from "styled-components";
import { useStopwatch } from "react-timer-hook";
import React, { useState } from "react";
import AudioAnalyser from "react-audio-analyser";

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
      }, 10000);
  }

  const audioProps = {
    status: stat,
    audioType: audiotype,
    audioSrc: audiosrc,
    timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
    // startCallback: (e) => {
    //   console.log("succ start", e);
    // },
    // pauseCallback: (e) => {
    //   console.log("succ pause", e);
    // },
    stopCallback: (e) => {
      setAudiosrc(window.URL.createObjectURL(e));
      console.log("succ stop", e);
    },
    // onRecordCallback: (e) => {
    //   console.log("recording", e);
    // },
    // errorCallback: (err) => {
    //   console.log("error", err);
    // },
    // width: 100,
    // height: 50,
    backgroundColor: "black",
  };

  return (
    <RecoderBlock>
      <div>
        <AudioAnalyser {...audioProps}>
          <div className="btn-box">
            <button
              className="btn_start"
              onClick={() => {
                controlAudio("recording");
                start();
              }}
              // onMouseDown={start}
              onMouseUp={recordTimeOut}
            >
              시작
            </button>
            <button
              className="btn_pause"
              onClick={() => {
                controlAudio("paused");
                pause();
              }}
            >
              일시정지
            </button>
            <button
              className="btn_stop"
              onClick={() => {
                controlAudio("inactive");
                reset();
              }}
            >
              멈춤
            </button>
          </div>
        </AudioAnalyser>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Timer</h1>
        <div style={{ fontSize: "50px" }}>
          <span>{hourTime}</span>:<span>{minuteTime}</span>:
          <span>{secondTime}</span>
        </div>
        <p>{isRunning ? "Recording" : "Stop Recording"}</p>
      </div>
    </RecoderBlock>
  );
}

export default Recorder;

const RecoderBlock = styled.div``;
