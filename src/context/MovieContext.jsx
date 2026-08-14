

// import { createContext, useContext, useState } from "react";

// const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [addMovies, setAddMovies] = useState([]);

//   // Add Movie
//   const addMovie = (movie) => {
//     const exists = addMovies.find(
//       (item) => item.id === movie.id
//     );

//     if (!exists) {
//       setAddMovies([...addMovies, movie]);
//     }
//   };

//   // Remove Movie
//   const removeMovie = (id) => {
//     setAddMovies(
//       addMovies.filter((movie) => movie.id !== id)
//     );
//   };

//   const movieCount = addMovies.length;

//   return (
//     <MovieContext.Provider
//       value={{
//         addMovies,
//         addMovie,
//         removeMovie,
//         movieCount,
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };

// export const useMovieContext = () =>
//   useContext(MovieContext);


import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [addMovies, setAddMovies] = useState([]);

  // Add Movie
  const addMovie = (movie) => {
    const exists = addMovies.find(
      (item) => item.id === movie.id
    );

    if (!exists) {
      setAddMovies([...addMovies, movie]);
    }
  };

  // Remove Movie
  const removeMovie = (id) => {
    setAddMovies(
      addMovies.filter((movie) => movie.id !== id)
    );
  };

  const movieCount = addMovies.length;

  return (
    <MovieContext.Provider
      value={{
        addMovies,
        addMovie,
        removeMovie,
        movieCount,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () =>
  useContext(MovieContext);