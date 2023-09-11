import styled from 'styled-components';

const Wrapper = styled.div`
`;

export const S = {
    Wrapper,
};

//

const ContentBox = styled.div`
  width: 247px;
  border-radius: 10px;
  background: inherit;
  overflow: hidden;
`

const ContentPlace = styled.div`
  display: flex;
  padding: 2px 16px;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  background: ${({theme}) => theme.COLOR["gray-5"]};
  color: ${({theme}) => theme.COLOR.white};
  font-family: ${({theme}) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({theme}) => theme.TEXT_SIZE["text-14"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["WEIGHT-400"]};
`

const ContentTitle = styled.div`
  color: ${({theme}) => theme.COLOR.white};
  font-family: ${({theme}) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({theme}) => theme.TEXT_SIZE["text-18"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["WEIGHT-700"]};
`

const ContentCreateAt = styled.div`
  color: ${({theme}) => theme.COLOR["gray-2"]};
  font-family: ${({theme}) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({theme}) => theme.TEXT_SIZE["text-14"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["WEIGHT-400"]};
  line-height: 16px;
`

const AvatarBox = styled.div``

const MarkerContainer = styled.div`
  background: ${({theme}) => theme.COLOR["gray-4"]};
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  align-self: stretch;
`

const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 81px;
`
export const M = {
    ContentBox,
    ContentPlace,
    ContentTitle,
    ContentCreateAt,
    AvatarBox,
    MarkerContainer,
    ContentInfo
}

const OneWrapper = styled.div<{ isSelect: boolean }>`

`

const CardImg = styled.div``

const CardCreate = styled.div``

const CardTitle = styled.div``

const CardDescription = styled.div`
`

const CardInfo = styled.div``

const CardPlace = styled.div``

const TagGroup = styled.div``

export const O = {
    OneWrapper,
    CardImg,
    CardCreate,
    CardTitle,
    CardDescription,
    CardInfo,
    CardPlace,
    TagGroup
}