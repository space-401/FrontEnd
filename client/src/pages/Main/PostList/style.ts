import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px 48px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  left: 0;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
  border-radius: 40px;
  min-height: 800px;
  background-color: ${({ theme }) => theme.COLOR.black};
`;

const UndefinedList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const UndefinedDefaultImage = styled.div<{ imgUrl: string }>`
  margin-top: 165px;
  width: 438px;
  height: 438px;
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center;
  background-color: ${({ theme }) => theme.COLOR['gray-4']};
  border-radius: 40px;
`;

const UndefinedPostText = styled.div`
  margin-top: 36px;
`;

const UndefinedShareText = styled.div`
  margin-top: 33px;
  color: #9eb8ff;
`;

const PostList = styled.div`
  margin: 48px 0 48px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
`;

const S = {
  Wrapper,
  UndefinedList,
  UndefinedDefaultImage,
  UndefinedPostText,
  UndefinedShareText,
  PostList,
  FilterGroup,
};

export default S;
