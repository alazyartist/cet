import * as React from "react";
const TelegramLogo = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    width={1000}
    height={1000}
    {...props}
  >
    <title>{"Artboard"}</title>
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.258%">
        <stop offset="0%" stopColor="#2AABEE" />
        <stop offset="100%" stopColor="#229ED9" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={500} cy={500} r={500} fill="url(#a)" />
      <path
        fill="#FFF"
        d="M226.328 494.722c145.76-63.505 242.957-105.372 291.59-125.6 138.855-57.755 167.707-67.787 186.513-68.118 4.137-.073 13.385.952 19.375 5.813 5.059 4.104 6.45 9.649 7.117 13.54.666 3.892 1.495 12.757.836 19.684-7.525 79.061-40.084 270.924-56.648 359.474-7.009 37.47-20.81 50.033-34.17 51.262-29.036 2.672-51.085-19.189-79.208-37.624-44.006-28.847-68.867-46.804-111.583-74.953-49.366-32.531-17.364-50.411 10.77-79.631C468.281 550.92 596.214 434.556 598.69 424c.31-1.32.597-6.241-2.326-8.84-2.924-2.598-7.239-1.71-10.353-1.003-4.413 1.002-74.714 47.468-210.902 139.4-19.955 13.702-38.03 20.378-54.223 20.028-17.853-.386-52.194-10.094-77.723-18.393-31.313-10.178-56.2-15.56-54.032-32.846 1.128-9.003 13.527-18.211 37.196-27.624Z"
      />
    </g>
  </svg>
);
export default TelegramLogo;
