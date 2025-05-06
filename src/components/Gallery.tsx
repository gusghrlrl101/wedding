import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = Array.from({ length: 15 }, (_, idx) => {
  const path = `/gallery/image_${idx}.jpg`;
  return {
    original: path,
    thumbnail: path,
    originalHeight: 600,
    // originalWidth: 1200,
  };
});

export default function Gallery() {
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
