
import Menu from "../menu/Menu";
import "./Menus.scss";

const Menus = ({data}) => {

  return (
    <section className="menus-main-container" >
      {data.map((item, index) => {
        return <Menu data={data[index]} />;
      })}
    </section>
  )
}

export default Menus