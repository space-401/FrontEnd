import { Box } from '@mui/material';
import LoadingGIF from '@/assets/loading.gif';
import { S } from './style';

export const Loading = () => {
  return (
    <S.Wrapper>
      <Box sx={{ display: 'flex' }}>
        {/* <CircularProgress /> */}
        <img src={LoadingGIF} />
      </Box>
    </S.Wrapper>
  );
};
