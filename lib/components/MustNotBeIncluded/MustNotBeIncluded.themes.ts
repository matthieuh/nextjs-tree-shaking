export namespace Theme {
  type Colors = {
    componentColor: string;
  };

  type Factory = () => Colors;

  export const getLight: Factory = () => ({
    componentColor: 'black'
  });

  export const getDark: Factory = () => ({
    componentColor: 'white'
  });
}
