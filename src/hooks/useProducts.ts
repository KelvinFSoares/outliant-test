import { IProduct } from '@/models/product';
import { useState } from 'react';

type UseProducts = {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  filteredProducts: IProduct[];
  isSearching: boolean;
  onSearchProducts: (searchParam: string) => void;
  selectedProduct: IProduct;
  setSelectedProduct: (productIndex: number) => void;
  addProduct: (product: IProduct) => void;
  onEditProductClick: (product: IProduct) => void;
  editProduct: (newProduct: IProduct) => void;
  deleteProduct: (product: IProduct) => void;
};

const useProducts = (): UseProducts => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(-1);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  return {
    products: products,
    setProducts: (products: IProduct[]) => {
      setProducts(products);
    },
    filteredProducts: filteredProducts,
    isSearching: isSearching,
    onSearchProducts: (searchParam: string) => {
      if (searchParam === '') {
        setIsSearching(false);
        setFilteredProducts(() => [...products]);
      } else {
        setIsSearching(true);
        setFilteredProducts(() => [
          ...products.filter((product) => product.name.includes(searchParam)),
        ]);
      }
    },
    selectedProduct:
      selectedProductIndex > -1 ? products[selectedProductIndex] : undefined,
    setSelectedProduct: (productIndex: number) => {
      setSelectedProductIndex(productIndex);
    },
    addProduct: (product: IProduct) => {
      setProducts((currentValue) => [...currentValue, product]);
    },
    onEditProductClick: (product: IProduct) => {
      setSelectedProductIndex(products.indexOf(product));
    },
    editProduct: (newProduct: IProduct) => {
      let productsCopy = [...products];
      productsCopy[selectedProductIndex] = newProduct;
      setProducts(() => productsCopy);
      setSelectedProductIndex(-1);
      setIsSearching(false);
    },
    deleteProduct: (product: IProduct) => {
      let productsCopy = [...products];
      const index = products.indexOf(product);
      if (index > -1) {
        productsCopy.splice(products.indexOf(product), 1);
        setProducts(() => productsCopy);
      }
    },
  };
};

export default useProducts;
