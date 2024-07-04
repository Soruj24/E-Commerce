import Counter from "../Components/Counter";
import PageTitle from "../Components/PageTitle";
import ProductSidebar from "../Components/ProductSidebar";
const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <div className="  container mx-auto">
        <div>
          <ProductSidebar />
        </div>
        <div>
          <h2 className="text-3xl ">List all Products</h2>
          <Counter />
        </div>
      </div>
    </>
  );
};

export default Home;
