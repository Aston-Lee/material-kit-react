import React from "react";
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
// Material Kit 2 React components
import MKBox from "components/MKBox";

const YouTubeVideo = ({ videoId = "dQw4w9WgXcQ" }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <MKBox component="section" py={12}>
      <Container>
        <div
          style={{ overflow: "hidden", paddingBottom: "56.25%", position: "relative", height: 0 }}
        >
          <iframe
            src={videoSrc}
            frameBorder="0"
            style={{ left: 0, top: 0, height: "100%", width: "100%", position: "absolute" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </MKBox>
  );
};

YouTubeVideo.propTypes = {
  videoId: PropTypes.string, // Defines the prop validation for videoId
};

export default YouTubeVideo;
