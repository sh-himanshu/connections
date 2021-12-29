interface LineProps {
  from: [number, number];
  to: [number, number];
}

interface SvgProps {
  children: React.ReactNode;
}

const Line = ({ from, to }: LineProps) => {
  if (!from || !to) return <></>;
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />;
};

export const Svg = ({ children }: SvgProps) => (
  <svg
    height="210"
    width="500"
    className="absolute top-0 left-0 h-full w-full stroke-[3px] stroke-[hsl(259,43%,25%)]"
  >
    {children}
  </svg>
);

export default Line;
