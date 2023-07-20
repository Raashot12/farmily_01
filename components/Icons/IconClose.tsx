const IconClose = ({
  fill = "white",
  stroke = "#141414",
  size = 48,
  onclick,
}: {
  fill?: string
  stroke?: string
  size?: number
  onclick?: () => void
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onclick}
  >
    <rect width={48} height={48} rx={24} fill={fill} />
    <path
      d="M12.3335 12.3333L35.6668 35.6667M12.3335 35.6666L24.0002 24L35.6669 12.3333"
      stroke={stroke}
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </svg>
)
export default IconClose
