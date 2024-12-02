import { useEffect, useState } from "react";
import Gadget from "./../Gadget/Gadget";

const AllGadget = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  useEffect(() => {
    fetch("./alldata.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);

        // Extract categories from the data
        const uniqueCategories = [
          ...new Set(data.map((gadget) => gadget.category))
        ];
        setCategories(uniqueCategories);
      });
  }, []);


  // gadgets based on the selected category
  const filteredGadgets = selectedCategory === "All Product"
    ? gadgets
    : gadgets.filter((gadget) => gadget.category === selectedCategory);

  return (
    <div className="flex w-11/12 mx-auto">
      {/* Sidebar */}
      <div className="w-1/5  p-5 mt-32">
        <h2 className="text-2xl font-bold mb-4 text-center">All Categories</h2>
        <ul className="space-y-2  border-sky-300 border-2 p-3 rounded-3xl bg-gray-400">
          <li
            className={`p-2 rounded-lg cursor-pointer ${
              selectedCategory === "All Product" ? "bg-purple-500 text-white" : "bg-gray-200 hover:bg-purple-200"
            }`}
            onClick={() => setSelectedCategory("All Product")}
          >
            All Product
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`p-2 rounded-lg cursor-pointer ${
                selectedCategory === category ? "bg-purple-500 text-white" : "bg-gray-200 hover:bg-purple-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4">
        <h1 className="text-5xl font-bold text-center p-10 text-purple-500">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
          {filteredGadgets.length > 0 ? (
            filteredGadgets.map((gadget, index) => (
              <Gadget key={index} gadget={gadget}></Gadget>
            ))
          ) : (
            <p className="text-center text-gray-500">No gadgets found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllGadget;
