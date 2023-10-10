import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};
  width: 100%;
  height: 317px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  padding: 0 24px;
`;

const HeaderHeader = styled.section`
  height: 56px;
  line-height: 43px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  align-items: center;
`;

const HeaderMain = styled.section`
  margin-top: 15.57px;
  display: flex;
  gap: 48px;
  overflow: hidden;
`;

const HeaderFooter = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 96px;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 9px;
`;
const Image = styled.div<{ imgUrl: string }>`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
  width: 104px;
  height: 104px;
  border-radius: 15px;
`;
const MainInfo = styled.div``;

const MainTitle = styled.div`
  display: flex;
  height: 40px;
  color: ${({ theme }) => theme.COLOR.white};
  font-size: 56px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-600']};
  align-items: center;
`;
const Description = styled.div`
  margin-top: 24px;
  width: 440px;
  line-height: 160%;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  overflow: auto;
  color: ${({ theme }) => theme.COLOR.white};
`;

const FilterState = styled.div`
  position: absolute;
  top: 232px;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  gap: 24px;
  margin-top: 37px;
`;

const FilterGroup = styled.div``;

const SelectButton = styled.div<{ $state: boolean }>`
  height: 32px;
  display: flex;
  color: ${({ $state, theme }) =>
    $state ? theme.COLOR.white : theme.COLOR['gray-4']};
  gap: 8px;
  padding-bottom: ${({ $state }) => (!$state ? '11px' : '8px')};
  align-items: center;
  border-bottom: 3px solid
    ${({ $state, theme }) => ($state ? theme.COLOR.white : 'none')};
  cursor: pointer;
  font-size: 12px;
`;

const LeftEmpty = styled.div``;

const ControlButton = styled.div<{
  color: string;
  backgroundColor?: string;
  hoverColor?: string;
}>`
  display: inline-flex;
  height: 28px;
  padding: 7.5px 10px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ''};
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => (hoverColor ? hoverColor : '')};
  }

  text-align: center;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};

  transition: 0.5s;
`;

const CreateButton = styled.div`
  display: inline-flex;
  height: 32px;
  padding: 7px 10px;
  color: ${({ theme }) => theme.COLOR.black};
  background-color: ${({ theme }) => theme.COLOR['gray-1']};
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  cursor: pointer;
  line-height: 150%;
  font-size: 12px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.COLOR['gray-2']};
  }

  transition: 0.5s;
`;

const S = {
  Wrapper,
  HeaderHeader,
  HeaderMain,
  HeaderFooter,
  ButtonGroup,
  Image,
  MainInfo,
  MainTitle,
  Description,
  FilterGroup,
  FilterState,
  SelectButton,
  LeftEmpty,
  ControlButton,
  CreateButton,
};

export default S;
