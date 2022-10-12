import styled from "styled-components";
import { useStopwatch } from "react-timer-hook";
import React, { useState } from "react";
import AudioAnalyser from "react-audio-analyser";

function Recorder() {
  const [stat, setStat] = useState();
  const [audiotype, setAudiotype] = useState("audio/wav");
  const [audiosrc, setAudiosrc] = useState();

  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(stopwatchOffset.getSeconds());
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ offsetTimestamp: stopwatchOffset, autoStart: false });

  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

  function controlAudio(status) {
    setStat(status);
  }

  function changeScheme(e) {
    setAudiotype(e.target.value);
  }

  const audioProps = {
    status: stat,
    audioType: audiotype,
    // audioOptions: {sampleRate: 30000}, // 设置输出音频采样率
    audioSrc: audiosrc,
    timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
    startCallback: (e) => {
      console.log("succ start", e);
    },
    pauseCallback: (e) => {
      console.log("succ pause", e);
    },
    stopCallback: (e) => {
      setAudiosrc(window.URL.createObjectURL(e));
      console.log("succ stop", e);
    },
    onRecordCallback: (e) => {
      console.log("recording", e);
    },
    errorCallback: (err) => {
      console.log("error", err);
    },
    width: 100,
    height: 50,
    backgroundColor: "black",
  };
  return (
    <RecoderBlock>
      <div>
        <AudioAnalyser {...audioProps}>
          <div className="btn-box">
            <button
              className="btn_start"
              onClick={() => controlAudio("recording")}
              onMouseDown={start}
            >
              시작
            </button>
            <button
              className="btn_pause"
              onClick={() => controlAudio("paused")}
              onMouseDown={pause}
            >
              일시정지
            </button>
            <button
              className="btn_stop"
              onClick={() => controlAudio("inactive")}
              onMouseDown={reset}
            >
              멈춤
            </button>
          </div>
        </AudioAnalyser>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Timer</h1>
        <div style={{ fontSize: "100px" }}>
          <span>{hourTime}</span>:<span>{minuteTime}</span>:
          <span>{secondTime}</span>
        </div>
        <p>{isRunning ? "Recording" : "Stop Recording"}</p>
        {/* <button onClick={start}>Start</button> */}
        {/* <button onClick={pause}>Pause</button> */}
        {/* <button onClick={reset}>Reset</button> */}
      </div>
    </RecoderBlock>
  );
}

export default Recorder;

const RecoderBlock = styled.div``;
