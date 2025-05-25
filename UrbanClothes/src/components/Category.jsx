import "../assets/css/Category.css";
import "../assets/css/Global.css";

const categories = [
  { icon: "../../public/assets/img/icons/dress.svg", title: "Dress & frock", amount: 53 },
  { icon: "../../public/assets/img/icons/coat.svg", title: "Winter wear", amount: 58 },
  { icon: "../../public/assets/img/icons/glasses.svg", title: "Glasses & lens", amount: 68 },
  { icon: "../../public/assets/img/icons/shorts.svg", title: "Shorts & jeans", amount: 84 },
  { icon: "../../public/assets/img/icons/tee.svg", title: "T-shirts", amount: 35 },
  { icon: "../../public/assets/img/icons/jacket.svg", title: "Jacket", amount: 16 },
  { icon: "../../public/assets/img/icons/watch.svg", title: "Watch", amount: 27 },
  { icon: "../../public/assets/img/icons/hat.svg", title: "Hat & caps", amount: 39 },
];

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories.map((cat, index) => (
            <div className="category-item" key={index}>
              <div className="category-img-box">
                <img src={cat.icon} alt={cat.title.toLowerCase()} width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">{cat.title}</h3>
                  <p className="category-item-amount">({cat.amount})</p>
                </div>
                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
