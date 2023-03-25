const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mylist");
};
main();

export const Movie = new mongoose.model("Movie", movieSchema);

export const movieSchema = new mongoose.Schema({
  movieName: String,
  movieRating: Number,
  movieYear: Number,
  movieImg: String,
  movieStatus: String,
});

const testMovie = new Movie({
  movieName: "cool movie!",
  movieRating: 98,
  movieYear: 2022,
  movieImg: "link",
  movieStatus: "To Watch",
});
