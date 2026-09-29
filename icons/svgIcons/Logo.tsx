type LogoIconProps = {
  width?: number | string;
  height?: number | string;
  size?: number | string;
  className?: string;
};

const LogoIcon = ({ width, height, size, className }: LogoIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size ?? 674}
      height={height ?? (size ? undefined : 241)}
      viewBox="0 0 674 241"
      role="img"
      aria-label="Expense Tracker"
      className={className}
    >
      <rect x="61" y="126" width="21" height="56" rx="10.5" fill="#3B82F6" />
      <circle cx="71.5" cy="137" r="5.4" fill="#FFFFFF" />

      <rect x="91" y="106" width="20" height="76" rx="10" fill="#EF3E36" />
      <circle cx="101" cy="117" r="5.4" fill="#FFFFFF" />

      <rect x="120" y="88" width="21" height="94" rx="10.5" fill="#F7B900" />
      <circle cx="130.5" cy="99" r="5.4" fill="#FFFFFF" />

      <rect x="150" y="70" width="21" height="112" rx="10.5" fill="#2DA44E" />
      <circle cx="160.5" cy="82" r="5.5" fill="#FFFFFF" />

      <text
        x="201"
        y="134"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="49"
        fontWeight="800"
        letterSpacing="-1.8"
        fill="#202124"
      >
        Expense
      </text>

      <text
        x="402"
        y="134"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="49"
        fontWeight="400"
        letterSpacing="-1.7"
        fill="#62666A"
      >
        Tracker
      </text>

      <path
        d="M206 155 H284"
        stroke="#3B82F6"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M295 155 H330"
        stroke="#EF3E36"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M343 155 H377"
        stroke="#F7B900"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M390 155 H449"
        stroke="#2DA44E"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LogoIcon;
