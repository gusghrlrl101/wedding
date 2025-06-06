import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {
  const height = window.innerWidth * (4 / 3); // 4:3 비율
  const images = Array.from({ length: 32 }, (_, idx) => {
    const image_path = `/gallery/images/${idx}.jpeg`;
    const thumbnail_path = `/gallery/thumbnails/${idx}.jpeg`;
    return {
      original: image_path,
      thumbnail: thumbnail_path,
      originalHeight: height,
    };
  });

  return (
    <div style={{ padding: "20px", marginTop: "80px" }}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        useBrowserFullscreen={false}
      />
    </div>
  );
}
