// import React, { useEffect, useState } from "react";
// import { createWorker } from "tesseract.js";
// import Texts from "../images/text.jpg";

// export const Solomon = () => {
//   //   const T = require("tesseract.js");

//   const parse = require("mrz").parse;

//   let mrz = [
//     "I<GHAAK26764674<<<<<<<<<<<<<<<",
//     "9802263M3001156GHA<<<<<<<<<<<8",
//     "MENSAH<SOLOMON<<MICHAEL<EKOW<<",
//   ];

//   const [updated, setUpdated] = useState([{}]);

//   var result = parse(mrz);
//   setUpdated(result.details);

//   //   console.log(updated);

//   //   T.recognize({ Texts }, "eng", { logger: (e) => console.log(e) }).then((out) =>
//   //     console.log(out)
//   //   );
//   const worker = createWorker();

//   const convertImagetoText = async () => {
//     (await worker).load();
//     (await worker).loadLanguage("eng");
//     (await worker).initialize("eng");

//     const { data } = (await worker).recognize(Texts);
//     console.log(data.text);
//   };

//   useEffect(
//     () => {
//       convertImagetoText();
//     },
//     { Texts }
//   );
// };
