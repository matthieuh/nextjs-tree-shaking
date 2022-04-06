import { ColorInfo } from '../../utils/getPrimaryColorInfo';

export namespace Theme {
  type Colors = {
    componentColor: string;
  };

  type Factory = (primaryColor: ColorInfo) => Colors;

  export const getLight: Factory = (primaryColor) => ({
    componentColor: 'black',
    mainColor: primaryColor.value,
  });

  export const getDark: Factory = (primaryColor) => ({
    componentColor: 'white',
    mainColor: primaryColor.value,
  });
}
