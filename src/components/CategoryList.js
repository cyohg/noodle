import Carousel from './Carousel';
import '../styles/CategoryList.css'

const CategoryList = ({ categories }) => {
	return (
		<div>
			<ul className="category-list">
				{categories.map((category, index) => (
					<li key={index} className="list-element">
						<div className="category-title">{category.title}</div>
						<Carousel images={category.images} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoryList;