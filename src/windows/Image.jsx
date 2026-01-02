import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl, image } = data;
  const src = imageUrl || image;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="preview">
        {src ? (
          <img
            src={src}
            alt={name}
            className="w-full h-auto max-h-[70vh] object-contain rounded"
          />
        ) : (
          <p className="p-4 text-sm text-gray-500">No image available.</p>
        )}
      </div>
    </>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageFileWindow;
