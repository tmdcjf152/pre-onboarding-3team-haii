import styled from 'styled-components';

const Musicplayer = () => {
  return (
    <MusicplayerBlock>음악재생화면</MusicplayerBlock>
  );
};
const MusicplayerBlock = styled.div`
  margin-left: 330px;
      @media (max-width: 768px) {
        margin-left: 0;
    }
`;
export default Musicplayer;
