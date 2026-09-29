type SuccessIconProps = {
  width?: number | string;
  height?: number | string;
};

const SuccessIcon = ({ width = 80, height = 80 }: SuccessIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="20" fill="#EAF5EE" />
      <circle cx="20" cy="20" r="7" fill="#34A853" />
      <path
        d="M17 20L19.2 22.2L23.5 17.8"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SuccessIcon;
