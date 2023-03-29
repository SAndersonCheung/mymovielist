// import { useEffect } from "react";

// export const useGetMovies = () => {
//   const fetchMovies = async () => {
//     return await get(`mongodb://127.0.0.1:27017/mylist/issues`, {})
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

//   return response;
// };
