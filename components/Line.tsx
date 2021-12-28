interface LineProps {
  from: [number, number];
  to: [number, number];
}

const Line = ({ from, to }: LineProps) => {
  return (
    <svg
      height="210"
      width="500"
      className="absolute top-0 left-0 h-full w-full stroke-[3px] stroke-[hsl(259,43%,25%)]"
    >
      <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />
    </svg>
  );
};

export default Line;
