type LogoIconProps = {
  width?: number | string;
  height?: number | string;
  size?: number | string;
  className?: string;
};

const SecondaryLogoIcon = ({ width, height, size, className }: LogoIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size ?? 48}
      height={height ?? size ?? 40}
      viewBox="0 0 200 160"
      role="img"
      aria-label="Expense Tracker logo"
      className={className}
    >
      {/* Green */}
      <rect x="30" y="84" width="24" height="58" rx="12" fill="#2DA44E" />
      <circle cx="42" cy="96" r="5" fill="#FFFFFF" />

      {/* Yellow */}
      <rect x="75" y="60" width="24" height="82" rx="12" fill="#F7B900" />
      <circle cx="87" cy="72" r="5" fill="#FFFFFF" />

      {/* Red */}
      <rect x="120" y="36" width="24" height="106" rx="12" fill="#EF3E36" />
      <circle cx="132" cy="48" r="5" fill="#FFFFFF" />

      {/* Blue */}
      <rect x="165" y="12" width="24" height="130" rx="12" fill="#3B82F6" />
      <circle cx="177" cy="24" r="5" fill="#FFFFFF" />
    </svg>
  );
};

export default SecondaryLogoIcon;