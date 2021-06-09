import "./styles.css";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/imageSlice";
import Button from "../Button";
import ImageStats from "../Stats";

function ImageGrid() {
  const dispatch = useDispatch();
  const { images, errorMessage, loading } = useSelector(
    (state) => state.imageData
  );

  const loadImages = useCallback(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    loadImages();
  }, [dispatch, loadImages]);

  return (
    <div className="content">
      {errorMessage && <div className="error">{errorMessage}</div>}
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <ImageStats imageId={image.id} />
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      <Button onClick={() => !loading && loadImages()} loading={loading}>
        Load More
      </Button>
    </div>
  );
}

export default ImageGrid;
