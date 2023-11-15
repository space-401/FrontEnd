import S from '@pages/Loading/style';
import { Box } from '@mui/material';
import LoadingGIF from '@assets/loading.gif';

const Loading = () => {
  return (
    <S.Wrapper>
      <Box sx={{ display: 'flex' }}>
        {/* <CircularProgress /> */}
        <img src={LoadingGIF} />
      </Box>
    </S.Wrapper>
  );
};

export default Loading;
