
import { Route, Routes } from "react-router-dom";
import ProductShow from "./components/ProductShow/ProductShow";
import StuffingResult from "./components/StuffingResult/StuffingResult";
import Containers from "./components/Containers/Containers";

const App=()=> {
//   const [products, setProducts] = useState([
//     { name: "Sacks", length: 1000, width: 450, height: 300, weight: 45, quantity: 100, color: "#e42aff" },
//     { name: "Big bags", length: 1000, width: 1000, height: 1000, weight: 900, quantity: 10, color: "#1e3aff" },
//     { name: "Box1", length: 500, width: 200, height: 150, weight: 1, quantity: 1, color: "#f4e04d" },
//   ]);

//   const addProduct = () => {
//     setProducts([
//       ...products,
//       {
//         name: "New",
//         length: 0,
//         width: 0,
//         height: 0,
//         weight: 0,
//         quantity: 0,
//         color: "#cccccc",
//       },
//     ]);
//   };

//   const addGroup=()=>{
//     {!<AddGroup/>}

//   }

//   return (
//     <>
//     <div>
//         <Header/>

//     </div>
    
//     <div className="min-h-screen  from-sky-50 to-white ">
//       <div className="flex justify-center shadow-2xl bg-blue-100 mt-2 rounded-2xl py-5  mx-18">
//     <div className="w-full max-w-6xl">
//     {/* Header */}
//     <div className="flex justify-between items-center mb-4 px-4">
//       <h1 className="text-white text-3xl font-bold ">Group</h1>
//       <button onClick={addGroup} className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
//         + Add Group
//       </button>
//     </div>

//     {/* Product Container */}
//     <div className="rounded-2xl bg-red-100 shadow-2xl shadow-blue-300 p-6 space-y-6">
//       {/* Top Title Row */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">📦 Products</h1>
//       </div>

//       {/* Header Row */}
//       <div className="grid grid-cols-6 gap-6 bg-blue-100 p-4 rounded-lg text-center font-medium text-blue-800">
//         <p>Type</p>
//         <p>Product Name</p>
//         <p>Length</p>
//         <p>Width</p>
//         <p>Height</p>
//         <p>Color</p>
//       </div>

//       {/* Products */}
//       <div className="space-y-6">
//         {products.map((product, index) => (
//           <ProductRow key={index} defaultProduct={product} />
//         ))}
//       </div>

//       {/* Add Product Button */}
//       <div className="text-center">
//         <Button
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition"
//           onClick={addProduct}
//         >
//           + Add Product
//         </Button>
//       </div>
//     </div>
//   </div>
// </div>


//       </div>
//     </>
//   );

return(
  <div>
     <Routes>
          <Route path="/" element={<ProductShow/>}  />
          <Route path="/containers" element={<Containers/>}  />
          <Route path="/results" element={<StuffingResult/>} />
          <Route  path= "/results" element={<StuffingResult/>}/>
        </Routes>
  </div>
)

}

export default App