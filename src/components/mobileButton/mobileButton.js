import React from 'react';
import './mobileButton.css';

const MobileButton = ({onButtonClick}) => 
    <svg onClick={onButtonClick} className="MobileButton" viewBox="-649 2332 588 588">
        <circle id="Oval-8" stroke="#979797" strokeWidth="1" fill="#272727" fillRule="evenodd" cx="-355" cy="2626" r="293"></circle>
        <g id="hand-holding-a-mobile-phone" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-367.000000, 2635.500000) scale(-1, 1) translate(367.000000, -2635.500000) translate(-582.000000, 2434.000000)">
            <g id="Capa_1" fillRule="nonzero" fill="#FFFFFF">
                <g id="Group">
                    <path d="M400.061,64.791 C396.216,64.791 393.093,61.251 393.093,56.89 L393.093,24.375 C393.093,11.307 382.445,0.658 369.379,0.658 L222.504,0.658 C209.436,0.658 198.784,11.306 198.784,24.375 L198.784,52.657 C198.784,57.016 195.255,61 191.058,62.183 C171.175,67.825 159.966,82.772 154.624,93.001 C152.603,96.873 147.982,100.974 143.841,102.34 C127.251,107.829 111.57,118.66 103.196,130.786 L34.07,230.858 C22.433,247.721 9.777,274.645 5.874,290.864 L0.273,314.106 C-0.745,318.351 1.167,322.449 4.549,323.261 C7.928,324.073 11.501,321.296 12.519,317.051 L18.105,293.829 C21.723,278.849 33.524,253.819 44.427,238.037 L113.553,137.958 C123.79,123.13 146.788,111.083 164.8,111.083 L217.24,111.083 L221.879,111.083 L269.236,111.083 C279.635,111.083 288.095,119.538 288.095,129.925 L288.095,133.861 C288.095,144.256 279.64,152.718 269.236,152.718 L221.879,152.718 L217.24,152.718 L174.405,152.718 C170.936,152.718 168.111,155.536 168.111,159.014 C168.111,162.483 170.929,165.308 174.405,165.308 L190.885,165.308 C195.244,165.308 198.783,168.848 198.783,173.209 L198.783,175.121 C198.783,179.483 197.821,186.433 196.272,190.51 C173.142,251.499 100.674,260.553 97.221,260.954 C95.548,261.122 94.055,261.96 92.996,263.269 C91.945,264.58 91.47,266.23 91.653,267.9 C92.008,271.089 94.695,273.497 97.947,273.497 C97.957,273.497 98.597,273.451 98.597,273.451 C99.409,273.365 160.698,265.87 194.352,219.995 C196.934,216.476 198.782,216.999 198.782,221.361 L198.782,326.39 C198.782,333.169 201.651,339.279 206.234,343.589 C209.408,346.585 210.002,350.17 206.384,352.618 C180.598,370.071 151.834,373.696 132.446,373.696 C121.767,373.696 114.663,372.549 113.899,372.431 C112.325,372.121 110.715,372.599 109.489,373.635 C108.281,374.651 107.587,376.143 107.587,377.742 L107.587,397.136 C107.587,400.096 110.012,402.524 112.99,402.524 C115.961,402.524 118.385,400.096 118.385,397.136 L118.385,390.453 C118.385,386.761 121.142,384.004 124.555,384.131 C126.436,384.202 128.506,384.248 130.74,384.248 C154.292,384.248 190.355,379.464 220.628,355.247 C224.03,352.525 230.164,350.123 234.522,350.123 L369.363,350.123 C382.428,350.123 393.077,339.455 393.077,326.389 L393.077,259.533 C393.077,255.171 396.2,251.632 400.044,251.632 L407.011,251.632 C419.234,251.632 429.182,239.816 429.182,225.278 L429.182,223.181 C429.182,217.656 427.729,212.557 425.256,208.343 C423.053,204.574 423.053,199.872 425.256,196.105 C427.719,191.885 429.182,186.792 429.182,181.267 L429.182,179.167 C429.182,173.645 427.729,168.549 425.256,164.321 C423.058,160.553 423.053,155.846 425.256,152.078 C427.719,147.858 429.182,142.763 429.182,137.24 L429.182,135.14 C429.182,129.618 427.729,124.522 425.256,120.302 C423.053,116.534 423.053,111.835 425.256,108.074 C427.719,103.854 429.182,98.759 429.182,93.236 L429.182,91.136 C429.182,76.6 419.234,64.782 407.011,64.782 C407.037,64.791 403.919,64.791 400.061,64.791 Z M229.775,165.294 L269.236,165.294 C286.588,165.294 300.689,151.192 300.689,133.851 L300.689,129.918 C300.689,112.592 286.587,98.483 269.236,98.483 L229.775,98.483 C225.418,98.483 221.879,94.943 221.879,90.584 L221.879,51.763 C221.879,47.404 225.418,43.865 229.775,43.865 L362.102,43.865 C366.463,43.865 370.003,47.404 370.003,51.763 L370.003,296.466 C370.003,300.827 366.463,304.367 362.102,304.367 L229.775,304.367 C225.418,304.367 221.879,300.827 221.879,296.466 L221.879,173.195 C221.879,168.833 225.418,165.294 229.775,165.294 Z M369.379,340.842 L222.504,340.842 C214.546,340.842 208.067,334.347 208.067,326.385 L208.067,202.99 C208.067,198.633 207.935,195.416 207.745,195.804 C207.562,196.19 208.763,193.22 210.099,189.074 C211.703,184.056 213.021,178.748 213.994,173.132 C214.738,168.833 215.573,165.309 216.167,165.309 C216.759,165.309 217.241,168.849 217.241,173.21 L217.241,306.682 C217.241,307.961 218.274,309.012 219.554,309.012 L372.325,309.012 C373.604,309.012 374.64,307.961 374.64,306.682 L374.64,41.549 C374.64,40.269 373.604,39.218 372.325,39.218 L219.554,39.218 C218.274,39.218 217.241,40.269 217.241,41.549 L217.241,90.584 C217.241,94.943 213.702,98.483 209.34,98.483 L173.609,98.483 C169.249,98.483 167.218,95.261 169.793,91.737 C175.513,83.902 185.364,75.353 200.02,73.045 C204.326,72.367 207.896,69.79 207.896,66.512 C207.896,63.242 207.99,57.049 208.015,52.687 C208.078,42.031 208.078,24.375 208.078,24.375 C208.078,16.41 214.555,9.933 222.51,9.933 L369.385,9.933 C377.358,9.933 383.823,16.41 383.823,24.375 L383.823,326.385 C383.811,334.347 377.352,340.842 369.379,340.842 Z M407.037,240.826 L401.349,240.826 C398.206,240.826 395.662,237.287 395.662,232.925 L395.662,215.523 C395.662,211.162 398.206,207.622 401.349,207.622 L407.037,207.622 C413.308,207.622 418.407,214.6 418.407,223.182 L418.407,225.279 C418.407,233.849 413.309,240.826 407.037,240.826 Z M407.037,196.815 L401.349,196.815 C398.206,196.815 395.662,193.275 395.662,188.914 L395.662,171.497 C395.662,167.135 398.206,163.596 401.349,163.596 L407.037,163.596 C413.308,163.596 418.407,170.589 418.407,179.168 L418.407,181.268 C418.407,189.838 413.309,196.815 407.037,196.815 Z M407.037,152.797 L401.349,152.797 C398.206,152.797 395.662,149.258 395.662,144.896 L395.662,127.494 C395.662,123.132 398.206,119.593 401.349,119.593 L407.037,119.593 C413.308,119.593 418.407,126.571 418.407,135.15 L418.407,137.25 C418.407,145.82 413.309,152.797 407.037,152.797 Z M407.037,108.794 L401.349,108.794 C398.206,108.794 395.662,105.254 395.662,100.893 L395.662,83.475 C395.662,79.113 398.206,75.574 401.349,75.574 L407.037,75.574 C413.308,75.574 418.407,82.567 418.407,91.146 L418.407,93.248 C418.407,101.816 413.309,108.794 407.037,108.794 Z" id="Shape"></path>
                <path d="M308.981,20.473 L282.906,20.473 C281.632,20.473 280.591,21.506 280.591,22.785 C280.591,24.065 281.632,25.116 282.906,25.116 L308.981,25.116 C310.26,25.116 311.296,24.065 311.296,22.785 C311.297,21.506 310.261,20.473 308.981,20.473 Z" id="Shape"></path>
                <path d="M309.296,314.294 L282.586,314.294 C277.112,314.294 272.634,318.753 272.634,324.232 L272.634,325.822 C272.634,331.297 277.108,335.775 282.586,335.775 L309.296,335.775 C314.775,335.775 319.254,331.306 319.254,325.822 L319.254,324.232 C319.244,318.758 314.775,314.294 309.296,314.294 Z M314.598,325.821 C314.598,328.751 312.222,331.133 309.291,331.133 L282.581,331.133 C279.656,331.133 277.269,328.751 277.269,325.821 L277.269,324.231 C277.269,321.301 279.656,318.925 282.581,318.925 L309.291,318.925 C312.222,318.925 314.598,321.301 314.598,324.231 L314.598,325.821 Z" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>
export default MobileButton;
