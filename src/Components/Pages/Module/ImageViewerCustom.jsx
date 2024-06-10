import { Box, CardMedia } from "@mui/material";
import React, { useState, useCallback } from "react";
import { useImageViewer } from "react-image-viewer-hook";

const ImageViewerCustom = ({ image }) => {
  const { getOnClick, ImageViewer } = useImageViewer();

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [image];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Box>
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              cursor: "pointer",
            }}
          >
            <a
              key={src}
              href={`${src}?auto=compress&cs=tinysrgb&w=1200`}
              onClick={getOnClick(`${src}?auto=compress&cs=tinysrgb&w=1200`)}
            >
              <CardMedia
                component="img"
                src={`${src}?auto=compress&cs=tinysrgb&w=400`}
                alt="example1"
                sx={{
                  maxHeight: { xs: "45vh", md: "50vh", lg: "50vh" },
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
        ))}
      </Box>
      <ImageViewer />
    </>
  );
};

export default ImageViewerCustom;
