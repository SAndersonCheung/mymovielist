import mongoose from "mongoose";
import Express from "express";
import { Movie } from "./models/movie.js";
// import routes from "./routes/routes.js";
const app = Express();
const port = 5500;

app.use(Express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});

app.set("json spaces", 2);
app.get("/", (req, res) => {
  res.json({
    Endpoints: {
      "/new_movie": {
        params: [
          { movieName: { description: "Movie Title.", type: "[string]" } },
          {
            movieRating: {
              description: "Rating of the Movie out of 10",
              type: "[number]",
            },
          },
          {
            movieYear: {
              description: "Year of Movie Release.",
              type: "[number]",
            },
          },
          {
            movieImg: {
              description: "A poster for the movie.",
              type: "[string]",
            },
          },
          {
            movieStatus: {
              description: "User's relationship towards the movie.",
              type: "[string]",
            },
          },
        ],
      },
      "/movies": {
        params: [{}],
      },
    },
  });
});

const testMovie = new Movie({
  movieName: "The Avengers",
  movieRating: 7.33,
  movieYear: 2012,
  movieImg: "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
  movieStatus: "To Watch",
});

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mylist");
  const database = mongoose.connection;
  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });

  // app.use("/api", routes);
  //testMovie.save();
  //await Movie.deleteMany({}, console.log("done"));
  Movie.find({}).then((res) => console.log(res));
};

main();
