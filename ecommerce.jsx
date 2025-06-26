import './ecommerce.css';

function Ecommerce() {
  const products = [
    {
      product_id: 22,
      product_name: "Black Pant",
      product_price: "$3",
      product_image: ""
    },
    {
      product_id: 23,
      product_name: "T-shirts",
      product_price: "$2",
      product_image: ""
    },
    {
      product_id: 24,
      product_name: "Cargo Pant",
      product_price: "$5",
      product_image: ""
    },
    {
      product_id: 25,
      product_name: "Casual Shirts",
      product_price: "$2",
      product_image: ""
    }
  ];

  return (
    <div className="one">
      <header className="two">
        <h1 className="three">Zeroo</h1>
      </header>

      <section className="news">
        <h2 className="four">Featured Products</h2>
        <div className="five">
          {products.map((product) => (
            <div key={product.product_id} className="six">
              <img
                src={product.product_image}
                alt={product.product_name}
                className="seven"
              />
              <div className="ads">
                <h3 className="eight">{product.product_name}</h3>
                <p className="nine">{product.product_price}</p>
                <button className="ten">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="final">
        Good bye
      </footer>
    </div>
  );
}

export default Ecommerce;
