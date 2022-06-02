// import React, { useState } from "react";

// const FileUploader = () => {
//   const [file, setFile] = useState();
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }
//   const hiddenFileInput = React.useRef(null);

//   const handleClick = (event) => {
//     hiddenFileInput.current.click();
//   };
//   // const handleChange = event => {
//   //   const fileUploaded = event.target.files[0];
//   //   props.handleFile(fileUploaded);
//   // };
//   return (
//     <div>
//       <button onClick={handleClick}>Upload a file</button>
//       <input
//         type="file"
//         ref={hiddenFileInput}
//         onChange={handleChange}
//         style={{ display: "none" }}
//       />
//            <img src={file} />
//     </div>
//   );
// }

// export default FileUploader;

import React, { useCallback, useState } from 'react';


function Test() {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  return (
    <div className="App">

    </div>
  );
}

export default Test
