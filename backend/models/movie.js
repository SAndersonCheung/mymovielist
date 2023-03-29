import mongoose from "mongoose";

export const movieSchema = new mongoose.Schema({
  movieName: String,
  movieRating: Number,
  movieYear: Number,
  movieImg: String,
  movieStatus: String,
});

movieSchema.index({ title: 1 }, { unique: true });

export const Movie = new mongoose.model("Movie", movieSchema);
