<script setup>
import { computed, ref } from "vue";
import Title from "../components/Title.vue";
import SuitIcon from "../assets/svg/suit.svg";

import { useAppStore } from "../store/store";
import TerminalNavbar from "./TerminalNavbar.vue";

import Amira from "../assets/images/amira.png";
import Feriel from "../assets/images/feriel.png";
import Abdou from "../assets/images/abdou.png";

const svgRef = ref();
const isHovered = ref(false);

const appStore = useAppStore();
const terminalMode = computed(() => appStore.terminalMode);
</script>

<template>
    <section id="bureau" class="section">
        <Title
            class="title"
            :text="terminalMode ? '>Our Board_' : ''"
            number="7"
            color="#3173BB"
        ></Title>
        <p class="description"></p>
        <TerminalNavbar v-if="terminalMode" color="#3173BB" />
        <div class="oval">
            <svg
                width="894"
                height="757"
                viewBox="0 0 894 757"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_492_2165)">
                    <path
                        d="M470.651 554.986C561.723 545.891 621.476 499.622 680.074 392.817C798.785 176.451 115.488 115.318 208.889 350.661C267.781 499.05 354.323 566.602 470.651 554.986Z"
                        fill="#3173BB"
                        fill-opacity="0.2"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_492_2165"
                        x="0.0859375"
                        y="0.159668"
                        width="893.891"
                        height="756.104"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_492_2165"
                        />
                    </filter>
                </defs>
            </svg>
        </div>

        <div
            ref="svgRef"
            class="svg-container d-flex fl-j-c fl-a-c"
            :class="{ 'is-hovered': isHovered }"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
        >
            <div class="title-container d-flex fl-col fl-a-c">
                <p>{{ $t("meet") }}</p>
                <h1 class="title">{{ $t("title-bureau") }}</h1>
                <img class="icon" :src="SuitIcon" alt="" srcset="" />
            </div>

            <div class="card-wrapper member1">
                <div class="card-border-glow"></div>
                <div class="card">
                    <div class="card-shimmer"></div>
                    <h2>Feriel Belkacem</h2>
                    <span class="role-badge">General Secretary</span>
                </div>
            </div>

            <div class="card-wrapper member2">
                <div class="card-border-glow"></div>
                <div class="card">
                    <div class="card-shimmer"></div>
                    <h2>Amira Ziani</h2>
                    <span class="role-badge">Vice-President</span>
                </div>
            </div>

            <div class="card-wrapper member3">
                <div class="card-border-glow"></div>
                <div class="card">
                    <div class="card-shimmer"></div>
                    <h2>Abdelmoumen Daira</h2>
                    <span class="role-badge">President</span>
                </div>
            </div>

            <svg
                width="100%"
                viewBox="0 0 1282 473"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="members-svg"
            >
                <defs>
                    <!-- Glow filter for the traveling light -->
                    <filter id="glow-light" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur1" />
                        <feGaussianBlur stdDeviation="8" result="blur2" />
                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <!-- Wider glow for the path highlight -->
                    <filter id="path-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <!-- Radial gradient for the light orb -->
                    <radialGradient id="orb-gradient">
                        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
                        <stop offset="30%" stop-color="#7fadf4" stop-opacity="0.9" />
                        <stop offset="70%" stop-color="#3173BB" stop-opacity="0.4" />
                        <stop offset="100%" stop-color="#3173BB" stop-opacity="0" />
                    </radialGradient>

                    <!-- Avatar glow filter (soft blue halo) -->
                    <filter id="avatar-glow" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="6" result="blur1" />
                        <feGaussianBlur stdDeviation="12" result="blur2" />
                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <!-- Spark/particle glow -->
                    <filter id="spark-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <!-- Animated rotating ring gradient -->
                    <linearGradient id="ring-gradient-1" gradientUnits="userSpaceOnUse" x1="164" y1="0" x2="246" y2="81">
                        <stop offset="0%" stop-color="#7fadf4" stop-opacity="1" />
                        <stop offset="40%" stop-color="#3173BB" stop-opacity="0.3" />
                        <stop offset="60%" stop-color="transparent" stop-opacity="0" />
                        <stop offset="100%" stop-color="#7fadf4" stop-opacity="0.8" />
                    </linearGradient>
                    <linearGradient id="ring-gradient-2" gradientUnits="userSpaceOnUse" x1="600" y1="350" x2="681" y2="431">
                        <stop offset="0%" stop-color="#7fadf4" stop-opacity="1" />
                        <stop offset="40%" stop-color="#3173BB" stop-opacity="0.3" />
                        <stop offset="60%" stop-color="transparent" stop-opacity="0" />
                        <stop offset="100%" stop-color="#7fadf4" stop-opacity="0.8" />
                    </linearGradient>
                    <linearGradient id="ring-gradient-3" gradientUnits="userSpaceOnUse" x1="901" y1="50" x2="983" y2="131">
                        <stop offset="0%" stop-color="#7fadf4" stop-opacity="1" />
                        <stop offset="40%" stop-color="#3173BB" stop-opacity="0.3" />
                        <stop offset="60%" stop-color="transparent" stop-opacity="0" />
                        <stop offset="100%" stop-color="#7fadf4" stop-opacity="0.8" />
                    </linearGradient>
                </defs>

                <!-- Base paths (dim circuit lines) -->
                <path
                    d="M203.178 79.0636C203.178 79.0636 200.578 148.374 205.56 157.571C210.542 166.769 221.939 178.154 223.495 178.5C228 179.5 258 177 268 178.5C278 180 285.5 189 289.684 198.812C293.867 208.624 295.286 224 295.286 224M295.655 250.338C295.655 250.338 299.973 272.716 312.594 278.081C325.215 283.446 331.193 282.68 331.193 282.68H483.643C483.643 282.68 603.171 283.85 604.5 285C605.829 286.15 614.172 284.979 624.468 299.159C634.764 313.339 634.764 342.082 634.764 342.082M634.764 342.082V408M634.764 342.082C634.764 342.082 639.746 319.471 648.381 312.19C657.017 304.908 676.613 306.824 676.613 306.824H774.592H828.564H882.536H925.712C925.712 306.824 942.984 304.141 958.594 291.495C974.204 278.848 974.204 256.62 974.204 256.62M974.204 264V220.255V192.273M1026.68 73.5577C1026.68 73.5577 1027.35 86.636 1024.02 97.75C1020.7 108.864 1005.42 115.445 1005.42 115.445C1005.42 115.445 984.168 130.242 980.182 135.99C976.197 141.739 974.204 162.62 974.204 162.62V192.273M974.204 192.273C974.204 192.273 960.406 192.247 952.948 187.674C943.43 181.839 940.326 179.626 935.344 163.147C930.362 146.668 932.023 130.955 932.023 130.955V15M295.909 251.5L295.224 223.39"
                    stroke="#4A4954"
                    stroke-width="3"
                    class="base-path"
                />
                <path
                    d="M864.5 306C864.5 306 866.439 324.339 868.378 328.631C870.317 332.924 874.97 339.167 878.848 341.898C882.726 344.63 893.584 349.702 893.584 349.702C893.584 349.702 895.135 350.873 901.34 351.653C907.545 352.434 921.117 351.653 921.117 351.653H986.266H1061.89H1252.29H1315.5"
                    stroke="#4A4954"
                    stroke-width="3"
                    class="base-path"
                />

                <!-- Animated glow paths — light traveling along path 1 -->
                <path
                    d="M203.178 79.0636C203.178 79.0636 200.578 148.374 205.56 157.571C210.542 166.769 221.939 178.154 223.495 178.5C228 179.5 258 177 268 178.5C278 180 285.5 189 289.684 198.812C293.867 208.624 295.286 224 295.286 224M295.655 250.338C295.655 250.338 299.973 272.716 312.594 278.081C325.215 283.446 331.193 282.68 331.193 282.68H483.643C483.643 282.68 603.171 283.85 604.5 285C605.829 286.15 614.172 284.979 624.468 299.159C634.764 313.339 634.764 342.082 634.764 342.082M634.764 342.082V408M634.764 342.082C634.764 342.082 639.746 319.471 648.381 312.19C657.017 304.908 676.613 306.824 676.613 306.824H774.592H828.564H882.536H925.712C925.712 306.824 942.984 304.141 958.594 291.495C974.204 278.848 974.204 256.62 974.204 256.62M974.204 264V220.255V192.273M1026.68 73.5577C1026.68 73.5577 1027.35 86.636 1024.02 97.75C1020.7 108.864 1005.42 115.445 1005.42 115.445C1005.42 115.445 984.168 130.242 980.182 135.99C976.197 141.739 974.204 162.62 974.204 162.62V192.273M974.204 192.273C974.204 192.273 960.406 192.247 952.948 187.674C943.43 181.839 940.326 179.626 935.344 163.147C930.362 146.668 932.023 130.955 932.023 130.955V15M295.909 251.5L295.224 223.39"
                    stroke="#7fadf4"
                    stroke-width="3"
                    filter="url(#path-glow)"
                    class="glow-path glow-path-1"
                />

                <!-- Animated glow path 2 (branch) -->
                <path
                    d="M864.5 306C864.5 306 866.439 324.339 868.378 328.631C870.317 332.924 874.97 339.167 878.848 341.898C882.726 344.63 893.584 349.702 893.584 349.702C893.584 349.702 895.135 350.873 901.34 351.653C907.545 352.434 921.117 351.653 921.117 351.653H986.266H1061.89H1252.29H1315.5"
                    stroke="#7fadf4"
                    stroke-width="3"
                    filter="url(#path-glow)"
                    class="glow-path glow-path-2"
                />

                <!-- Traveling light orb on path 1 -->
                <circle r="6" fill="url(#orb-gradient)" filter="url(#glow-light)" class="light-orb">
                    <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        path="M203.178 79.0636C203.178 79.0636 200.578 148.374 205.56 157.571C210.542 166.769 221.939 178.154 223.495 178.5C228 179.5 258 177 268 178.5C278 180 285.5 189 289.684 198.812C293.867 208.624 295.286 224 295.286 224 295.655 250.338 299.973 272.716 312.594 278.081C325.215 283.446 331.193 282.68 331.193 282.68H483.643C483.643 282.68 603.171 283.85 604.5 285C605.829 286.15 614.172 284.979 624.468 299.159C634.764 313.339 634.764 342.082 634.764 342.082 634.764 342.082 639.746 319.471 648.381 312.19C657.017 304.908 676.613 306.824 676.613 306.824H774.592H828.564H882.536H925.712C925.712 306.824 942.984 304.141 958.594 291.495C974.204 278.848 974.204 256.62 974.204 256.62 974.204 264 974.204 220.255 974.204 192.273 1026.68 73.5577 1027.35 86.636 1024.02 97.75C1020.7 108.864 1005.42 115.445 1005.42 115.445C1005.42 115.445 984.168 130.242 980.182 135.99C976.197 141.739 974.204 162.62 974.204 162.62"
                    />
                </circle>

                <!-- Traveling light orb on path 2 -->
                <circle r="5" fill="url(#orb-gradient)" filter="url(#glow-light)" class="light-orb light-orb-2">
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M864.5 306C864.5 306 866.439 324.339 868.378 328.631C870.317 332.924 874.97 339.167 878.848 341.898C882.726 344.63 893.584 349.702 893.584 349.702C893.584 349.702 895.135 350.873 901.34 351.653C907.545 352.434 921.117 351.653 921.117 351.653H986.266H1061.89H1252.29H1315.5"
                    />
                </circle>

                <!-- Second orb on path 1, offset timing for more life -->
                <circle r="4" fill="url(#orb-gradient)" filter="url(#glow-light)" class="light-orb light-orb-3">
                    <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        begin="3s"
                        path="M203.178 79.0636C203.178 79.0636 200.578 148.374 205.56 157.571C210.542 166.769 221.939 178.154 223.495 178.5C228 179.5 258 177 268 178.5C278 180 285.5 189 289.684 198.812C293.867 208.624 295.286 224 295.286 224 295.655 250.338 299.973 272.716 312.594 278.081C325.215 283.446 331.193 282.68 331.193 282.68H483.643C483.643 282.68 603.171 283.85 604.5 285C605.829 286.15 614.172 284.979 624.468 299.159C634.764 313.339 634.764 342.082 634.764 342.082 634.764 342.082 639.746 319.471 648.381 312.19C657.017 304.908 676.613 306.824 676.613 306.824H774.592H828.564H882.536H925.712C925.712 306.824 942.984 304.141 958.594 291.495C974.204 278.848 974.204 256.62 974.204 256.62 974.204 264 974.204 220.255 974.204 192.273 1026.68 73.5577 1027.35 86.636 1024.02 97.75C1020.7 108.864 1005.42 115.445 1005.42 115.445C1005.42 115.445 984.168 130.242 980.182 135.99C976.197 141.739 974.204 162.62 974.204 162.62"
                    />
                </circle>

                <!-- Connector circles (nodes) -->
                <circle
                    cx="18"
                    cy="18"
                    r="16.5"
                    transform="matrix(-1 0 0 1 250.5 155)"
                    fill="#1D1C29"
                    stroke="#4A4954"
                    stroke-width="3"
                    class="node-circle"
                />
                <path
                    d="M235.875 165.312C235.875 164.588 235.287 164 234.562 164H230.438C229.713 164 229.125 164.588 229.125 165.312V167H225.562C224.838 167 224.25 167.588 224.25 168.312V179.188C224.25 179.536 224.388 179.869 224.634 180.116C224.881 180.362 225.214 180.5 225.562 180.5H239.438C239.786 180.5 240.119 180.362 240.366 180.116C240.612 179.869 240.75 179.536 240.75 179.188V168.312C240.75 167.588 240.162 167 239.438 167H235.875V165.312ZM239.625 172.993V179.188C239.625 179.291 239.541 179.375 239.438 179.375H225.562C225.513 179.375 225.465 179.355 225.43 179.32C225.395 179.285 225.375 179.237 225.375 179.188V172.993C225.95 173.482 226.682 173.751 227.438 173.75H237.562C238.318 173.751 239.05 173.482 239.625 172.993ZM225.375 170.562V168.312C225.375 168.263 225.395 168.215 225.43 168.18C225.465 168.145 225.513 168.125 225.562 168.125H239.438C239.487 168.125 239.535 168.145 239.57 168.18C239.605 168.215 239.625 168.263 239.625 168.312V186.562C239.625 187.11 239.408 187.634 239.021 188.021C238.634 188.408 238.11 188.625 237.562 188.625H227.438C226.89 188.625 226.366 188.408 225.979 188.021C225.592 187.634 225.375 187.11 225.375 186.562ZM230.25 165.312C230.25 165.263 230.27 165.215 230.305 165.18C230.34 165.145 230.388 165.125 230.438 165.125H234.562C234.612 165.125 234.66 165.145 234.695 165.18C234.73 165.215 234.75 165.263 234.75 165.312V167H230.25V165.312Z"
                    fill="#C4C4C4"
                />
                <circle
                    cx="18"
                    cy="18"
                    r="16.5"
                    transform="matrix(-1 0 0 1 996.5 171)"
                    fill="#1D1C29"
                    stroke="#4A4954"
                    stroke-width="3"
                    class="node-circle"
                />
                <path
                    d="M981.875 181.312C981.875 180.588 981.287 180 980.562 180H976.438C975.713 180 975.125 180.588 975.125 181.312V183H971.562C970.838 183 970.25 183.588 970.25 184.312V195.188C970.25 195.536 970.388 195.869 970.634 196.116C970.881 196.362 971.214 196.5 971.562 196.5H985.438C985.786 196.5 986.119 196.362 986.366 196.116C986.612 195.869 986.75 195.536 986.75 195.188V184.312C986.75 183.588 986.162 183 985.438 183H981.875V181.312ZM985.625 188.993V195.188C985.625 195.291 985.541 195.375 985.438 195.375H971.562C971.513 195.375 971.465 195.355 971.43 195.32C971.395 195.285 971.375 195.237 971.375 195.188V188.993C971.95 189.482 972.682 189.751 973.438 189.75H983.562C984.318 189.751 985.05 189.482 985.625 188.993ZM971.375 186.562V184.312C971.375 184.263 971.395 184.215 971.43 184.18C971.465 184.145 971.513 184.125 971.562 184.125H985.438C985.487 184.125 985.535 184.145 985.57 184.18C985.605 184.215 985.625 184.263 985.625 184.312V186.562C985.625 187.11 985.408 187.634 985.021 188.021C984.634 188.408 984.11 188.625 983.562 188.625H973.438C972.89 188.625 972.366 188.408 971.979 188.021C971.592 187.634 971.375 187.11 971.375 186.562ZM976.25 181.312C976.25 181.263 976.27 181.215 976.305 181.18C976.34 181.145 976.388 181.125 976.438 181.125H980.562C980.612 181.125 980.66 181.145 980.695 181.18C980.73 181.215 980.75 181.263 980.75 181.312V183H976.25V181.312Z"
                    fill="#C4C4C4"
                />
                <path
                    d="M362 282C362 282 360.061 300.339 358.122 304.631C356.183 308.924 351.53 315.167 347.652 317.898C343.774 320.63 332.916 325.702 332.916 325.702C332.916 325.702 331.365 326.873 325.16 327.653C318.955 328.434 305.383 327.653 305.383 327.653H240.234H164.615H-25.7902H-89"
                    stroke="#4A4954"
                    stroke-width="3"
                    class="base-path"
                />
                <!-- Glow duplicate of branch path 3 -->
                <path
                    d="M362 282C362 282 360.061 300.339 358.122 304.631C356.183 308.924 351.53 315.167 347.652 317.898C343.774 320.63 332.916 325.702 332.916 325.702C332.916 325.702 331.365 326.873 325.16 327.653C318.955 328.434 305.383 327.653 305.383 327.653H240.234H164.615H-25.7902H-89"
                    stroke="#7fadf4"
                    stroke-width="3"
                    filter="url(#path-glow)"
                    class="glow-path glow-path-3"
                />

                <!-- Traveling light orb on path 3 -->
                <circle r="5" fill="url(#orb-gradient)" filter="url(#glow-light)" class="light-orb light-orb-4">
                    <animateMotion
                        dur="4.5s"
                        repeatCount="indefinite"
                        begin="1s"
                        path="M362 282C362 282 360.061 300.339 358.122 304.631C356.183 308.924 351.53 315.167 347.652 317.898C343.774 320.63 332.916 325.702 332.916 325.702C332.916 325.702 331.365 326.873 325.16 327.653C318.955 328.434 305.383 327.653 305.383 327.653H240.234H164.615H-25.7902H-89"
                    />
                </circle>

                <!-- ======= MEMBER 1: Feriel (top-left) ======= -->
                <g class="member-group member-group-1">
                    <!-- Pulsing halo behind photo -->
                    <circle cx="205" cy="40.5" r="48" fill="none" stroke="#3173BB" stroke-width="1.5" opacity="0.3" class="avatar-halo avatar-halo-1" />
                    <circle cx="205" cy="40.5" r="55" fill="none" stroke="#3173BB" stroke-width="0.8" opacity="0.15" class="avatar-halo avatar-halo-1-outer" />

                    <!-- Animated rotating ring border -->
                    <circle cx="205" cy="40.5" r="44" fill="none" stroke="url(#ring-gradient-1)" stroke-width="2.5" class="avatar-ring avatar-ring-1"
                        stroke-dasharray="70 210"
                    />

                    <!-- The photo -->
                    <image
                        x="164.5"
                        y="0"
                        width="81"
                        height="81"
                        :xlink:href="Feriel"
                        clip-path="url(#avatar-clip-1)"
                        class="bureau-pic"
                    />
                </g>

                <!-- ======= MEMBER 2: Amira (top-right) ======= -->
                <g class="member-group member-group-2">
                    <!-- Pulsing halo -->
                    <circle cx="942" cy="90.5" r="48" fill="none" stroke="#3173BB" stroke-width="1.5" opacity="0.3" class="avatar-halo avatar-halo-2" />
                    <circle cx="942" cy="90.5" r="55" fill="none" stroke="#3173BB" stroke-width="0.8" opacity="0.15" class="avatar-halo avatar-halo-2-outer" />

                    <!-- Animated rotating ring -->
                    <circle cx="942" cy="90.5" r="44" fill="none" stroke="url(#ring-gradient-3)" stroke-width="2.5" class="avatar-ring avatar-ring-2"
                        stroke-dasharray="70 210"
                    />

                    <!-- The photo -->
                    <image
                        x="901.5"
                        y="50"
                        width="81"
                        height="81"
                        :xlink:href="Amira"
                        clip-path="url(#avatar-clip-3)"
                        class="bureau-pic"
                    />
                </g>

                <!-- ======= MEMBER 3: Abdou (bottom-center) ======= -->
                <g class="member-group member-group-3">
                    <!-- Pulsing halo -->
                    <circle cx="640.5" cy="390.5" r="48" fill="none" stroke="#3173BB" stroke-width="1.5" opacity="0.3" class="avatar-halo avatar-halo-3" />
                    <circle cx="640.5" cy="390.5" r="55" fill="none" stroke="#3173BB" stroke-width="0.8" opacity="0.15" class="avatar-halo avatar-halo-3-outer" />

                    <!-- Animated rotating ring -->
                    <circle cx="640.5" cy="390.5" r="44" fill="none" stroke="url(#ring-gradient-2)" stroke-width="2.5" class="avatar-ring avatar-ring-3"
                        stroke-dasharray="70 210"
                    />

                    <!-- The photo -->
                    <image
                        x="600"
                        y="350"
                        width="81"
                        height="81"
                        :xlink:href="Abdou"
                        clip-path="url(#avatar-clip-2)"
                        class="bureau-pic"
                    />
                </g>

                <!-- ======= PARTICLE SPARKS at circuit nodes ======= -->
                <!-- Spark cluster near Feriel's node (around 232, 173) -->
                <circle cx="250" cy="165" r="1.5" fill="#7fadf4" filter="url(#spark-glow)" class="spark spark-1" />
                <circle cx="240" cy="180" r="1" fill="#a8ccf7" filter="url(#spark-glow)" class="spark spark-2" />
                <circle cx="225" cy="170" r="1.2" fill="#7fadf4" filter="url(#spark-glow)" class="spark spark-3" />

                <!-- Spark cluster near Amira's node (around 978, 189) -->
                <circle cx="985" cy="182" r="1.5" fill="#7fadf4" filter="url(#spark-glow)" class="spark spark-4" />
                <circle cx="970" cy="195" r="1" fill="#a8ccf7" filter="url(#spark-glow)" class="spark spark-5" />
                <circle cx="990" cy="175" r="1.2" fill="#7fadf4" filter="url(#spark-glow)" class="spark spark-6" />

                <!-- Spark near junction point (around 634, 342) -->
                <circle cx="630" cy="338" r="1.5" fill="#7fadf4" filter="url(#spark-glow)" class="spark spark-7" />
                <circle cx="642" cy="345" r="1" fill="#a8ccf7" filter="url(#spark-glow)" class="spark spark-8" />
                <circle cx="636" cy="350" r="1.3" fill="#7fadf4" filter="url(#spark-glow)" class="spark spark-9" />
            </svg>
        </div>
    </section>
</template>

<style scoped>
/* init a variable for the images width */
:root {
    --image-width: 80;
}
#bureau.section {
    overflow: hidden;
}
#bureau {
    padding: 1em 0;
    padding-top: 50px;
    padding-bottom: 250px;
    margin-bottom: 60px;
    min-height: auto;
    position: relative;
}
.svg-container {
    width: 100%;
    margin-top: 220px;
    position: relative;
    max-height: 510px;
}

/* ---- Glow path animation (traveling light along stroke) ---- */
.glow-path {
    stroke-dasharray: 150 2000;
    stroke-dashoffset: 0;
    opacity: 0.6;
    transition: opacity 0.4s ease, stroke-width 0.4s ease;
}

.glow-path-1 {
    animation: travel-light-1 6s linear infinite;
}
.glow-path-2 {
    animation: travel-light-2 4s linear infinite;
}
.glow-path-3 {
    animation: travel-light-3 4.5s linear infinite;
    animation-delay: 1s;
}

@keyframes travel-light-1 {
    0% { stroke-dashoffset: 2150; }
    100% { stroke-dashoffset: 0; }
}
@keyframes travel-light-2 {
    0% { stroke-dashoffset: 2150; }
    100% { stroke-dashoffset: 0; }
}
@keyframes travel-light-3 {
    0% { stroke-dashoffset: 2150; }
    100% { stroke-dashoffset: 0; }
}

/* Light orbs */
.light-orb {
    opacity: 0.85;
    transition: opacity 0.4s ease;
}

/* Base path transition */
.base-path {
    transition: stroke 0.4s ease;
}

/* Node circles pulse subtly */
.node-circle {
    transition: stroke 0.4s ease, filter 0.4s ease;
    animation: node-pulse 3s ease-in-out infinite;
}

@keyframes node-pulse {
    0%, 100% { stroke: #4A4954; }
    50% { stroke: #5e6a8a; }
}

/* ---- Member photo animations ---- */

/* Floating / breathing animation */
.member-group-1 {
    animation: float-1 5s ease-in-out infinite;
}
.member-group-2 {
    animation: float-2 6s ease-in-out infinite;
}
.member-group-3 {
    animation: float-3 5.5s ease-in-out infinite;
}

@keyframes float-1 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
}
@keyframes float-2 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
}
@keyframes float-3 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
}

/* Pulsing halo rings */
.avatar-halo {
    animation: halo-pulse 3s ease-in-out infinite;
}
.avatar-halo-1 { animation-delay: 0s; }
.avatar-halo-2 { animation-delay: 1s; }
.avatar-halo-3 { animation-delay: 0.5s; }
.avatar-halo-1-outer { animation: halo-pulse-outer 3s ease-in-out infinite; animation-delay: 0.2s; }
.avatar-halo-2-outer { animation: halo-pulse-outer 3s ease-in-out infinite; animation-delay: 1.2s; }
.avatar-halo-3-outer { animation: halo-pulse-outer 3s ease-in-out infinite; animation-delay: 0.7s; }

@keyframes halo-pulse {
    0%, 100% {
        opacity: 0.15;
        r: 46;
    }
    50% {
        opacity: 0.45;
        r: 50;
    }
}
@keyframes halo-pulse-outer {
    0%, 100% {
        opacity: 0.08;
        r: 53;
    }
    50% {
        opacity: 0.25;
        r: 58;
    }
}

/* Rotating ring around avatars */
.avatar-ring {
    transform-origin: center;
    animation: ring-spin 4s linear infinite;
}
.avatar-ring-1 {
    transform-origin: 205px 40.5px;
    animation: ring-spin 4s linear infinite;
}
.avatar-ring-2 {
    transform-origin: 942px 90.5px;
    animation: ring-spin 5s linear infinite reverse;
}
.avatar-ring-3 {
    transform-origin: 640.5px 390.5px;
    animation: ring-spin 4.5s linear infinite;
}

@keyframes ring-spin {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -280; }
}

/* Bureau pic subtle scale on hover */
.bureau-pic {
    transition: transform 0.3s ease, filter 0.3s ease;
}

/* ---- Particle / Spark animations ---- */
.spark {
    opacity: 0;
    animation: spark-blink 2s ease-in-out infinite;
}
.spark-1 { animation-delay: 0s; }
.spark-2 { animation-delay: 0.7s; }
.spark-3 { animation-delay: 1.4s; }
.spark-4 { animation-delay: 0.3s; }
.spark-5 { animation-delay: 1.1s; }
.spark-6 { animation-delay: 1.8s; }
.spark-7 { animation-delay: 0.5s; }
.spark-8 { animation-delay: 1.2s; }
.spark-9 { animation-delay: 0.9s; }

@keyframes spark-blink {
    0%, 100% { opacity: 0; transform: scale(0.5); }
    20% { opacity: 1; transform: scale(1.5); }
    40% { opacity: 0.6; transform: scale(1); }
    60% { opacity: 0; transform: scale(0.5); }
}

/* ---- Hover enhancement: intensify everything ---- */
.svg-container.is-hovered .glow-path {
    opacity: 1;
    stroke-width: 4;
}
.svg-container.is-hovered .light-orb {
    opacity: 1;
}
.svg-container.is-hovered .base-path {
    stroke: #5a5968;
}
.svg-container.is-hovered .node-circle {
    stroke: #7fadf4;
    filter: url(#path-glow);
    animation: none;
}
.svg-container.is-hovered .avatar-halo {
    animation-duration: 1.5s;
}
.svg-container.is-hovered .avatar-ring {
    stroke-width: 3.5;
    stroke-dasharray: 120 160;
}
.svg-container.is-hovered .spark {
    animation-duration: 1s;
}

/* ======== GLASSMORPHISM CARD SYSTEM ======== */

/* Card wrapper — positions the card and holds the rotating border */
.card-wrapper {
    position: absolute;
    z-index: 2;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Animated gradient border glow layer (sits behind the card) */
.card-border-glow {
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    background: conic-gradient(
        from var(--border-angle, 0deg),
        transparent 0%,
        #3173BB 10%,
        #7fadf4 20%,
        transparent 30%,
        transparent 50%,
        #5e6a8a 60%,
        #3173BB 70%,
        transparent 80%,
        transparent 100%
    );
    opacity: 0.45;
    animation: border-rotate 8s linear infinite;
    filter: blur(0.5px);
    z-index: -1;
    transition: opacity 0.4s ease, filter 0.3s ease;
}

@property --border-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

@keyframes border-rotate {
    0% { --border-angle: 0deg; }
    100% { --border-angle: 360deg; }
}

/* The glassmorphism card itself */
.card {
    position: relative;
    background: rgba(29, 28, 41, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 16px;
    border: 1px solid rgba(127, 173, 244, 0.12);
    padding: 16px 22px;
    color: #fff;
    overflow: hidden;
    transition:
        box-shadow 0.4s ease,
        background 0.4s ease,
        border-color 0.4s ease;
    box-shadow:
        0 4px 24px rgba(0, 0, 0, 0.3),
        0 0 12px rgba(49, 115, 187, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.04);
    animation: card-glow-pulse 4s ease-in-out infinite;
}

/* Idle glow pulse */
@keyframes card-glow-pulse {
    0%, 100% {
        box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.3),
            0 0 12px rgba(49, 115, 187, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }
    50% {
        box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(49, 115, 187, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
    }
}

/* Top edge highlight line for glass effect */
.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(127, 173, 244, 0.3),
        rgba(255, 255, 255, 0.15),
        rgba(127, 173, 244, 0.3),
        transparent
    );
    z-index: 3;
}

/* Inner subtle gradient ambience */
.card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    background: radial-gradient(
        ellipse at 30% 0%,
        rgba(49, 115, 187, 0.06) 0%,
        transparent 60%
    );
    pointer-events: none;
    z-index: 0;
}

/* Shimmer sweep overlay */
.card-shimmer {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        105deg,
        transparent 40%,
        rgba(127, 173, 244, 0.06) 45%,
        rgba(255, 255, 255, 0.08) 50%,
        rgba(127, 173, 244, 0.06) 55%,
        transparent 60%
    );
    pointer-events: none;
    z-index: 1;
}

@keyframes shimmer-sweep {
    0% { left: -100%; }
    100% { left: 200%; }
}

/* Card typography */
.card h2 {
    font-size: 18px;
    font-weight: 600;
    color: #e8edf5;
    letter-spacing: 0.3px;
    margin: 0 0 10px 0;
    position: relative;
    z-index: 2;
}

/* Role badge chip */
.role-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #7fadf4;
    background: rgba(49, 115, 187, 0.15);
    border: 1px solid rgba(127, 173, 244, 0.25);
    border-radius: 20px;
    padding: 4px 14px;
    position: relative;
    z-index: 2;
    transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

/* Remove old .card p styling */
.card p {
    padding: 0;
    margin: 0;
}

/* ---- Hover enhancements for cards ---- */
.svg-container.is-hovered .card-wrapper {
    transform: translateY(-4px);
}
.svg-container.is-hovered .card-border-glow {
    opacity: 0.85;
    animation-duration: 3s;
}
.svg-container.is-hovered .card {
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.35),
        0 0 24px rgba(49, 115, 187, 0.3),
        0 0 48px rgba(49, 115, 187, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
    border-color: rgba(127, 173, 244, 0.25);
    background: rgba(29, 28, 41, 0.85);
}
.svg-container.is-hovered .card-shimmer {
    animation: shimmer-sweep 1.8s ease-in-out;
}
.svg-container.is-hovered .role-badge {
    background: rgba(49, 115, 187, 0.3);
    border-color: rgba(127, 173, 244, 0.5);
    color: #a8ccf7;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    .glow-path,
    .light-orb,
    .member-group-1,
    .member-group-2,
    .member-group-3,
    .avatar-halo,
    .avatar-halo-1-outer,
    .avatar-halo-2-outer,
    .avatar-halo-3-outer,
    .avatar-ring,
    .avatar-ring-1,
    .avatar-ring-2,
    .avatar-ring-3,
    .spark,
    .node-circle,
    .card,
    .card-border-glow {
        animation: none !important;
    }
    .glow-path {
        stroke-dasharray: none;
        opacity: 0.4;
    }
    .avatar-halo {
        opacity: 0.2;
    }
    .spark {
        opacity: 0;
    }
    .card-border-glow {
        background: linear-gradient(135deg, #3173BB, #5e6a8a, #3173BB);
        opacity: 0.3;
    }
    .card-shimmer {
        display: none;
    }
}

.oval {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.svg-container .title-container {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translatex(-50%);
    text-align: center;
    color: #c4c4c4;
    font-size: 24px;
    height: 100%;
}
h1 {
    color: var(--color-blue);
    padding: 10px;
}
.icon {
    width: 40px;
}

/* ---- Card positioning (large screens) ---- */
.member1 {
    top: -200px;
    left: 7vw;
}
.member2 {
    top: -100px;
    right: 17vw;
}
.member3 {
    top: 110%;
    left: 40vw;
}

.members-svg {
    min-height: 200px;
}

/* ---- Medium screens ---- */
@media (min-width: 701px) and (max-width: 1200px) {
    .svg-container {
        margin-top: 100px;
    }
    #bureau {
        padding-bottom: 200px;
    }
    .member1 {
        top: -70px;
        left: 5vw;
    }
    .member2 {
        top: -20px;
        right: 10vw;
    }
    .member3 {
        top: 92%;
        left: 40vw;
    }
    .card {
        padding: 12px 16px;
    }
    .card h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }
    .role-badge {
        font-size: 10px;
        padding: 3px 10px;
        letter-spacing: 1px;
    }
}

/* ---- Mobile screens ---- */
@media (max-width: 700px) {
    #bureau {
        padding: 0;
        padding-top: 20px;
        padding-bottom: 180px;
    }
    .svg-container {
        margin-top: 80px;
    }
    .svg-container .title-container {
        top: 0;
        font-size: 16px;
    }
    .svg-container .title-container h1 {
        font-size: 1.2rem;
        padding: 5px;
    }
    .svg-container .title-container .icon {
        width: 28px;
    }

    .card {
        padding: 8px 12px;
        border-radius: 12px;
    }
    .card h2 {
        font-size: 13px;
        margin-bottom: 6px;
        letter-spacing: 0.2px;
    }
    .role-badge {
        font-size: 9px;
        padding: 3px 8px;
        letter-spacing: 0.8px;
    }
    .card-border-glow {
        inset: -1px;
        border-radius: 13px;
    }

    /* Keep original mobile photo size */
    image.bureau-pic {
        width: 200px;
        height: 200px;
    }

    /* Scale ONLY the ring + halo circles (not the photo) to match the 200x200 photos.
       Photos grow from 81->200 with same top-left anchor, shifting center by 59.5px each axis.
       Scale 2.47x around original center, then translate to new photo center. */
    .member-group-1 .avatar-ring,
    .member-group-1 .avatar-halo {
        transform-origin: 205px 40.5px;
        transform: translate(59.5px, 59.5px) scale(2.47);
    }
    .member-group-2 .avatar-ring,
    .member-group-2 .avatar-halo {
        transform-origin: 942px 90.5px;
        transform: translate(59.5px, 59.5px) scale(2.47);
    }
    .member-group-3 .avatar-ring,
    .member-group-3 .avatar-halo {
        transform-origin: 640.5px 390.5px;
        transform: translate(59.5px, 59.5px) scale(2.47);
    }

    /* Thin out strokes to compensate for the 2.47x scale */
    .avatar-ring {
        stroke-width: 1;
    }
    .avatar-halo {
        stroke-width: 0.6;
    }

    .member1 {
        top: -60px;
        left: 0;
    }
    .member2 {
        top: -30px;
        right: 0;
    }
    .member3 {
        top: 90%;
        left: 40vw;
    }
}
</style>
