"use client";
import React, { useEffect, useState } from "react";
import Loader from "../component/loader";
import Image from "next/image";

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: string;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const Clientside = () => {
  const [data, setData] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Set loading state to true initially

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const recipe = await response.json();
      console.log(recipe);
      setData(recipe.recipes || []);
      setLoading(false); 
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-purple-200"> {/* Apply bg-purple-200 here */}
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <Loader />
        </div>
      ) : (
        <>
          <div
            className="flex justify-center items-center font-bold text-5xl my-5 bg-purple-200"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>Asfa&apos;s Recipes</h1>
          </div>
          <div
            className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {data.map((recipe) => (
              <div
                key={recipe.id}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-60 object-cover"
                />
                {/* Content Section */}
                <div className="p-5 flex flex-col gap-3">
                  <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
                  <p className="text-gray-600">
                    {recipe.instructions.slice(0, 2).join(", ")}...
                  </p>
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold mt-3 text-[30px] py-3">
                      Ingredients:
                    </h3>
                    <ul className="list-disc list-inside text-black text-sm text-center">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Clientside;
