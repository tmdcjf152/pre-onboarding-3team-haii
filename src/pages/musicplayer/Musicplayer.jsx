import styled from "styled-components";

const Musicplayer = () => {
  return <MusicplayerBlock></MusicplayerBlock>;
};
const MusicplayerBlock = styled.div`
  margin-left: 300px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export default Musicplayer;
