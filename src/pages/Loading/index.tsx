import S from '@pages/Loading/style';
import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <S.Wrapper>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </S.Wrapper>
  );
};

export default Loading;
