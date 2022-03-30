import React, {FC} from "react";
import preloader from "../../../assets/images/preloader.svg";


const Preloader: FC = () => {
  return <div>
       <img src={preloader}/>
   </div>
};

export default Preloader;