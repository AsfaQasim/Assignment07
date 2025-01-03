import React from "react";
import Link from "next/link";


interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Server = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const parsedResponse: IProduct[] = await response.json();

  console.log("products >>>", parsedResponse);

  return (
    <>
    <div className="bg-purple-200">
      <div className="flex justify-center items-center font-bold text-5xl my-5 bg-purple-200">
        <h1 className="bg-purple-200">Products</h1>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-purple-200">
        {parsedResponse.map((pro) => (
          <div
            key={pro.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <Link href =  {`/products/${pro.id}`}>
            {/* Image Section */}
            <img
              src={pro.image}
              alt={pro.title}
              className="w-full h-60 object-cover"
            />
            </Link>

            {/* Content Section */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-bold text-gray-800">{pro.title}</h2>
              <p className="text-gray-600">{pro.description}</p>
              <p className="text-lg font-semibold text-gray-800">
                Price: ${pro.price}
              </p>
              <p className="text-gray-600">
                <strong>Category:</strong> {pro.category}
              </p>
              <p className="text-gray-600">
                <strong>Rating:</strong> {pro.rating.rate} ⭐ ({pro.rating.count}{" "}
                reviews)
              </p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Server;