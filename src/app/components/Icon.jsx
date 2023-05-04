import React from "react";

function Icon({ icon, global, menu, className, logo, close, onClick }) {
  return (
    <section>
      {icon && (
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentFill"
          >
            <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path>
          </svg>
        </span>
      )}

      {global && (
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
              stroke-width="0.2"
            ></path>
          </svg>
        </span>
      )}

      {logo && (
        <span className={`${className}`} style={{}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="30"
            viewBox="0 0 4720 1090"
            version="1.1"
            style={{ marginTop: 8 }}
          >
            <path
              d="M 3097.472 195 C 3097.472 232.125, 3097.597 247.313, 3097.750 228.750 C 3097.902 210.188, 3097.902 179.813, 3097.750 161.250 C 3097.597 142.688, 3097.472 157.875, 3097.472 195 M 349.500 217.681 C 316.572 221.870, 286.034 236.884, 262.478 260.466 C 244.518 278.446, 231.917 298.605, 223.668 322.551 C 216.997 341.917, 215.495 351.800, 215.542 376 C 215.579 394.488, 215.902 398.971, 217.852 408 C 233.524 480.563, 289.914 530.698, 360.268 534.619 C 373.233 535.342, 393.295 533.767, 406.838 530.963 C 439.230 524.257, 471.841 505.217, 493.252 480.510 C 535.755 431.463, 544.790 362.370, 516.160 305.319 C 507.822 288.703, 499.793 277.661, 486.066 263.930 C 459.508 237.362, 429.460 222.704, 392.026 218.053 C 384.114 217.070, 356.224 216.826, 349.500 217.681 M 1810.493 539.500 C 1810.493 692.400, 1810.609 754.801, 1810.750 678.169 C 1810.891 601.537, 1810.891 476.437, 1810.750 400.169 C 1810.609 323.901, 1810.493 386.600, 1810.493 539.500 M 2777.493 539.500 C 2777.493 692.400, 2777.609 754.801, 2777.750 678.169 C 2777.891 601.537, 2777.891 476.437, 2777.750 400.169 C 2777.609 323.901, 2777.493 386.600, 2777.493 539.500 M 3208.474 333 C 3208.474 372.325, 3208.598 388.413, 3208.750 368.750 C 3208.901 349.087, 3208.901 316.913, 3208.750 297.250 C 3208.598 277.587, 3208.474 293.675, 3208.474 333 M 3097.483 517 C 3097.483 579.425, 3097.603 604.963, 3097.750 573.750 C 3097.897 542.538, 3097.897 491.463, 3097.750 460.250 C 3097.603 429.038, 3097.483 454.575, 3097.483 517 M 3209.474 744.500 C 3209.475 784.650, 3209.598 800.929, 3209.750 780.676 C 3209.901 760.423, 3209.901 727.573, 3209.750 707.676 C 3209.598 687.779, 3209.474 704.350, 3209.474 744.500 M 1962.825 874.750 C 1986.104 874.899, 2023.904 874.899, 2046.825 874.750 C 2069.746 874.600, 2050.700 874.478, 2004.500 874.478 C 1958.300 874.478, 1939.546 874.600, 1962.825 874.750"
              stroke="none"
              fill="#f8f8f8"
              fill-rule="evenodd"
            />
            <path
              d="M 349.500 0.595 C 297.264 5.677, 255.382 16.838, 214.500 36.570 C 105.605 89.128, 28.712 189.541, 7.031 307.500 C 2.429 332.536, 1.534 343.493, 1.517 375 C 1.506 394.123, 1.986 409.417, 2.803 416 C 7.649 455.062, 16.312 488.465, 30.140 521.405 C 34.084 530.801, 44.347 552.487, 45.445 553.746 C 45.563 553.882, 52.824 546.891, 61.580 538.211 C 70.336 529.530, 81.325 519.370, 86 515.631 C 136.321 475.393, 186.609 463.480, 242.776 478.493 C 247.574 479.776, 251.597 480.730, 251.716 480.613 C 251.835 480.496, 249.508 477.177, 246.544 473.238 C 226.006 445.937, 214.916 411.870, 214.891 376 C 214.880 359.181, 215.861 350.666, 219.500 336 C 226.873 306.293, 240.184 282.755, 261.958 260.925 C 295.026 227.772, 334.875 213.344, 383.308 216.989 C 407.158 218.783, 425.112 223.542, 444.500 233.207 C 488.926 255.355, 519.622 295.269, 530.128 344.551 C 532.148 354.024, 532.460 358.263, 532.441 376 C 532.418 398.438, 531.105 407.318, 525.088 425.730 C 508.645 476.048, 464.757 516.923, 413.216 529.921 C 406.275 531.671, 399.368 532.795, 384.658 534.567 C 381.995 534.888, 379.980 535.313, 380.179 535.513 C 381.091 536.425, 417.023 543.282, 430.492 545.115 C 449.681 547.725, 490.544 548.754, 508.733 547.085 C 594.981 539.167, 668.333 499.677, 732.861 426.423 C 738.713 419.780, 745.525 411.717, 748 408.505 L 752.500 402.665 752.470 374.583 C 752.439 345.520, 751.364 332.645, 746.869 307.500 C 738.229 259.165, 718.568 210.620, 690.370 168 C 634.421 83.437, 545.193 24.442, 445.500 6.102 C 422.100 1.797, 411.053 0.824, 382 0.512 C 366.325 0.344, 351.700 0.381, 349.500 0.595 M 1706.645 23.034 C 1670.708 28.684, 1640.885 52.325, 1630.173 83.654 C 1625.562 97.140, 1624.404 118.711, 1627.496 133.500 C 1634.460 166.809, 1659.953 192.155, 1696.074 201.681 C 1705.660 204.209, 1708.031 204.433, 1725.500 204.465 C 1740.336 204.492, 1746.091 204.113, 1751.761 202.736 C 1788.329 193.849, 1812.640 172.139, 1822.627 139.451 C 1825.137 131.236, 1825.361 129.144, 1825.352 114 C 1825.344 100.130, 1824.993 96.225, 1823.149 89.500 C 1818.936 74.142, 1811.813 61.972, 1800.839 51.383 C 1785.760 36.834, 1774.054 30.206, 1754 24.862 C 1745.368 22.562, 1716.689 21.455, 1706.645 23.034 M 2673.645 23.034 C 2659.237 25.299, 2646.179 30.200, 2634.607 37.685 C 2606.204 56.059, 2592.829 80.643, 2592.854 114.432 C 2592.872 138.951, 2600.520 158.341, 2616.874 175.337 C 2629.410 188.365, 2643.891 196.622, 2663.074 201.681 C 2672.660 204.209, 2675.031 204.433, 2692.500 204.465 C 2713.177 204.503, 2718.665 203.656, 2734.003 198.058 C 2746.867 193.363, 2757.350 186.599, 2767.474 176.460 C 2786.133 157.772, 2793.922 136.927, 2792.681 109 C 2791.589 84.417, 2783.721 66.580, 2766.862 50.461 C 2752.312 36.551, 2740.844 30.150, 2721 24.862 C 2712.368 22.562, 2683.689 21.455, 2673.645 23.034 M 3979 449.500 L 3979 816 4063 816 L 4147 816 4147 449.500 L 4147 83 4063 83 L 3979 83 3979 449.500 M 920 468.461 L 920 816 1062.750 815.995 C 1214.318 815.990, 1220.802 815.821, 1251.712 811.080 C 1322.348 800.245, 1385.548 772.168, 1434.578 729.839 C 1481.009 689.755, 1516.805 630.276, 1532.912 566.446 C 1551.235 493.837, 1547.991 408.897, 1524.284 340.500 C 1506.858 290.223, 1475.331 242.426, 1437.051 208.251 C 1389.400 165.709, 1327.297 137.359, 1258.022 126.525 C 1226.185 121.545, 1231.115 121.683, 1070.750 121.290 L 920 120.921 920 468.461 M 2927 196 L 2927 263 2893.500 263 L 2860 263 2860 333 L 2860 403 2893.437 403 L 2926.873 403 2927.304 526.750 C 2927.596 610.765, 2928.101 653.550, 2928.877 660 C 2934.381 705.753, 2947.727 738.752, 2970.440 762.774 C 2994.102 787.799, 3028.810 804.955, 3070 811.986 C 3090.531 815.491, 3101.392 816, 3155.606 816 L 3209 816 3209 744.591 L 3209 673.181 3170.750 672.751 C 3139.117 672.395, 3131.502 672.034, 3126.733 670.668 C 3110.009 665.878, 3102.019 657.384, 3098.582 640.742 C 3097.193 634.018, 3097 619.052, 3097 518.042 L 3097 403 3152.500 403 L 3208 403 3208 333 L 3208 263 3152.500 263 L 3097 263 3097 196 L 3097 129 3012 129 L 2927 129 2927 196 M 2121 256.600 C 2091.524 260.013, 2071.358 265.067, 2049.500 274.519 C 1988.921 300.717, 1942.665 352.754, 1918.686 421.682 C 1895.828 487.385, 1894.201 573.562, 1914.514 642.623 C 1928.170 689.051, 1949.385 725.480, 1981.449 757.556 C 2003.426 779.541, 2024.664 794.116, 2051.532 805.649 C 2081.705 818.601, 2108.996 823.984, 2144.500 823.984 C 2171.708 823.984, 2191.433 821.228, 2213.074 814.404 C 2249.158 803.025, 2284.947 777.480, 2307.610 746.925 C 2312.799 739.930, 2314.592 738.114, 2314.876 739.569 C 2315.083 740.631, 2315.008 763.100, 2314.709 789.500 C 2314.079 845.242, 2313.058 855.173, 2305.769 876.500 C 2294.324 909.987, 2267.850 931.859, 2228.750 940.131 C 2220.361 941.905, 2215.050 942.307, 2199.500 942.344 C 2177.665 942.396, 2166.555 940.844, 2150.329 935.474 C 2132.392 929.538, 2123.046 924.030, 2110.762 912.157 C 2101.637 903.336, 2095.897 894.906, 2091.367 883.671 L 2088.073 875.500 2004.690 875.244 L 1921.307 874.989 1922.592 884.244 C 1934.686 971.379, 1990.578 1037.292, 2079.397 1069.162 C 2101.092 1076.947, 2128.130 1083.174, 2155.500 1086.687 C 2175.894 1089.306, 2237.614 1089.297, 2257 1086.673 C 2310.354 1079.451, 2349.499 1064.148, 2387.180 1035.783 C 2414.761 1015.021, 2435.985 989.548, 2451.872 958.142 C 2466.894 928.443, 2475.375 901.319, 2481.225 864.263 L 2483.398 850.500 2483.720 556.750 L 2484.042 263 2399.533 263 L 2315.023 263 2314.762 302.250 L 2314.500 341.500 2309.795 334.455 C 2287.414 300.946, 2247.423 273.546, 2205.409 262.935 C 2186.112 258.062, 2175.488 256.852, 2149 256.510 C 2135.525 256.336, 2122.925 256.377, 2121 256.600 M 3490.500 256.684 C 3432.968 261.679, 3378.097 289.133, 3340.983 331.492 C 3317.600 358.180, 3299.368 389.993, 3288.044 423.868 C 3258.193 513.165, 3266.952 628.345, 3309.192 701.954 C 3337.944 752.059, 3377.360 787.741, 3425.736 807.458 C 3452.475 818.356, 3475.567 822.998, 3506.730 823.739 C 3548.576 824.735, 3579.586 818.439, 3610.642 802.643 C 3640.326 787.544, 3661.819 769.717, 3679.444 745.575 L 3684.500 738.650 3684.762 777.325 L 3685.023 816 3769.512 816 L 3854 816 3854 539.500 L 3854 263 3769.500 263 L 3685 263 3684.955 302.250 C 3684.916 337.076, 3684.745 341.275, 3683.437 339.500 C 3682.626 338.400, 3679.200 333.675, 3675.822 329 C 3660.089 307.222, 3637.758 289.201, 3609.500 275.479 C 3589.023 265.536, 3566.839 259.521, 3541.576 257.063 C 3531.564 256.089, 3500.047 255.855, 3490.500 256.684 M 4450 257.034 C 4410.250 260.711, 4380.331 268.565, 4353.197 282.444 C 4300.453 309.423, 4269.088 350.045, 4261.398 401.334 C 4259.826 411.817, 4259.331 437.399, 4260.501 447.685 C 4263.484 473.916, 4271.260 495.256, 4283.985 512.135 C 4298.187 530.972, 4326.223 552.068, 4352.395 563.610 C 4370.362 571.534, 4407.866 582.847, 4451.031 593.364 C 4535.677 613.988, 4556.123 624.448, 4560.104 649.164 C 4562.018 661.048, 4558.345 672.273, 4549.373 681.964 C 4540.193 691.880, 4527.427 696.980, 4506.250 699.193 C 4478.721 702.070, 4451.106 694.665, 4432.678 679.464 C 4419.045 668.219, 4412.364 656.683, 4408.520 637.750 L 4407.962 635 4324.671 635 L 4241.381 635 4242.181 642.750 C 4244.788 667.992, 4254.132 694.764, 4268.321 717.645 C 4276.354 730.601, 4282.131 738.030, 4292.910 749.268 C 4312.571 769.766, 4335.114 785.012, 4366 798.702 C 4406.689 816.738, 4444.271 824.005, 4496.804 823.997 C 4545.499 823.989, 4579.256 817.559, 4617.467 801.013 C 4641.762 790.492, 4659.245 778.806, 4676.536 761.527 C 4698.489 739.591, 4710.516 717.817, 4717.150 688 C 4719.183 678.864, 4719.485 674.838, 4719.478 657 C 4719.468 628.403, 4715.914 610.152, 4706.468 590.180 C 4699.864 576.216, 4693.738 567.733, 4681.008 554.925 C 4664.521 538.335, 4649.378 527.325, 4631.413 518.865 C 4609.956 508.760, 4567.726 495.398, 4518 482.979 C 4460.610 468.647, 4440.231 461.029, 4428.516 449.533 C 4416.536 437.775, 4413.839 420.324, 4421.748 405.739 C 4425.033 399.682, 4433.178 391.957, 4439.840 388.581 C 4458.458 379.147, 4497.448 378.997, 4519.500 388.276 C 4534.544 394.607, 4546.295 405.701, 4553.590 420.462 C 4556.047 425.433, 4558.646 432.425, 4559.366 436 L 4560.675 442.500 4638.976 442.756 L 4717.277 443.012 4716.607 437.256 C 4714.073 415.499, 4706.374 389.336, 4696.667 369.500 C 4669.804 314.605, 4621.692 277.694, 4558.542 263.531 C 4534.553 258.150, 4521.751 256.844, 4489.500 256.487 C 4473 256.304, 4455.225 256.550, 4450 257.034 M 1641 539.500 L 1641 816 1725.500 816 L 1810 816 1810 539.500 L 1810 263 1725.500 263 L 1641 263 1641 539.500 M 2608 539.500 L 2608 816 2692.500 816 L 2777 816 2777 539.500 L 2777 263 2692.500 263 L 2608 263 2608 539.500 M 1088.462 265.250 C 1088.201 265.938, 1088.102 357.175, 1088.244 468 L 1088.500 669.500 1131 669.803 C 1176.074 670.124, 1198.553 669.134, 1217.880 665.977 C 1261.369 658.872, 1295.913 641.718, 1322.232 614.156 C 1349.506 585.596, 1365.079 550.208, 1371.150 503 C 1373.146 487.479, 1372.842 445.791, 1370.622 430.500 C 1363.250 379.722, 1344.768 341.873, 1313.275 313.066 C 1281.626 284.116, 1242.520 268.942, 1189.500 265.039 C 1168.468 263.490, 1089.068 263.656, 1088.462 265.250 M 2184 402.654 C 2152.736 405.632, 2129.189 417.189, 2107.551 440.175 C 2089.534 459.314, 2079.591 479.712, 2074.245 508.500 C 2071.927 520.988, 2071.938 555.690, 2074.265 569.012 C 2079.654 599.858, 2090.533 621.543, 2110.952 642.139 C 2122.674 653.962, 2134.515 662.294, 2147.201 667.644 C 2173.309 678.655, 2205.123 679.722, 2232.574 670.507 C 2260.124 661.259, 2286.236 638.203, 2299.971 611 C 2316.609 578.045, 2319.382 523.281, 2306.382 484.396 C 2296.154 453.805, 2273.576 428.077, 2244.566 413.956 C 2226.520 405.172, 2203.215 400.823, 2184 402.654 M 3549.928 403.070 C 3510.069 407.302, 3474.303 433.338, 3455.927 471.500 C 3435.916 513.058, 3437.847 576.643, 3460.301 615.500 C 3475.256 641.380, 3498.690 661.392, 3524.627 670.431 C 3537.238 674.827, 3546.507 676.279, 3562.500 676.364 C 3584.944 676.484, 3600.056 673.134, 3617.481 664.176 C 3644.660 650.204, 3666.824 624.418, 3676.545 595.462 C 3685.406 569.065, 3687.174 530.739, 3680.925 500.500 C 3669.935 447.319, 3628.164 408.517, 3576 403.033 C 3565.302 401.909, 3560.806 401.915, 3549.928 403.070 M 720.086 527.768 C 704.945 562.163, 681.930 597.276, 652.416 631.013 C 641.398 643.608, 635.175 649.325, 618.500 662.175 C 578.204 693.228, 531.305 717.681, 483.951 732.326 C 422.988 751.180, 357.974 754.730, 297.766 742.493 C 291.096 741.137, 285.420 740.246, 285.153 740.514 C 284.885 740.781, 285.417 741, 286.333 741 C 287.250 741, 288 741.421, 288 741.935 C 288 742.450, 257.384 782.116, 219.965 830.081 C 182.546 878.047, 152.064 917.691, 152.227 918.180 C 152.390 918.669, 191.218 949.410, 238.511 986.493 C 319.063 1049.655, 324.604 1053.810, 326.144 1052.209 C 327.048 1051.269, 390.694 969.725, 467.581 871 C 544.467 772.275, 621.578 673.322, 638.937 651.104 C 686.426 590.325, 687.508 588.863, 698.804 570.252 C 709.320 552.926, 725.972 519.638, 724.739 518.406 C 724.536 518.203, 722.442 522.416, 720.086 527.768"
              stroke="none"
              fill="#0b1317"
              fill-rule="evenodd"
            />
          </svg>
        </span>
      )}

      {close && (
        <button
          aria-label="button"
          className={`${className}`}
          style={{ transition: "all 0s ease 0s" }}
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        </button>
      )}

      {menu && (
        <button
          aria-label="button"
          className={`${className}`}
          style={{ transition: "all 0s ease 0s" }}
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="19"
            viewBox="0 0 23 19"
          >
            <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
            <rect width="23" height="3" rx="1.5" fill="#555"></rect>
            <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
          </svg>
        </button>
      )}
    </section>
  );
}

export default Icon;
