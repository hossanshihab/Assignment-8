
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductList = () => {
  const productDetails = [
    { "product_id": "1", "product_title": "Apple MacBook Air M1", "price": 999.99 },
    { "product_id": "2", "product_title": "Apple iPhone 15 Pro", "price": 1299.99 },
    { "product_id": "3", "product_title": "Samsung Galaxy S23 Ultra", "price": 1199.99 },
    { "product_id": "4", "product_title": "Dell XPS 13", "price": 1099.99 },
    { "product_id": "5", "product_title": "Samsung Galaxy Book 3", "price": 849.99 },
    { "product_id": "6", "product_title": "Apple MacBook Pro 14-inch", "price": 1999.99 },
    { "product_id": "7", "product_title": "iPhone 14", "price": 899.99 },
    { "product_id": "8", "product_title": "Samsung Galaxy Z Fold 5", "price": 1799.99 },
    { "product_id": "9", "product_title": "Samsung Galaxy Tab S9", "price": 799.99 },
    { "product_id": "10", "product_title": "Wireless Earbuds", "price": 49.99 },
    { "product_id": "11", "product_title": "Portable Power Bank", "price": 25.99 }
  ];

  const labels = productDetails.map(product => product.product_title);
  const prices = productDetails.map(product => product.price);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Product Prices ($)',
        data: prices,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Prices',
      },
    },
  };

  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-center p-4 font-bold'>Product List</h2>
      <ul>
        {productDetails.map(product => (
          <li key={product.product_id}>
            {/* {product.product_title}: ${product.price} */}
          </li>
        ))}
      </ul>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProductList;