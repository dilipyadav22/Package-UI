import React, { useState } from "react";
import ProductRow from "../ProductRow/ProducatRow";
import Header from "../Header/Header";
import SuBheader from "../SubHeader/SuBheader";
import { initialGroup, initialProduct } from "../../Utils/Utils";
import {motion} from "motion/react"
const ProductShow = () => {
  const [groups, setGroups] = useState([initialGroup]);

  const addGroup = () => {
    const newGroup = {
      id: groups.length + 1,
      products: [initialProduct],
    };
    setGroups([...groups, newGroup]);
  };

  const addProductToGroup = (groupId) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? { ...group, products: [...group.products, initialProduct] }
          : group
      )
    );
  };

  return (
    <>
      <Header />
      <SuBheader />

      < motion.div
  
              animate={{
                scale:[0,1],
                rotate:[0,,0],
                 }}
                transition={{duration:4}}
             
       className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 py-4">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl space-y-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <h1 className="text-blue-800 text-2xl sm:text-3xl font-bold">
                Groups
              </h1>
              <button
                onClick={addGroup}
                className="transition-all flex justify-center active:scale-95 shadow bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-sm sm:text-base"
              >
                + Add Group
              </button>
            </div>

            {groups.map((group) => (
              <motion.div
              animate={{
                scale:[0,1],
                rotate:[0,,0],
                 }}
                transition={{duration:3}}
             
                key={group.id}
                className="rounded-2xl bg-red-100 shadow-2xl shadow-blue-300 p-4 sm:p-6 space-y-6"
              >
                <div className="flex justify-between items-center flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    📦 Group #{group.id}
                  </h2>
                </div>

                <div className="hidden md:grid grid-cols-11 bg-blue-100 rounded-lg p-4 font-medium text-blue-800 text-sm">
                  <p>Type</p>
                  <p>Product Name</p>
                  <p>Length</p>
                  <p>Width</p>
                  <p>Height</p>
                  <p>Weight</p>
                  <p>Weight</p>
                  <p>Color</p>
                  <p>Slack</p>
                  <p className="col-span-2 text-center">Actions</p>
                </div>

                <div className="space-y-4 overflow-x-auto">
                  {group.products.map((product, index) => (
                    <ProductRow key={index} defaultProduct={product} />
                  ))}
                </div>

                <div className="text-right">
                  <button
                    onClick={() => addProductToGroup(group.id)}
                    className="transition-all active:scale-95 shadow bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-sm sm:text-base"
                  >
                    + Add Product
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductShow;
