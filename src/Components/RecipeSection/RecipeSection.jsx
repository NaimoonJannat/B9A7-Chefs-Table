import { useState } from "react";
import CookSection from "../CookSection/CookSection";
import Recipies from "../Recipies/Recipies";


const RecipeSection = () => {
    const [cook, setCook] = useState([]);
    const handleCook = food =>{
        const newCook = [...cook, food];
        setCook(newCook);
    } 
    return (
        <div>
            <div className="space-y-4 lg:w-2/3 mx-auto lg:my-10 text-center">
                <h1 className="text-4xl font-semibold text-[#150B2B]">Our Recipes</h1>
                <p className="text-base text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <Recipies handleCook={handleCook}></Recipies>
                <CookSection cook={cook}></CookSection>
            </div>
            
        </div>
    );
};

export default RecipeSection;