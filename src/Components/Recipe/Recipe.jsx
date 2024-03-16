import { FaFireAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
const Recipe = ({recipe, handleCook}) => {
    const {recipe_name, recipe_image, short_description, preparing_time, calories, ingredients} = recipe;
    return (
        <div>
            <div className="card border-[#2828281A] border-2 rounded-3xl bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={recipe_image} className="lg:h-52 w-full rounded-3xl" />
  </figure>
  <div className="card-body text-left">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="text-[#878787] text-base">{short_description}</p>
    <h2 className="text-lg font-semibold">Ingredients: {ingredients.length}</h2>
    <ol className="text-[#878787] text-lg list-disc">
      {
        ingredients.slice(0, 4).map((ing, idx) =><li key={idx}>{ing}</li>)
      }
    </ol>
    <div className="divider"></div>
    
    <div className="flex justify-between">
        <div className="flex justify-center items-center gap-3 text-lg">
        <CiClock2 /> <p>{preparing_time} Minutes</p>
        </div>
        <div className="flex justify-center items-center gap-3 text-lg">
        <FaFireAlt /> <p>{calories} Calories</p>
        </div>
        
    </div>
    <div className="card-actions">
    <button onClick={() => handleCook(recipe)} className="btn rounded-full bg-[#0BE58A] text-black px-6">Want to Cook</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Recipe;