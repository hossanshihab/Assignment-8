import { Link } from 'react-router-dom';


const Gadget = ({ gadget }) => {
  const { product_image, product_title, price, category,product_id } = gadget;
  return (
    <div>
      <div className="card bg-base-100 h-96 shadow-xl m-5">
        <figure className="p-2">
          <img
            className="h-[200px] rounded-2xl"
            src={product_image}
            alt="Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold">{product_title}</h2>
          <p className="font-semibold">Price: {price}$</p>
          <Link to={`/gadget/${product_id}`}><button className="btn bg-purple-700 text-white">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
