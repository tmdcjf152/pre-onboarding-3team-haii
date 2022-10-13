import styled from 'styled-components';

const Mainpage = () => {
	return (
        <MainpageBlock>메인</MainpageBlock>
    )
};

const MainpageBlock = styled.div`
    margin-left: 300px;
     @media (max-width: 768px) {
        margin-left: 0;
    }
`;
export default Mainpage;
