import * as React from "react"

const Curly = ({full = true}: {full: boolean}) => {
  if (full) {
    return (
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 23.0017C0 23.0017 219.5 60.5017 385.5 66.5017C551.5 72.5017 811.5 37.5017 961 10.0017C1110.5 -17.4983 1440 23.0017 1440 23.0017V129.002H0V23.0017Z"
          fill="#346D4D"
        />
      </svg>
    )
  }
  return (
    <svg
      width="100%"
      height={"auto"}
      viewBox="0 0 379 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3)">
        <path
          d="M0 0C78.1892 19.5838 67.2258 30.5126 183.166 8.89755C299.106 -12.7176 309.773 31.1769 379.972 19.0215V645H0V0Z"
          fill="#346D4D"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect width={379} height={51} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Curly
