import { DefaultTheme } from 'styled-components';
import { COLOR } from '@styles/themes/colors';
import { PALETTE } from '@styles/themes/palette';
import { FONT_SIZE } from '@styles/themes/font_size';

export type Color_type = typeof COLOR;
export type Palette_type = typeof PALETTE;
export type Font_size_type = typeof FONT_SIZE;

export const theme: DefaultTheme = {
  COLOR,
  PALETTE,
  FONT_SIZE,
} as const;
