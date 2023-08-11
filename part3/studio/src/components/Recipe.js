const RecipeAuthor = () => {
   let authorLink = "https://sallysbakingaddiction.com/about/";
   let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2021/08/Sally-McKenney-680x452.jpg";
   let authorName = "Sally";

   return (
      <div>
         <img src={authorPhoto} alt = "Sally the Baker" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1 and 1/3 cups (166g) all-purpose flour", "1 cup (200g) packed light or dark brown sugar", "2 large eggs, at room temperature", "1/3 cup (80g) unsweetened applesauce", "1 and 1/2 cups (200g) peeled, shredded, and coarsely chopped carrot"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Simply Carrot Cake Cupcakes</h1>
            <p>These carrot cake cupcakes are a scaled down version of my popular carrot cake recipe. You can mix this easy cupcake batter by hand, though I recommend using a mixer to make the cream cheese frosting. The white chocolate carrot topper is optional!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2022/04/carrot-cake-cupcakes-300x300.jpg" alt="Carrot Cake Cupcakes" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}