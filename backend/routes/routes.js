import Express from "express";
import Movie from "../models/movie.js";
const router = Express.Router();
module.exports = router;
const jsonParser = bodyParser.json();

//Post Method
newMovie = async (req, res) => {
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
};

//Get all Method
getAll = async (req, res) => {
  await Movie.find()
    .then(() => {
      res.json({ success: true, error: undefined });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: error });
    });
};

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
