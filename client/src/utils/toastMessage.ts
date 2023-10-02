import toast from 'react-hot-toast';
import { theme } from '@styles/theme/theme';

type toastColorMessageProps = {
  /**
     보여줄 메시지를 입력해주세요
     */
  message: string;
  /**
   * 토스트 메시지의 배경색상을 입력해주세요
   */
  background: string;
  /**
   * 토스트 메시지의 글작색상을 입력해주세요
   */
  color: string;
};

export const toastColorMessage = (props: toastColorMessageProps) => {
  const { message, background, color } = props;
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
      background: background,
      color: color,
    },
  });
};
