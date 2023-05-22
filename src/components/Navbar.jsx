import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
// import brand_img from '../assets/img/osman-oline-logo1.png';

// function loadDropDowns() {
//   // navbar-dropdown.js
//   // Theme module

//   // Selectors
//   const drops = document.querySelectorAll(".navbar-nav .dropdown");

//   // Events
//   const showEvents = ["mouseenter"];
//   const hideEvents = ["mouseleave", "click"];

//   // Transition
//   const transitionDuration = 200;

//   // Breakpoint
//   const desktopSize = 992;

//   // Show drop
//   function showDrop(menu) {
//   //   if (typeof window !== undefined) {
//     if (window.innerWidth < desktopSize) {
//       return;
//     }
//   // }
// let isShowing = menu.classList.contains('show')
// // console.log("menu", menu)
// // console.log("showing", isShowing)
//     // menu.classList.add("showing");
//     menu.classList.toggle("show");

//     // setTimeout(function () {
//     //   // menu.classList.remove("showing");
//     //   menu.classList.add("show");
//     // }, 1);
//   }

//   // Hide drop
//   function hideDrop(e, menu) {
//     setTimeout(function () {
//     //   if (typeof window !== undefined) {
//       if (window.innerWidth < desktopSize) {
//         return;
//       }
//     // }

//       if (!menu.classList.contains("show")) {
//         return;
//       }

//       if (e.type === "click" && e.target.closest(".dropdown-menu form")) {
//         return;
//       }

//       menu.classList.add("showing");
//       menu.classList.remove("show");

//       setTimeout(function () {
//         menu.classList.remove("showing");
//       }, transitionDuration);
//     }, 2);
//   }

//   drops.forEach(function (dropdown) {
//     const menu = dropdown.querySelector(".dropdown-menu");

//     // Show drop
//     showEvents.forEach(function (event) {
//       dropdown.addEventListener(event, function () {
//         showDrop(menu);
//       });
//     });

//     // Hide drop
//     hideEvents.forEach(function (event) {
//       dropdown.addEventListener(event, function (e) {
//         hideDrop(e, menu);
//       });
//     });
//   });
// }

const Navbar = () => {
  let [toggle, setToggle] = useState(false);
  let [toggleLearnMenu, setToggleLearnMenu] = useState(false);
  let [toggleLanguageMenu, setToggleLanguageMenu] = useState(false);

  //   useEffect(() => {
  //     loadDropDowns();
  //     document.getElementById("___gatsby")?.classList.add("bg-light");
  //   }, []);

  return (
    // NAVBAR
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-lg">
          <span className="navbar-brand">
            <Link aria-current="page" target="_top" to="/">
              <div className="header-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 500 121"
                >
                  <g>
                    <title>Layer 1</title>
                    <g id="svg_1">
                      <path
                        id="svg_2"
                        fill="#4468B1"
                        d="m16.58,103.76033l10.23,-19.24l58.73,0l9.8,19.24l16.43,0l-44.91,-88.15l-20,0l-46.86,88.15l16.58,0zm40.22,-75.64l21.28,41.76l-43.48,0l22.2,-41.76z"
                        className="st0"
                      />
                      <path
                        id="svg_3"
                        fill="#4468B1"
                        d="m175.45,103.76033l10.23,-19.24l58.73,0l9.8,19.24l16.43,0l-44.91,-88.15l-20,0l-46.87,88.15l16.59,0zm40.22,-75.64l21.28,41.76l-43.48,0l22.2,-41.76z"
                        className="st0"
                      />
                      <polygon
                        id="svg_4"
                        fill="#4468B1"
                        points="174.07000732421875,15.610336303710938 135.39999389648438,88.33033752441406 98.3499984741211,15.610336303710938 81.91999816894531,15.610336303710938 126.83000183105469,103.76033020019531 143.77999877929688,103.76033020019531 190.64999389648438,15.610336303710938 "
                        className="st0"
                      />
                      <g id="svg_5">
                        <path
                          id="svg_6"
                          strokeMiterlimit="10"
                          stroke="#6EB6E5"
                          fill="#6EB6E5"
                          d="m497.91,80.12033c-0.68,0 -1.56,0.34 -1.96,0.84c-5.18,5.06 -15.38,12.49 -23.54,15.7c-2.66,1.1 -5.04,1.63 -6.91,1.63c-1,0 -1.85,-0.15 -2.52,-0.45c-1.92,-0.84 -3.38,-2.7 -3.22,-8.1c0.05,-1.34 0.16,-2.73 0.33,-4.15c1.31,-10.67 6.02,-23.12 10.93,-34l20.09,0l0.17,0c1.35,0 2.51,-1.18 2.67,-2.53c0.17,-1.35 -0.72,-2.36 -2.07,-2.36l-0.17,0l-18.4,0c6.34,-13.17 12.61,-22.96 12.61,-22.96c0.21,-0.34 0.27,-0.84 0.31,-1.18c0.17,-1.35 -0.72,-2.36 -2.07,-2.36c-0.84,0 -1.94,0.67 -2.36,1.35c0,0 -6.31,10.13 -12.86,23.63l-0.69,1.52l-13.67,0c-1.35,0 -2.66,1.01 -2.82,2.36c-0.17,1.35 0.87,2.53 2.22,2.53l11.99,0c-4.15,9.19 -7.93,19.31 -9.79,28.91c-0.31,0.16 -0.59,0.36 -0.76,0.64c0,0 -3.24,4.39 -7.83,8.78c-4.59,4.39 -10.28,8.1 -13.66,8.1c-0.51,0 -0.67,0 -0.82,-0.17c-0.15,-0.17 -0.25,-0.67 -0.51,-1.35c-0.32,-1.52 -0.18,-4.05 -0.04,-6.58c0.14,-2.53 0.5,-5.4 0.62,-7.76c-0.02,-1.18 -0.05,-2.36 -0.26,-3.38c-0.21,-1.01 -0.57,-2.19 -1.84,-2.87c-0.32,-0.17 -0.78,-0.51 -1.29,-0.51l-0.34,0c-0.34,0 -0.53,0.17 -0.86,0.17c-0.7,0.17 -1.41,0.51 -1.96,0.84c-1.1,0.67 -2.06,1.69 -3.22,2.87c-2.15,2.36 -4.57,5.57 -6.8,8.61c-2.23,3.04 -4.65,6.25 -6.42,8.27c-0.21,0.34 -0.57,0.51 -0.78,0.84l0.02,-0.17c0.19,-1.52 0.79,-3.71 1.38,-5.74c1.34,-4.05 2.83,-7.93 2.83,-7.93c0.02,-0.17 0.23,-0.51 0.25,-0.67c0.17,-1.35 -0.72,-2.36 -2.07,-2.36c-0.04,0 -0.08,0.02 -0.12,0.02c-0.07,-0.01 -0.13,-0.02 -0.19,-0.02c-0.51,0 -1.39,0.34 -1.77,0.67c0,0 -6.78,5.74 -14.98,10.63c-4.02,2.53 -8.51,4.73 -12.2,5.91c-1.77,0.57 -3.39,0.82 -4.79,0.82c-1.51,0 -2.75,-0.3 -3.65,-0.82c-2.05,-1.18 -2.33,-3.04 -2.17,-5.74c0.02,-0.3 0.05,-0.6 0.09,-0.91c0.31,-2.5 1.21,-5.34 1.69,-8.04l0.02,-0.17c0.17,-1.35 -0.72,-2.36 -2.07,-2.36c-0.12,0 -0.24,0.01 -0.36,0.03c-0.1,-0.01 -0.19,-0.03 -0.3,-0.03c-0.34,0 -1.03,0.17 -1.39,0.34c0,0 -2.91,1.69 -6.83,3.38c-3.13,1.27 -6.95,2.31 -9.16,2.31c-0.42,0 -0.78,-0.04 -1.07,-0.12c-1.94,-0.67 -2.47,-1.86 -3.07,-3.88c-0.6,-2.03 -1.09,-4.9 -3.92,-6.58c-0.32,-0.17 -0.78,-0.51 -1.12,-0.51l-0.34,0c-1.01,0 -2.07,0.34 -2.8,0.84c-1.1,0.67 -2.23,1.69 -3.39,2.87c-2.13,2.19 -4.36,5.23 -6.59,8.27c-0.82,1.18 -1.62,2.19 -2.44,3.38c1.47,-3.71 3.07,-7.09 3.07,-7.09c0.19,-0.17 0.25,-0.67 0.27,-0.84c0.17,-1.35 -0.72,-2.36 -2.07,-2.36c-1.01,0 -1.94,0.67 -2.38,1.52c0,0 -2.19,4.05 -3.74,8.44c-0.78,2.19 -1.57,4.56 -1.82,6.58c-0.12,1.01 -0.42,2.03 -0.2,3.04c0.21,1.01 0.57,2.19 1.67,2.87c0.32,0.17 0.8,0.34 1.14,0.34c0.84,0 1.94,-0.68 2.36,-1.35c0,0 3.81,-6.25 8.08,-12.15c2.04,-2.87 4.25,-5.74 6,-7.6c0.78,-0.84 1.52,-1.35 1.9,-1.69c0.76,0.67 1.12,1.86 1.72,3.88c0.72,2.36 2.02,5.57 5.59,6.75l0.17,0c0.88,0.25 1.8,0.35 2.73,0.35c3.55,0 7.37,-1.55 10.75,-2.89c1.4,-0.55 2.69,-1.15 3.8,-1.69c-0.3,1.29 -0.58,2.66 -0.76,4.08c-0.05,0.38 -0.08,0.77 -0.12,1.16c-0.27,3.54 0.42,7.6 4.03,9.79c1.68,1.07 3.64,1.5 5.72,1.5c2.18,0 4.49,-0.47 6.73,-1.16c4.39,-1.35 8.92,-3.88 13.28,-6.41c3.67,-2.24 7.09,-4.59 9.83,-6.56c-0.15,0.44 -0.29,0.88 -0.43,1.33c-0.61,2.19 -1.4,4.56 -1.65,6.58c-0.12,1.01 -0.08,2.03 0.13,3.04c0.21,1.01 0.43,2.03 1.53,2.7c0.78,0.51 1.96,0.51 2.66,0.34c0.7,-0.17 1.26,-0.68 1.81,-1.01c1.12,-0.84 2.06,-1.69 3.05,-2.87c1.98,-2.36 4.4,-5.57 6.63,-8.61c2.23,-3.04 4.63,-6.08 6.4,-8.1c0.59,-0.67 1.16,-1.18 1.54,-1.52c0.11,0.51 0.19,1.18 0.11,1.86c-0.08,2.03 -0.58,4.73 -0.74,7.43c-0.16,2.7 -0.35,5.57 0.21,7.93c0.36,1.18 0.7,2.53 1.61,3.38c0.91,0.84 2.35,1.52 3.86,1.52c6.25,0 12.44,-5.06 17.41,-9.79c1.64,-1.56 3.11,-3.1 4.34,-4.46c-0.03,0.48 -0.07,0.95 -0.09,1.42c-0.28,6.41 1.73,10.63 5.58,12.32c1.37,0.6 2.82,0.86 4.34,0.86c2.75,0 5.72,-0.85 8.8,-2.04c9.4,-3.71 19.64,-11.48 25.39,-17.05c0.38,-0.34 0.82,-1.18 0.88,-1.69c0.13,-1.37 -0.76,-2.38 -2.11,-2.38z"
                          className="st1"
                        />
                        <path
                          id="svg_7"
                          strokeMiterlimit="10"
                          stroke="#6EB6E5"
                          fill="#6EB6E5"
                          d="m375,74.22033c1.65,0 3,-1.34 3,-3c0,-1.65 -1.34,-3 -3,-3c-1.65,0 -3,1.34 -3,3c0,1.66 1.35,3 3,3z"
                          className="st1"
                        />
                        <path
                          id="svg_8"
                          strokeMiterlimit="10"
                          strokeWidth="0.4"
                          stroke="#6EB6E5"
                          fill="#6EB6E5"
                          d="m356.51,17.21033c-3.16,-5.22 -7.49,-9.3 -13,-12.25c-5.51,-2.95 -11.52,-4.58 -18.03,-4.9c-8.36,-0.41 -16.43,1.27 -24.21,5.03c-7.78,3.76 -13.9,9.33 -18.35,16.72c-0.22,0.57 -0.34,1.06 -0.36,1.44c-0.04,0.78 0.22,1.47 0.78,2.08c0.55,0.61 1.22,0.94 2,0.97c1.17,0.06 2.02,-0.44 2.56,-1.48c3.92,-6.53 9.28,-11.48 16.07,-14.86c6.79,-3.37 13.83,-4.88 21.12,-4.53c5.54,0.27 10.66,1.67 15.36,4.18c4.7,2.52 8.4,6.04 11.11,10.55c2.98,4.92 4.32,10.39 4.02,16.42c-0.28,5.83 -2.18,11.25 -5.69,16.24c-3.51,5 -8.62,8.93 -15.34,11.82c-6.72,2.89 -14.84,4.1 -24.36,3.64c-3.6,-0.17 -7.52,-0.66 -11.77,-1.45l-1.74,5.76c4.54,0.8 8.8,1.31 12.79,1.5c10.69,0.52 19.9,-0.96 27.62,-4.43c7.72,-3.47 13.6,-8.2 17.64,-14.2c4.04,-5.99 6.23,-12.39 6.56,-19.19c0.33,-6.97 -1.26,-13.33 -4.78,-19.06z"
                          className="st2"
                        />
                        <path
                          id="svg_9"
                          fill="#6EB6E5"
                          d="m283.11,121.07033c-0.17,0 -0.35,-0.01 -0.53,-0.04c-1.82,-0.29 -3.07,-2 -2.78,-3.82c9.83,-61.82 31.12,-93.28 32.02,-94.59c1.05,-1.52 3.12,-1.9 4.64,-0.86c1.52,1.04 1.9,3.12 0.86,4.64c-0.21,0.31 -21.36,31.67 -30.93,91.85c-0.24,1.65 -1.66,2.82 -3.28,2.82z"
                          className="st3"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                {/* <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490 118"
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html: "\n\t.st0{fill:#761EEB;}\n",
                    }}
                  />
                  <g>
                    <path
                      d="M130.7,27h16.9c3.1,0,6,0.5,8.6,1.6s4.7,2.6,6.6,4.7c1.8,2.1,3.2,4.7,4.2,7.9c1,3.2,1.4,6.8,1.4,11s-0.5,7.9-1.4,11
		c-1,3.2-2.4,5.8-4.2,7.9c-1.8,2.1-4,3.7-6.6,4.7s-5.4,1.6-8.6,1.6h-16.9V27z M147.6,72.2c2.1,0,4-0.3,5.7-1.1
		c1.7-0.7,3.2-1.7,4.5-3.1c1.3-1.3,2.2-3,2.9-5c0.7-2,1.1-4.2,1.1-6.7v-8.3c0-2.5-0.4-4.7-1.1-6.7s-1.7-3.6-2.9-5
		c-1.3-1.3-2.8-2.4-4.5-3.1s-3.6-1-5.7-1h-10.9v39.8H147.6z"
                    />
                  </g>
                  <g>
                    <path
                      d="M179.4,77.6V40.2h5.8v6.9h0.4c0.7-1.8,1.9-3.4,3.6-4.8c1.7-1.4,4.1-2.1,7.2-2.1h2.2V46h-3.4c-3.1,0-5.6,0.6-7.4,1.8
		c-1.8,1.2-2.6,2.7-2.6,4.5v25.3L179.4,77.6L179.4,77.6z"
                    />
                  </g>
                  <g>
                    <path
                      d="M220.4,78.5c-2.6,0-4.9-0.5-6.9-1.4s-3.8-2.2-5.3-3.9c-1.5-1.7-2.6-3.8-3.4-6.2c-0.8-2.4-1.2-5.1-1.2-8.1
		c0-2.9,0.4-5.6,1.2-8c0.8-2.4,1.9-4.5,3.4-6.2s3.2-3,5.3-4c2.1-0.9,4.4-1.4,6.9-1.4c2.5,0,4.8,0.5,6.7,1.4c2,0.9,3.7,2.2,5.1,3.8
		c1.4,1.6,2.5,3.5,3.2,5.7c0.8,2.2,1.1,4.6,1.1,7.3v2.7h-26.9V62c0,1.6,0.2,3.1,0.8,4.5s1.2,2.6,2.2,3.6s2.1,1.8,3.5,2.4
		c1.4,0.6,2.9,0.9,4.7,0.9c2.4,0,4.4-0.6,6.2-1.7c1.8-1.1,3.1-2.7,4.1-4.8l4.1,3c-1.2,2.6-3.1,4.7-5.6,6.2
		C227,77.7,224,78.5,220.4,78.5z M220.4,44.2c-1.6,0-3,0.3-4.4,0.8c-1.3,0.5-2.4,1.3-3.4,2.3s-1.7,2.2-2.2,3.6
		c-0.5,1.4-0.8,2.9-0.8,4.5V56h20.6v-0.8c0-3.3-0.9-6-2.7-8C225.8,45.2,223.4,44.2,220.4,44.2z"
                    />
                    <path
                      d="M273.9,77.6c-2.2,0-3.7-0.6-4.7-1.7c-0.9-1.2-1.5-2.6-1.8-4.3h-0.4c-0.8,2.3-2.2,4.1-4.1,5.2c-1.9,1.2-4.1,1.7-6.7,1.7
		c-4,0-7-1-9.2-3c-2.2-2-3.3-4.8-3.3-8.3c0-3.5,1.3-6.2,3.9-8.1c2.6-1.9,6.6-2.8,12.1-2.8h7.4v-3.7c0-2.7-0.7-4.7-2.2-6.1
		c-1.5-1.4-3.7-2.1-6.7-2.1c-2.3,0-4.2,0.5-5.7,1.5c-1.5,1-2.8,2.4-3.8,4.1l-3.5-3.3c1-2,2.6-3.8,4.9-5.2c2.2-1.4,5-2.1,8.4-2.1
		c4.5,0,8.1,1.1,10.6,3.3c2.5,2.2,3.8,5.3,3.8,9.2v20.5h4.3v5.1L273.9,77.6L273.9,77.6z M257.2,73.6c1.5,0,2.8-0.2,4-0.5
		c1.2-0.3,2.2-0.8,3.1-1.4s1.5-1.3,2-2.2c0.5-0.8,0.7-1.7,0.7-2.7v-6.2h-7.7c-3.3,0-5.8,0.5-7.3,1.5s-2.3,2.4-2.3,4.2v1.5
		c0,1.8,0.7,3.3,2,4.3S255,73.6,257.2,73.6z"
                    />
                  </g>
                  <g>
                    <path
                      d="M286.1,77.6V40.2h5.8v6h0.3c0.4-1,0.9-1.8,1.5-2.7c0.5-0.8,1.2-1.6,2-2.2c0.8-0.6,1.7-1.1,2.8-1.5s2.3-0.5,3.8-0.5
		c2.5,0,4.7,0.6,6.8,1.8s3.6,3.1,4.6,5.8h0.1c0.7-2,1.9-3.8,3.8-5.3s4.4-2.3,7.6-2.3c3.8,0,6.8,1.2,9,3.7c2.1,2.5,3.2,6,3.2,10.5v24
		h-5.8v-23c0-3.3-0.6-5.9-2-7.5c-1.3-1.7-3.4-2.5-6.2-2.5c-1.2,0-2.3,0.2-3.3,0.4c-1,0.3-2,0.7-2.8,1.3s-1.5,1.3-2,2.2
		c-0.5,0.9-0.7,2-0.7,3.2v26h-5.8v-23c0-3.3-0.6-5.9-2-7.5c-1.3-1.7-3.3-2.5-6.1-2.5c-1.2,0-2.3,0.2-3.3,0.4c-1.1,0.3-2,0.7-2.8,1.3
		s-1.5,1.3-2,2.2c-0.5,0.9-0.8,2-0.8,3.2v26L286.1,77.6L286.1,77.6z"
                    />
                    <path
                      d="M361.3,78.5c-3.5,0-6.4-0.7-8.7-2c-2.3-1.3-4.4-3.1-6-5.3l4.1-3.3c1.5,1.8,3.1,3.2,4.9,4.2c1.8,1,3.9,1.5,6.2,1.5
		c2.5,0,4.4-0.5,5.8-1.6s2.1-2.6,2.1-4.5c0-1.4-0.5-2.7-1.4-3.7c-0.9-1-2.6-1.8-5.1-2.1l-3-0.4c-1.7-0.2-3.3-0.6-4.8-1.1
		c-1.5-0.5-2.7-1.2-3.8-2c-1.1-0.8-1.9-1.9-2.5-3.2c-0.6-1.2-0.9-2.8-0.9-4.5c0-1.8,0.3-3.4,1-4.8c0.7-1.4,1.6-2.5,2.8-3.4
		c1.2-0.9,2.6-1.6,4.2-2.1c1.6-0.5,3.4-0.7,5.3-0.7c3,0,5.6,0.5,7.6,1.6c2,1.1,3.9,2.5,5.4,4.4l-3.8,3.5c-0.8-1.2-2-2.2-3.6-3.2
		c-1.6-0.9-3.6-1.4-6-1.4c-2.4,0-4.2,0.5-5.5,1.6s-1.9,2.5-1.9,4.2c0,1.8,0.6,3.2,1.9,4s3,1.4,5.3,1.8l2.9,0.4
		c4.1,0.6,7.1,1.8,8.8,3.6c1.7,1.8,2.6,4.1,2.6,6.9c0,3.6-1.2,6.5-3.7,8.6C369,77.4,365.6,78.5,361.3,78.5z"
                    />
                  </g>
                  <g>
                    <path
                      d="M386.1,24h5.8v22.2h0.3c0.9-2.1,2.2-3.8,3.9-5s3.9-1.9,6.7-1.9c3.9,0,6.9,1.2,9.2,3.7c2.2,2.5,3.4,6,3.4,10.5v24h-5.8v-23
		c0-6.7-2.8-10.1-8.5-10.1c-1.2,0-2.3,0.2-3.4,0.4c-1.1,0.3-2.1,0.7-2.9,1.3s-1.6,1.3-2.1,2.2c-0.5,0.9-0.8,2-0.8,3.2v26h-5.8
		L386.1,24L386.1,24z"
                    />
                  </g>
                  <g>
                    <path
                      d="M430.8,31.5c-1.3,0-2.2-0.3-2.7-0.9c-0.6-0.6-0.8-1.4-0.8-2.4v-0.9c0-1,0.3-1.8,0.8-2.4s1.5-0.9,2.7-0.9s2.2,0.3,2.7,0.9
		c0.5,0.6,0.8,1.4,0.8,2.4v0.9c0,1-0.3,1.8-0.8,2.4C432.9,31.2,432,31.5,430.8,31.5z M427.9,40.2h5.8v37.4h-5.8V40.2z"
                    />
                  </g>
                  <g>
                    <path
                      d="M446.7,40.2h5.8v6h0.3c1-2.3,2.4-4.1,4.2-5.2s4.1-1.7,6.7-1.7c2.3,0,4.4,0.5,6.3,1.4c1.9,0.9,3.5,2.2,4.8,3.9
		c1.3,1.7,2.3,3.7,3,6.2c0.7,2.4,1,5.1,1,8.1c0,3-0.4,5.7-1,8.1c-0.7,2.4-1.7,4.5-3,6.2c-1.3,1.7-2.9,3-4.8,3.9
		c-1.9,0.9-4,1.4-6.3,1.4c-5.1,0-8.7-2.3-10.9-6.9h-0.3v20.5h-5.8V40.2z M462.1,73.3c3.3,0,5.9-1,7.8-3.1s2.8-4.8,2.8-8.1v-6.4
		c0-3.3-0.9-6.1-2.8-8.1c-1.9-2.1-4.5-3.1-7.8-3.1c-1.3,0-2.5,0.2-3.7,0.5c-1.2,0.4-2.2,0.9-3.1,1.5s-1.6,1.4-2.1,2.3
		c-0.5,0.9-0.8,1.9-0.8,2.9v14c0,1.2,0.2,2.3,0.8,3.2s1.2,1.8,2.1,2.4c0.9,0.7,1.9,1.2,3.1,1.5C459.6,73.2,460.8,73.3,462.1,73.3z"
                    />
                  </g>
                  <polygon
                    className="st0"
                    points="62.2,51.2 63.8,49.6 67.8,45.6 91.8,21.5 67.8,21.5 66.1,21.5 62.2,21.5 58.2,21.5 34.2,21.5
	34.2,45.6 34.2,49.6 34.2,53.5 34.2,55.2 34.2,79.2 58.2,55.2 "
                  />
                  <polygon
                    className="st0"
                    points="67.8,112.8 91.8,88.8 67.8,88.8 "
                  />
                  <polygon
                    className="st0"
                    points="28.6,49.6 28.6,25.5 4.5,49.6 "
                  />
                  <polygon
                    className="st0"
                    points="71.8,49.6 67.8,53.5 66.1,55.2 62.2,59.1 38.1,83.2 62.2,83.2 63.8,83.2 67.8,83.2 71.8,83.2
	95.8,83.2 95.8,59.1 95.8,55.2 95.8,51.2 95.8,49.6 95.8,25.5 "
                  />
                </svg> */}
              </div>
            </Link>
          </span>
          <button
            aria-controls="navbarSupportedContent"
            type="button"
            aria-label="Toggle navigation"
            className={`navbar-toggler ${toggle ? "collapsed" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`navbar-collapse collapse ${toggle ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <div className="navbar-nav">
              /* <div className="text-nowrap nav-item">
                <Link target="_top" className="nav-link" to="/catalog">
                  {Catalog }
                  Catalogue
                </Link>
              </div>*/
              <div
                className={`dropdown nav-item ${toggleLearnMenu ? "show" : ""}`}
              >
                <a
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                  id="navbar-learn"
                  className="dropdown-toggle nav-link"
                  role="button"
                  onClick={() => setToggleLearnMenu(!toggleLearnMenu)}
                  // onMouseEnter={loadDropDowns}
                >
                  <span>
                    {/* Learn{" "} */}
                    Hướng Dẫn{" "}
                    <i className="feather feather-chevron-down d-none d-md-inline" />
                  </span>
                </a>
                <div
                  aria-labelledby="navbar-learn"
                  className={`dropdown-menu ${toggleLearnMenu ? "show" : ""}`}
                  style={{ margin: "0px" }}
                >
                  {/* <div className="dropdown-item">
                    <a
                      target="_top"
                      className="dropdown-item d-flex"
                      href="/updates"
                    >
                      <div className="icon icon-sm text-primary-light">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <g fill="none" fillRule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <path
                              d="M13.207 4A5.5 5.5 0 0020 10.793V17a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h6.207z"
                              fill="#335EEA"
                            />
                            <circle
                              fill="#335EEA"
                              opacity=".3"
                              cx="18.5"
                              cy="5.5"
                              r="2.5"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="font-weight-bold mb-0">Updates</p>
                        <span className="text-gray-500">
                          Catalog updates, new features, and more.
                        </span>
                      </div>
                    </a>
                  </div> */}
                  <div className="dropdown-item">
                    <Link
                      target="_top"
                      className="dropdown-item d-flex"
                      to="/blog"
                    >
                      <div className="icon icon-sm text-primary-light">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <g fill="none" fillRule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <rect
                              fill="#335EEA"
                              x={4}
                              y={5}
                              width={16}
                              height={3}
                              rx="1.5"
                            />
                            <path
                              d="M5.5 15h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3zm0-5h7a1.5 1.5 0 010 3h-7a1.5 1.5 0 010-3z"
                              fill="#335EEA"
                              opacity=".3"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="font-weight-bold mb-0">Blog</p>
                        <span className="text-gray-500">
                          {/* E-commerce tips and insights. */}
                          Những bí quyết và thông tin về E-commerce
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link
                      target="_top"
                      className="dropdown-item d-flex"
                      to="/support"
                    >
                      <div className="icon icon-sm text-primary-light">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <g fill="none" fillRule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <path
                              d="M13.686 18.708C15.91 17.82 18.683 17.25 22 17V5.506a.5.5 0 00-.513-.5C18.658 5.078 15.83 5.743 13 7v11.244a.5.5 0 00.686.464z"
                              fill="#335EEA"
                            />
                            <path
                              d="M2.686 18.708C4.91 17.82 7.683 17.25 11 17V5.506a.5.5 0 00-.513-.5C7.658 5.078 4.83 5.743 2 7v11.244a.5.5 0 00.686.464z"
                              fill="#335EEA"
                              opacity=".3"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="font-weight-bold mb-0">
                          {/* Support */}
                          Hỗ Trợ
                          </p>
                        <span className="text-gray-500">
                          {/* Need help using Avaprint? */}
                          Bạn có cần giúp đỡ để dùng Avaprint?
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="mb-4 mt-4 dropdown-divider"
                    role="separator"
                  />
                  <div className="dropdown-item">
                    <div>
                      <div
                        className="input-group input-group-sm"
                        style={{ zIndex: 1 }}
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="feather feather-search" />
                          </span>
                        </div>
                        <input
                          placeholder="Search"
                          className="form-control form-control-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-nowrap nav-item">
                <Link target="_top" className="nav-link" to="/contact">
                  {/* Contact */}
                  Liên Hệ
                </Link>
              </div>
            </div>
            <div className="justify-content-end w-100 nav-small navbar-nav">
              <div
                className={`nav-item dropdown ${
                  toggleLanguageMenu ? "show" : ""
                }`}
              >
                <a
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                  id="language-navitem"
                  className="dropdown-toggle nav-link"
                  role="button"
                  onClick={() => setToggleLanguageMenu(!toggleLanguageMenu)}
                  // onMouseEnter={loadDropDowns}
                >
                  <span>
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <circle
                          fill="#335EEA"
                          opacity=".3"
                          cx={12}
                          cy={12}
                          r={9}
                        />
                        <path
                          d="M11.736 20.996a9 9 0 01-8.733-9.245c.66.063 1.853.206 1.91.67.077.64 0 1.44.545 1.68s.701-.96 1.169-.64c.467.32 1.714.629 1.714 1.195 0 .566-.234 1.447 0 1.608.234.16 1.168 1.28 1.168 1.44 0 .161.33.975.231 1.287-.08.258-.491 1.06-.89 1.424a8.742 8.742 0 002.886.581zM8.283 3.801A8.967 8.967 0 0112 3a9 9 0 018.036 4.944c.034.78.028 1.447.2 1.689.877 1.227-2.136 2.071-1.679 3.928.202.818-2.004.559-2.543 1.325-.54.767-1.857.252-2.162.104-.305-.147-1.475.344-1.373-.49.102-.835.813-.884 1.577-1.228.762-.343 1.863-1.485 1.322-1.634-2.546-.702-3.414-3.16-3.414-3.16-.153-.029-.115-1.737-.776-1.786-.661-.05-1.018.196-1.984 0s-.763-.835-.915-2.21c-.034-.308-.033-.525-.006-.68zm12.716 8.076L21 12a9 9 0 01-8.91 9c4.88-.05 8.844-4.112 8.91-9.123z"
                          fill="#335EEA"
                          opacity=".3"
                        />
                      </g>
                    </svg>{" "}
                    {/* English */}
                    Tiếng Việt
                    <i className="feather feather-chevron-down d-none d-md-inline" />
                  </span>
                </a>
                <div
                  aria-labelledby="language-navitem"
                  className={`dropdown-menu ${
                    toggleLanguageMenu ? "show" : ""
                  }`}
                  style={{ margin: "0px" }}
                >
                  <button className="dropdown-item">English</button>
                  <button className="dropdown-item">Tiếng Việt</button>
                </div>
              </div>
              <div className="text-nowrap nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.avaprint.com/login"
                  className="nav-link"
                >
                  {/* Login */}
                  Đăng Nhập
                </a>
              </div>
              <div className="text-nowrap nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.avaprint.com/register"
                  className="nav-link"
                >
                  {/* Sign up */}
                  Đăng Ký
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
