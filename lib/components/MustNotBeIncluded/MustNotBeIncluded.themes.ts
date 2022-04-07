import tinycolor from 'tinycolor2';

import { ColorInfo } from '../../utils/getPrimaryColorInfo';

export namespace Theme {
  type Colors = {
    componentColor: string;
  };

  type Factory = (primaryColor: ColorInfo) => Colors;

  export const getLight: Factory = (primaryColor) => ({
    componentColor: 'black',
    mainColor: primaryColor.value,
    fromTinyColor: tinycolor('black').setAlpha(0.51).toHslString(),
  });

  export const getDark: Factory = (primaryColor) => ({
    componentColor: 'white',
    mainColor: primaryColor.value,
    fromTinyColor: tinycolor('white').setAlpha(0.51).toHslString(),
  });
}
