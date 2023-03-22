const movie = {
  name: "The Whale",
  year: "2022",
  imgUrl:
    "https://en.wikipedia.org/wiki/The_Whale_(2022_film)#/media/File:TheWhalePoster.jpg",
};

export default function Movie() {
  return (
    <div className="Movie">
      <h3 className="Movie-Title">{movie.name}</h3>
      <p>{"Released " + movie.year}</p>
      <img
        className="Movie-Picture"
        src={movie.imgUrl}
        alt={"Poster for " + movie.name}
      />
    </div>
  );
}
