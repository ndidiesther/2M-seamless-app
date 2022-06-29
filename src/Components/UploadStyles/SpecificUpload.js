import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const SpecificUpload = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const { state } = location;
    let orderImage = location.state?.src;
    let chooseSex = location.state?.id;
    let styleName = location.state?.stylename;
  
    // console.log(location.state.stylename)
    // console.log(location.state.id);
    // console.log(location.state)
    useEffect(() => {
      orderImage = location.state?.src;
    }, [orderImage]);
  return (
    <div>

    </div>
  )
}

export default SpecificUpload