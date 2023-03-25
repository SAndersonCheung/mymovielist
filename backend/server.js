import mongoose from "mongoose";

export const movieSchema = new mongoose.Schema({
  movieName: String,
  movieRating: Number,
  movieYear: Number,
  movieImg: String,
  movieStatus: String,
});

export const Movie = new mongoose.model("Movie", movieSchema);

const testMovie = new Movie({
  movieName: "cool movie!",
  movieRating: 98,
  movieYear: 2022,
  movieImg: "link",
  movieStatus: "To Watch",
});

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mylist");
  // testMovie.save();
  await Movie.deleteMany({}, console.log("done"));
  Movie.find({}).then((res) => console.log(res));
};

main();
