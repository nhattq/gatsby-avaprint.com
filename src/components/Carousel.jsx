import React from "react";
import Flickity from "react-flickity-component";
import "flickity-as-nav-for";
import "flickity-fade";
import "flickity-imagesloaded";

// import "./styles.css";
// import "./flickity.css";

const flickityOptions1 = {
  imagesLoaded: true,
  pageDots: false,
  draggable: false,
  autoPlay: 3000,
  accessibility: true,
  wrapAround: true,
};
const flickityOptions2 = {
  fade: true,
  pageDots: false,
  adaptiveHeight: true,
  prevNextButtons: false,
  asNavFor: ".hero-slider",
};

const Carousel = ({ children, options, classes }) => {
  return (
    <>
      <Flickity
        className={classes} // default ''
        elementType={"div"} // default 'div'
        options={options} // takes flickity options {}
        // disableImagesLoaded={false} // default false
        // reloadOnUpdate // default false
        // static // default false
      >
        {children}
      </Flickity>
    </>
  );
};

export default Carousel;
