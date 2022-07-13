import "./Categories.scss";

const Categories = ({ categories }) => {
  console.log(categories);

  return <section className="category-container" >{categories.map((item) => {
    return (
        <h3>{item}</h3>
    )
  })}</section>;
};

export default Categories;
