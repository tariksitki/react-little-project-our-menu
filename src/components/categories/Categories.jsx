import "./Categories.scss";

const Categories = ({ categories, setCategoryState, setNumberOfMenu }) => {
  const handleClick = (e) => {
    // console.log(e.target.innerHTML);
    setCategoryState(e.target.innerHTML);
    if (e.target.innerHTML === "all") {
      setNumberOfMenu(9)
    } else {
      setNumberOfMenu(3);
    }
  };

  return (
    <section className="category-container">
      {categories.map((item, index) => {
        return (
          <h3 className="category" onClick={handleClick} key={index}>
            {item}
          </h3>
        );
      })}
    </section>
  );
};

export default Categories;
