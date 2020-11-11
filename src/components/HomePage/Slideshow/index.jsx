import React from "react";
import PropTypes from "prop-types";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { makeStyles } from "@material-ui/core";

Slideshow.propTypes = {
  slideImages: PropTypes.array
};

Slideshow.defaultProps = {
  slideImages: []
};

const useStyles = makeStyles(() => ({
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "40vw"
  }
}));

function Slideshow(props) {
  const classes = useStyles();
  const { slideImages } = props;
  return (
    <div>
      <Slide easing="ease">
        {slideImages?.map((item, index) => {
          return (
            <div className="each-slide" key={index}>
              <div
                className={classes.image}
                style={{ backgroundImage: `url(${item})` }}
              ></div>
            </div>
          );
        })}

        {/* <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div> */}
      </Slide>
    </div>
  );
}

export default Slideshow;
