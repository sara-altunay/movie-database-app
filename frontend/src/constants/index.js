const presentYear = new Date().getFullYear();

export const INPUTS = [
  { name: "title", label: "Title" },
  { name: "description", label: "Description" },
  { name: "director", label: "Director" },
  { name: "cast", label: "Cast (separate with comma)" },
  { name: "genre", label: "Genres (separate with comma)" },
  { name: "language", label: "Language" },
  { name: "duration", label: "Duration (minutes)", type: "number", min: 3 },
  { name: "rating", label: "Rating", type: "number", min: 1, max: 10 },
  { name: "year", label: "Year", type: "number", min: 1900, max: presentYear },
];
