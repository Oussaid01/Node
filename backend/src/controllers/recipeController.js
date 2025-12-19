import Recipe from "../models/Recipe.js"


export const getAllRecipies = async (_,res)=>{
  try{
      const recipies = await Recipe.find().sort({createdAt:-1})
      res.status(200).json(recipies)
  } catch(error){
      console.error("Error in getAllRecipies controller: ",error)
      res.status(500).json({message : "Internal server error "})
  }
}


export const getRecipeById = async (req,res)=>{
  try{
      const recipe = await Recipe.findById(req.params.id)
      if (!recipe) {return res.status(404).json({message : 'Recipe not found'})}
      res.status(200).json(recipe)
  } catch(error){
      console.error("Error in getRecipeById controller: ",error)
      res.status(500).json({message : "Internal server error "})
  }
}





export async function createRecipe (req,res) {
  try{
      const {title,desc,steps,isPublished,creationDate} = req.body
      const newRecipe = new Recipe({title,desc,steps,isPublished,creationDate})
      const savedRecipe = await newRecipe.save()
      res.status(201).json(savedRecipe)
  }catch(error){
      console.error("Error in createRecipe controller: ",error)
      res.status(500).json({message : "Internal server error "})
  }
}

export async function updateRecipe (req,res) {
  try{
      const {title,desc,steps,isPublished,creationDate} = req.body
      const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id,{title,desc,steps,isPublished,creationDate},{new:true,})

      if (!updatedRecipe){
          return res.status(404).json({message : "Recipe not found"})
      }

      res.status(200).json({message : "Recipe updated successfully",updatedRecipe})
  }catch(error){
      console.error("Error in updateRecipe controller: ",error)
      res.status(500).json({message : "Internal server error "})
  }
}



export async function deleteRecipe (req,res) {
  try{  
      const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id)
      if (!deletedRecipe){return res.status(404).json({message : 'Recipe not found'})}
     res.status(200).json({message : "u just deleted the recipe"})
  }catch(error){
      console.error("Error in deleteRecipe controller: ",error)
      res.status(500).json({message : "Internal server error "})
  }
}