import * as React from "react"


import {
  Card,

 
} from "@/components/ui/card"

import Title from "./Title"
import Description from "./Description"
import Media from "./Media"



const TitleDescriptionMedia = ({description,register,setDescription,imageFiles,setImageFiles}:any) => {
  return (
    <div>
      <Card className="p-4">

        <Title register={register}/>

        <Description 
        
        description={description} // Pass the description
        setDescription={setDescription} // Pass the state update function
        />

        <Media
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         />
      </Card>
      
    </div>
  );
};

export default TitleDescriptionMedia;