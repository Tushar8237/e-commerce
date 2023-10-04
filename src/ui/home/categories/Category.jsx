import "./Category.scss";
import { getCategories } from "../../../utils/categories";

const Category = () => {
    const categories = getCategories();

    
    return (
        <div className="category_wrapper">
            <div className="category_section">
                {categories.map((category, index) => {
                    return (
                        <div key={index}>
                            <a href="/category">
                                <img src={category.categoryImg} alt={category.title} />
                                <span>{category.title}</span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;
