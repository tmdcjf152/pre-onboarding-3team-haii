import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Musicplayer from './musicplayer/Musicplayer';
import Recorder from './recorder/Recorder';

const Mainpage = () => {
const {page} = useParams()

	return (
        <MainpageBlock>
            <div className="mainInnerBox">

            </div>
        </MainpageBlock>
    )
};

const MainpageBlock = styled.div`
    margin-left: 300px;
    padding: 0px 50Px;
     @media (max-width: 768px) {
        margin-left: 0;
    }
`;
export default Mainpage;
