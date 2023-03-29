// import { useEffect } from "react";

// export const useNewMovie = (newMovie) => {
//   const sendMovie = async () => {
//     return await post(`${process.env.REACT_APP_DB_LINK}/new_movie`, {
//       newMovie,
//     })
//       .then((res) => {
//         optionalArgs?.callback && optionalArgs?.callback();
//         return setResponse({
//           data: {
//             success: res.data.success,
//           },
//           loading: false,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         setResponse({
//           data: {
//             success: false,
//           },
//           loading: true,
//           error: error,
//         });
//       });
//   };

//   useEffect(() => {
//     sendMovie();
//   }, [keywords]);

//   return sendMovie();
// };
