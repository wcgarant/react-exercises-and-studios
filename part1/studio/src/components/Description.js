import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.eatingwell.com/author/catherine-jessee/";
    let authorPhoto = "https://www.eatingwell.com/thmb/M5kGH_tFxN_SrUGGOcg4nr5Wrvc=/94x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/catherine-jessee-square-4af146024bcf4b3dba07b148c1dd18cd.jpg";
    let authorName = "Catherine Jessee";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Catherine Jessee" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Eating Well</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Loaded Broccoli & Chicken Casserole Is a Winning, High-Protein Dinner</h1>
                    <p>This delightfully creamy broccoli and chicken casserole is a satisfying dinner that is sure to please a crowd. To keep prep simple, look for bags of pre-cut broccoli florets. If you like a little spice, swap out the Monterey Jack cheese for pepper Jack instead.</p>
                    <RecipeAuthor />
                </div>
            </div>
        )
    }
}

export default RecipeDescription;

