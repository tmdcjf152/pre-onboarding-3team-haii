import styled from "styled-components";

export const RecorderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 50px 0px;
  color: white;

  .mainInnerBox {
    width: 100%;
    height: 100%;
    padding: 0px 200px;
    margin-left: 300px;
    .recordInnerBox {
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
    }
  }
  .timer_wrapper {
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 25px;
      margin-bottom: 10px;
      color: #6b6e90;
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
          opacity: 0.7;
        }
      }
      .recording_stop {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          margin-right: 5px;
          color: rgb(226, 36, 42);
          opacity: 0.7;
        }
      }
    }
    div {
      margin-bottom: 5px;
      color: white;
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
      width: 15rem;
      height: 80px;
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
  @media screen and (max-width: 768px) {
    .mainInnerBox {
      padding: 0px 50px;
      margin-left: 0px;
    }
  }

  @media screen and (max-width: 375px) {
    .musicPlayerInnerBox {
      .rhap_container {
        .rhap_header {
          padding: 20px 0px 50px 0px;
          text-align: center;
          font: bold 25px/1 "apple";
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
