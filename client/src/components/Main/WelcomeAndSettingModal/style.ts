import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 370px;
  height: 645px;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: Pretendard;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};
`;

const SectionWrapper = styled.div<{ gap: number }>`
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 40px;
  gap: ${({ gap }) => gap}px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};
`;
const ButtonContainer = styled.div`
  ${flexCenter}
  position: absolute;
  bottom: 25px;
  height: 104px;
  width: 370px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};
`;
const IconBoxWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 70px;
`;

const IconBox = styled.div<{ backImg: string; isSelected: boolean }>`
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.COLOR['gray-3']};
  border-radius: 10px;
  background-image: url(${({ backImg }) => backImg});
  background-size: cover;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  transition: opacity 0.3s ease-in-out;
`;

const Text = styled.div<{ weight: number }>`
  text-align: center;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
  font-style: normal;
  font-weight: ${({ weight }) => weight};
  line-height: 120%;
  color: ${({ theme }) => theme.COLOR.white};
`;

const DetailText = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const SubmitBtnWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 24.5px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  width: 130px;
  justify-content: space-between;
`;

const UserContainer = styled.div`
  position: relative;
  display: flex;
  width: 360px;
  padding: 8px 16px 8px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: inherit;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-5']};

    .hoverIcon {
      display: block;
    }
  }
`;

const UserName = styled.div`
  margin-left: 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
`;

const SettingIconBox = styled.div`
  position: absolute;
  cursor: pointer;
  right: 10px;
  border-radius: 5px;
  transition: 0.5s;
  padding: 5px;
  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-4']};
  }
`;

const BackClickBlock = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};
  content: ' ';
  background: transparent;
`;

const MenuGroup = styled.div<{ isOpen: boolean }>`
  right: 0;
  top: calc(100% + 3px);
  position: absolute;
  width: 192px;
  display: ${({ isOpen }) => (isOpen ? 'inline-flex' : 'none')};
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  border-radius: 10px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  background: ${({ theme }) => theme.COLOR['gray-4']};
  box-shadow: ${({ theme }) => theme.SHADOW['shadow-sm']};
`;
const MenuButton = styled.div`
  justify-content: flex-start;
  width: 100%;
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  cursor: pointer;
  display: flex;
  padding: 4px 16px;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-size: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};

  border-radius: 5px;

  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-6']};
  }
`;

const DeleteIconBox = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
`;
const SubmitButton = styled.div`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR.skyblue};

  color: ${({ theme }) => theme.COLOR.black};
  text-align: right;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-size: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const ProfileImg = styled.div<{ img: string }>`
  aspect-ratio: 1/1;
  position: relative;
  transform-style: preserve-3d;
  overflow: hidden;
  background-size: cover;
  background-image: url(${({ img }) => img});
  font-weight: ${({ theme }) => theme.COLOR['gray-4']};
  border-radius: 100%;
`;
const ImgBox = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLOR['gray-6']};
`;

const ImgButton = styled.div`
  padding-top: 10px;
  ${flexCenter}
  cursor: pointer;
  color: ${({ theme }) => theme.COLOR.skyblue};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const Label = styled.label<{ isAlert: boolean }>`
  color: ${({ theme, isAlert }) =>
    isAlert ? theme.COLOR.orange : theme.COLOR.white};
  height: 0px;
  font-size: 14px;
`;

const ButtonText = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
`;

export const M = {
  DeleteIconBox,
  SubmitButton,
  ProfileImg,
  ImgButton,
  ImgBox,
  Label,
};

export const S = {
  SectionWrapper,
  UserContainer,
  UserName,
  SettingIconBox,
  BackClickBlock,
  MenuGroup,
  MenuButton,
  ButtonContainer,
  Wrapper,
  IconBox,
  ButtonText,
  Text,
  IconBoxWrapper,
  SubmitBtnWrapper,
  DetailText,
  FlexContainer,
};

export default S;
