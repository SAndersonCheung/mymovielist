// import { useEffect } from "react";

// export const useGetMovies = () => {
//   const fetchMovies = async () => {
//     return await get(`${process.env.REACT_APP_DB_LINK}/movies`, {})
//       .then((res) =>
//         setResponse({ data: res.data, loading: false, error: undefined })
//       )
//       .catch((error) => {
//         console.log(error);
//         setResponse({ data: [], loading: false, error: error });
//       });
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, [keywords]);

//   return fetchMovies();
// };
