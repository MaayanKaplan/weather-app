type BreakPoints = {
  desktop: string;
  tablet: string;
  mobile: string;
};

const deviceSize: BreakPoints = {
  desktop: `(min-width:1526px)`,
  tablet: `(min-width:900px) and (max-width:1525px)`,
  mobile: `(max-width:899px)`,
};

export default deviceSize;
