
import "./Home.scss";
import data from "../helper/data";
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Menus from "../components/menus/Menus";
import { useState } from "react";
import Footer from "../components/footer/Footer";


const Home = () => {
    const categories = ["all", ...new Set(data.map((item) => item.category))]
    const [categoryState, setCategoryState] = useState("all");
    const filteredData = data.filter((item) => item.category === categoryState);

    const [numberOfMenu, setNumberOfMenu] = useState(9);
    
  return (
    <main className="main-container">
      <Header />
      <Categories
        categories={categories}
        setCategoryState={setCategoryState}
        setNumberOfMenu={setNumberOfMenu}
      />
      <Menus
        data={categoryState === "all" ? data : filteredData}
        numberOfMenu={numberOfMenu}
      />
      <Footer />
    </main>
  );
}

export default Home;