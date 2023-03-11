
import { useEffect, useState } from "react";
const RecipeAPI = () =>{
      const [recipeItem, setRecipeItem] = useState([]);
      const GetRecipeInfo = async () => {
            try {
                let endpoint = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=ce3ef991&app_key=ba6c7269ffa9832a4a49b132ef4b4551&mealType=Breakfast`;
                let res  = await fetch(endpoint);
                let data = await res.json();
              
                setRecipeItem(data.hits);

               } catch (error) {
                      console.log(error);
               }  
          };

useEffect( () => {
      GetRecipeInfo();
},[]);

      return (
            <>
            <h1>Recipe Items</h1>
            <div className="row">
                  {recipeItem.map((listRecipe,index) =>{
                       return (
                       
                        <div className="col-md-3">
                        <div id={index} className="card m-2 p-2">
                             <div className="card-img mb-2">
                              <img src={listRecipe.recipe.image} alt={listRecipe.recipe.label} className="w-100 rounded" />
                              </div> 
                        
                        <div className="card-body">
                        <h6 className="card-title"> {listRecipe.recipe.label}</h6>
                      
                        </div>
                        </div>
                        </div>
                        
                       )
                  })
                  }
                
            </div>
         
           
            </>
      );

}

export default RecipeAPI;