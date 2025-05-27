import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {
  const height = window.innerWidth * (4 / 3); // 4:3 비율
  const images = Array.from({ length: 16 }, (_, idx) => {
    const path = `/gallery/image_${idx}.jpg`;
    return {
      original: path,
      thumbnail: path,
      originalHeight: height,
    };
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>📷 사진첩</h2>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        useBrowserFullscreen={false}
        // useTranslate3D={false}
        // lazyLoad={true}
        // showIndex={true}
        // slideInterval={1000}
      />
    </div>
  );
}
