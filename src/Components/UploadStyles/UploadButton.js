import React, { useState } from "react";
import UploadStyles from "../UploadStyles/UploadStyles";
import { ButtonContainer } from "../Shared/ButtonComponent";

const UploadButton = () => {
  const [uploadStyles, setUploadStyle] = useState(false);
  return (
    <div>
      <div>
        <ButtonContainer onClick={() => setUploadStyle(true)}>
          Upload Your Style
        </ButtonContainer>
      </div>
      <UploadStyles {...{ uploadStyles, setUploadStyle }} />
    </div>
  );
};

export default UploadButton;
