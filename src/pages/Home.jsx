
import "./Home.scss";
import data from "../helper/data";
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Menus from "../components/menus/Menus";


const Home = () => {
    const categories = ["all", ...new Set(data.map((item) => item.category))]

  return (
    <main className="main-container">
      <Header />
      <Categories categories={categories} />
      <Menus data = {data} />
    </main>
  );
}

export default Home