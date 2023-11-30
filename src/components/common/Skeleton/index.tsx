import { theme } from '@/styles';
import { Skeleton, SxProps, Theme } from '@mui/material';

type KSeletonType = {
  width: string | number;
  height: string | number;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pulse' | 'wave' | false;
  sx?: SxProps<Theme>;
};

export const KSkeleton = (props: KSeletonType) => {
  const { width, height, variant, animation, sx } = props;
  return (
    <Skeleton
      width={width}
      height={height}
      variant={variant}
      animation={animation}
      sx={{ bgcolor: theme.COLOR['gray-3'], ...sx }}
    />
  );
};
