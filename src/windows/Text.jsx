import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const TextFile = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
  const paragraphs = Array.isArray(description) ? description : [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-6 space-y-4 text-gray-700">
        {image ? (
          <div className="flex justify-center">
            <img
              src={image}
              alt={name}
              className="w-full rounded-lg object-cover"
            />
          </div>
        ) : null}
        {subtitle ? (
          <h3 className="text-lg font-semibold text-gray-900">{subtitle}</h3>
        ) : null}
        <div className="space-y-3 text-sm leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={`${name}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
