import styled from 'styled-components';

const Recoder = () => {
  return (
    <RecoderBlock>녹음화면 </RecoderBlock>
  );
};

const RecoderBlock = styled.div`
  margin-left: 330px;
   @media (max-width: 768px) {
        margin-left: 0;
    }
`;
export default Recoder;
