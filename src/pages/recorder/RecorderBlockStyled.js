import styled from "styled-components";

export const RecorderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  border: none solid black;
  border-radius: 2mm;
  padding: 30px;
  background-color: rgba(52, 52, 52, 0.3);
  color: white;
  z-index: 10;
  box-shadow: 1px 1px 5px #ccc;

  .timer_wrapper {
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 600;
      font-size: 25px;
      margin-bottom: 10px;
    }
    .timer_num_elem {
      font-size: 30px;
      margin-bottom: 5px;
    }
    .timer_progress_elem {
      .recording {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          margin-right: 5px;
          color: rgb(4, 171, 19);
        }
      }
      .recording_stop {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          margin-right: 5px;
          color: rgb(226, 37, 43);
        }
      }
    }
    div {
      margin-bottom: 5px;
    }
  }

  .audio_recorder_wrapper {
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div:first-child {
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 240px;
      height: 80px;
      opacity: 0.7;
      background: linear-gradient(to right, #b993d6, #8ca6db);
      border-radius: 5mm;
    }
    .btn_box {
      button {
        margin: 20px 10px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: none;
        background-color: white;
        color: black;

        svg {
          width: 50%;
          height: 50%;
          color: rgb(166, 154, 216);
        }
      }
    }

    .time_selector {
      display: flex;
      justify-content: center;
      select {
        text-align: center;
        width: 12.5rem;
        height: 3rem;
        background-color: #a2aad6;
        color: white;
        opacity: 0.7;
        border-radius: 10px;
      }
    }
  }
  audio {
    width: 15rem;
    height: 6rem;
  }
`;
