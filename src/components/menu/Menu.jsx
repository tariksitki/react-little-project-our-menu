import "./Menu.scss";

const Menu = ({ data }) => {
  const {title, id, desc, img, price, category} = data;

  return (
    <div className="menu-container">
      <section className="menu-container-left">
        <img src={img} alt={`${title}_name`} className="menu-image" />
      </section>

      <section className="menu-container-right">
        <div className="menu-container-right-up">
          <h4 className="menu-title">{title}</h4>
          <h4>${price} </h4>
        </div>
        <div className="menu-container-right-down">
          <p>{desc}</p>
        </div>
      </section>
    </div>
  );
};

export default Menu