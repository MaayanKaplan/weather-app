type BreakPoints = {
  desktop: string;
  tablet: string;
  mobile: string;
};

const deviceSize: BreakPoints = {
  desktop: `(min-width:1920px)`,
  tablet: `(min-width:1280px) and (max-width:1919px)`,
  mobile: `(max-width:1279px)`,
};

export default deviceSize;
