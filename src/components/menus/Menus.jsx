
import Menu from "../menu/Menu";
import "./Menus.scss";

const Menus = ({ data, numberOfMenu }) => {
  console.log(numberOfMenu);
  return (
    <section
      className="menus-main-container"
      style={{
        flexDirection: numberOfMenu === 3 && "column",
        alignItems: numberOfMenu === 3 && "center",
      }}
    >
      {data.map((item, index) => {
        return <Menu data={data[index]} key={item.id} />;
      })}
    </section>
  );
};

export default Menus