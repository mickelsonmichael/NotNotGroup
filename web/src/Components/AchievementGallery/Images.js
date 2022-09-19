const imageContext = require.context(
  "../../../public",
  true,
  /memories(\/|\\).*\.(png|jpg|jpeg|gif|svg|mp4)$/i
);

const images = imageContext.keys().map((img) => ({
  src: img,
}));

console.log(images);

export default images;
