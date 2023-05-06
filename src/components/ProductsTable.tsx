import { IProduct } from '@/models/product';
import React, { FunctionComponent } from 'react';

type ProductTableProps = {
  products: IProduct[];
  onEditClick: (product: IProduct) => void;
  onDeleteClick: (product: IProduct) => void;
};

const ProductsTable: FunctionComponent<ProductTableProps> = ({
  products,
  onEditClick,
  onDeleteClick,
}) => (
  <table className="w-full text-center">
    <thead>
      <tr className="text-gray-800 border-b border-gray-300">
        <th className="p-4 font-bold uppercase bg-slate-200 border border-black">
          Name
        </th>
        <th className="p-4font-bold uppercase bg-slate-200 border border-black">
          Price
        </th>
        <th className=" p-4font-bold uppercase bg-slate-200 border border-black">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <td className="p-4 border border-black">{product.name}</td>
          <td className="p-4 border border-black">${product.price}</td>
          <td className="p-4 border border-black">
            <div className="flex items-center justify-center">
              <button
                className="bg-black hover:bg-black-700 text-white py-2 px-4 rounded mr-2 "
                onClick={() => onEditClick(product)}
              >
                Edit
              </button>
              <button
                className="bg-white hover:bg-white-700 text-black border border-black py-2 px-4 rounded"
                onClick={() => onDeleteClick(product)}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductsTable;
