import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 500px;
  left: 0;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
  border-radius: 40px;
  background: ${({ theme }) => theme.COLOR['gray-9']};
  min-height: 800px;
`;

const UndefinedList = styled.div`
  display: flex;
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
  margin: 48px;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const S = {
  Wrapper,
  UndefinedList,
  UndefinedDefaultImage,
  UndefinedPostText,
  UndefinedShareText,
  PostList,
};

export default S;
