import { IProduct } from '@/models/product';
import { FunctionComponent, useEffect, useState } from 'react';

export enum ProductFormActionType {
  edit = 'EDIT',
  create = 'CREATE',
}

type NewProductFormProps = {
  selectedProduct: IProduct;
  onCTAClick: (product: IProduct) => void;
  action: ProductFormActionType;
};

const NewProductForm: FunctionComponent<NewProductFormProps> = ({
  selectedProduct,
  onCTAClick,
  action,
}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Please enter a name for the product');
      return;
    }

    if (price <= 0 || isNaN(price)) {
      alert('Please enter a valid price for the product');
      return;
    }

    onCTAClick({ name, price } as IProduct);

    setName('');
    setPrice(0);
  };

  useEffect(() => {
    if (selectedProduct) {
      setName(() => selectedProduct.name);
      setPrice(() => selectedProduct.price);
    }
  }, [selectedProduct]);

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="bg-bggray p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Header Text</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        </p>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-800 font-bold mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter product price"
          />
        </div>
        <button className="w-full rounded-2xl bg-black px-6 py-2 text-xl font-medium uppercase text-white">
          {action === ProductFormActionType.edit ? 'Save' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default NewProductForm;
