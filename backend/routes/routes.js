import Express from "express";
import Movie from "../models/movie.js";
const router = Express.Router();
module.exports = router;

//Post Method
router.post("/new_movie", jsonParser, async (req, res) => {
  const movie = req.body.movie;

  const MovieInstance = new Movie();

  MovieInstance.movieName = movie.movieName;
  MovieInstance.movieRating = movie.movieRating;
  MovieInstance.movieYear = movie.movieYear;
  MovieInstance.movieImg = movie.movieImg;
  MovieInstance.movieStatus = movie.movieStatus;

  MovieInstance.save()
    .then(() => {
      res.json({ success: true, error: undefined });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: error });
    });
});

//Get all Method
router.get("/getAll", async (req, res) => {
  await Movie.find()
    .then(() => {
      res.json({ success: true, error: undefined });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: error });
    });
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Model.findByIdAndDelete(id)
    .then(() => {
      res.json({ success: true, error: undefined });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: error });
    });
});

//import { Movie } from "./models/movie.js";
// const app = express();
// app.use(cors());
// const jsonParser = bodyParser.json();

// pp.set("json spaces", 2);
// app.get("/", (req, res) => {
//   res.json({
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
