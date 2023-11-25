import toast from 'react-hot-toast';
import { theme } from '@/styles';

export const toastColorMessage = (message: string) => {
  toast(message, {
    style: {
      fontFamily: theme.FONT_FAMILY.Pretendard,
      fontSize: theme.TEXT_SIZE['text-12'],
      fontWeight: theme.FONT_WEIGHT['WEIGHT-400'],
      lineHeight: '140%',
      textAlign: 'center',
      display: 'flex',
      width: '326px',
      height: '48px',
      gap: '16px',
      justifyContent: 'center',
      borderRadius: '5px',
      background: theme.COLOR['gray-5'],
      color: theme.COLOR.white,
    },
  });
};
