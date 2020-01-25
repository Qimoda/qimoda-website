import React, { Fragment } from "react"
var classNames = require("classnames")

const Logo = ({ hideHeading = false }) => (
  <div className={classNames("logo", { "hide-heading": hideHeading })}>
    {!hideHeading && <h1>QIMODA</h1>}
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 193.000000 410.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,410.000000) scale(0.100000,-0.100000)"
        fill="#036c72"
        stroke="none"
      >
        <path
          d="M1290 4093 c-14 -2 -232 -31 -485 -64 -253 -33 -464 -64 -468 -69
    -13 -12 -339 -2189 -333 -2216 9 -33 20 -32 369 27 262 45 301 49 314 36 13
    -12 -15 -121 -222 -882 -130 -477 -235 -880 -233 -894 5 -39 49 -41 76 -4 18
    26 280 480 1087 1883 191 333 390 678 441 767 52 90 94 174 94 188 0 49 28 52
    -550 -61 -179 -35 -335 -64 -346 -64 -12 0 -24 6 -27 14 -3 7 91 305 208 661
    166 502 212 652 204 666 -10 19 -60 23 -129 12z"
        />
      </g>
    </svg>
  </div>
)

export default Logo
