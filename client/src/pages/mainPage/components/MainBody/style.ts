import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 500px;
  left: 0;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
  border-radius: 40px;
  background: ${({ theme }) => theme.COLOR.black};
  min-height: 800px;
  padding: 48px;
`;

const UndefinedList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const UndefinedDefaultImage = styled.div<{ img_url: string }>`
  margin-top: 165px;
  width: 438px;
  height: 438px;
  background: url(${({ img_url }) => img_url}) no-repeat center;
  background-color: ${({ theme }) => theme.COLOR['gray-10']};
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
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div``;

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
