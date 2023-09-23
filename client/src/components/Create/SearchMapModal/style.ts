import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-width: 1200px;
  max-width: 1280px;
  height: 760px;
  padding: 32px 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const LeftContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const RightContainer = styled.div``;
const SearchBox = styled.form`
  width: calc(100% - 20px);
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  color: white;
  border: 2px solid ${({ theme }) => theme.COLOR['gray-3']};
  border-radius: 5px;
  overflow: hidden;
`;

const InputBox = styled.input`
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  width: 90%;
  padding: 10px;
  border: none;
  color: white;

  background: ${({ theme }) => theme.COLOR['gray-5']};
`;
const SubmitButton = styled.button`
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  color: ${({ theme }) => theme.COLOR.white};
`;

const SearchList = styled.ul`
  padding-top: 44px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: ${({ theme }) => theme.COLOR['gray-4']};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLOR['gray-5']};
    border-radius: 5px;
  }
`;

const OneList = styled.li<{ select: boolean }>`
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid
    ${({ select, theme }) =>
      select ? theme.COLOR['gray-4'] : theme.COLOR['gray-5']};
  padding: 5px;
  margin-right: 10px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
`;

const PlaceTitle = styled.div``;

const AddressTitle = styled.div``;

const Phone = styled.div``;

const Category = styled.div``;

const S = {
  Wrapper,
  LeftContainer,
  RightContainer,
  SearchBox,
  InputBox,
  SubmitButton,
  SearchList,
  OneList,
  PlaceTitle,
  AddressTitle,
  Phone,
  Category,
};

export default S;
