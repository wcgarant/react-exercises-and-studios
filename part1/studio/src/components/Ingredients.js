import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    let ingredients = ["6 cups cooked short-grain brown rice", "6 cups fresh broccoli florets, roughly chopped into 1-inch pieces", "¼ cup unsalted chicken broth", "1 (8 ounce) package reduced-fat cream cheese, softened", "¾ cup shredded Monterey Jack cheese"]

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}