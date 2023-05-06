import { useEffect } from 'react';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import NewProductForm, {
  ProductFormActionType,
} from '@/components/NewProductForm';
import ProductsTable from '@/components/ProductsTable';
import SearchBar from '@/components/SearchBar';
import useProducts from '@/hooks/useProducts';

export const Products = () => {
  const {
    products,
    isSearching,
    filteredProducts,
    selectedProduct,
    addProduct,
    onSearchProducts,
    onEditProductClick,
    editProduct,
    deleteProduct,
  } = useProducts();

  return (
    <>
      <NavBar />
      <div className="container mx-auto w-100 flex flex-col">
        <div className="w-1/2 flex items-center	mt-20">
          <h1 className="text-3xl font-bold mb-0 mr-8 text-center">Products</h1>
          <SearchBar onSearch={onSearchProducts} />
        </div>

        <div className="container flex justify-between m-auto mt-12 mb-48">
          <div className="w-1/2 h-full flex justify-center">
            <ProductsTable
              products={isSearching ? filteredProducts : products}
              onEditClick={onEditProductClick}
              onDeleteClick={deleteProduct}
            />
          </div>
          <div className="w-1/2 h-full flex justify-end">
            <NewProductForm
              onCTAClick={selectedProduct ? editProduct : addProduct}
              selectedProduct={selectedProduct}
              action={
                selectedProduct
                  ? ProductFormActionType.edit
                  : ProductFormActionType.create
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
