import mongoose from "mongoose";
import Express from "express";
const app = Express();
const port = 3000;

var movies = [
  { name: "express", url: "https://github.com/expressjs/express" },
  { name: "stylus", url: "https://github.com/learnboost/stylus" },
  { name: "cluster", url: "https://github.com/learnboost/cluster" },
];

// example: http://localhost:3000/api/repos/?api-key=foo
app.get("/api/movies", function (req, res) {
  res.send(movies);
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

export const movieSchema = new mongoose.Schema({
  movieName: String,
  movieRating: Number,
  movieYear: Number,
  movieImg: String,
  movieStatus: String,
});

export const Movie = new mongoose.model("Movie", movieSchema);

const testMovie = new Movie({
  movieName: "The Whale",
  movieRating: 8.045,
  movieYear: 2022,
  movieImg: "link",
  movieStatus: "To Watch",
});

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mylist");
  // testMovie.save();
  // await Movie.deleteMany({}, console.log("done"));
  Movie.find({}).then((res) => console.log(res));
};

main();

//import { Movie } from "./models/movie.js";
// const app = express();
// app.use(cors());
// const jsonParser = bodyParser.json();

// pp.set("json spaces", 2);
// app.get("/", (req, res) => {
//   res.json({
//     Welcome: `Welcome user ${req.ip}`,
//     Endpoints: {
//       "/new_movie": {
//         params: [
//           { movieName: { description: "Movie Title.", type: "[string]" } },
//           {
//             movieRating: {
//               description: "Rating of the Movie out of 10",
//               type: "[number]",
//             },
//           },
//           {
//             movieYear: {
//               description: "Year of Movie Release.",
//               type: "[number]",
//             },
//           },
//           {
//             movieImg: {
//               description: "A poster for the movie.",
//               type: "[string]",
//             },
//           },
//           {
//             movieStatus: {
//               description: "User's relationship towards the movie.",
//               type: "[string]",
//             },
//           },
//         ],
//       },
//       "/movies": {
//         params: [{}],
//       },
//     },
//   });
// });

// app.post("/new_movie", jsonParser, async (req, res) => {
//   const movie = req.body.movie;

//   const MovieInstance = new Movie();

//   MovieInstance.movieName = movie.movieName;
//   MovieInstance.movieRating = movie.movieRating;
//   MovieInstance.movieYear = movie.movieYear;
//   MovieInstance.movieImg = movie.movieImg;
//   MovieInstance.movieStatus = movie.movieStatus;

//   MovieInstance.save()
//     .then(() => {
//       res.json({ success: true, error: undefined });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.json({ success: false, error: error });
//     });
// });

// app.get("/movies", jsonParser, async (req, res) => {
//   res.send(Movie.find({}));
// });

// app.delete("/remove_movie", (req, res) => {
//   res.send("Got a DELETE request at /user");
// });
