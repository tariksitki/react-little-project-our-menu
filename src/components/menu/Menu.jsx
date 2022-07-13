import "./Menu.scss";

const Menu = ({ data }) => {
  const {title, id, desc, img, price, category} = data;
  console.log(img);

  return (
    <div className="menu-container">
      <section className="menu-container-left">
        <img src={img} alt={`${title}_name`} />
      </section>

      <section className="menu-container-right">
        <p>{desc}</p>
      </section>
    </div>
  );
};

export default Menu