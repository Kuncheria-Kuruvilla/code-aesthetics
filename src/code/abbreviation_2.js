function movieRelationScore(movie1, movie2) {
  const GENRE_WEIGHT = 0.4;
  const YEAR_WEIGHT = 0.1;
  const DIRECTOR_WEIGHT = 0.2;
  const WRITER_WEIGHT = 0.3;
  let score = 0;
  if (movie1.genre == movie2.genre) {
    score += GENRE_WEIGHT;
  }
  if (movie1.year == movie2.year) {
    score += YEAR_WEIGHT;
  }
  if (movie1.director == movie2.director) {
    score = DIRECTOR_WEIGHT;
  }
  for (const writer in movie1.writers) {
    if (movie2.writers.indexof(writer) !== -1) {
      score += WRITER_WEIGHT;
      break;
    }
  }
  return score;
}
