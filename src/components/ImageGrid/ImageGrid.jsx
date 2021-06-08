import "./styles.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchImages } from "../../store/imageSlice";

const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";
function ImageGrid() {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then((res) => res.json())
      .then((imageData) => {
        setImages(imageData);
      });
  }, []);

  function handleClick() {
    dispatch(fetchImages());
  }

  return (
    <div className="content">
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      <button onClick={handleClick}>Load more...</button>
    </div>
  );
}
export default ImageGrid;
