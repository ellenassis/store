import { defineStore } from "pinia";
import axios from "axios";

interface Product {
	id: number;
	title: string;
	image: string;
	price: number;
	total: Number;
  }

export const useProducts = defineStore('product', {
	state: () => ({ products: [] as Product[], productsInBag: [] as Product[] }),
	actions: {
		 fetchProducts() {
			 axios.get("https://fakestoreapi.com/products/category/women's clothing").then(products => {
				this.products = products.data;
			})
		  },
		  addProductInBag(product: Product) {
			this.productsInBag.push(product);
		  },
	},
	getters: {
		totalInBag(): number {
			return this.productsInBag.reduce((total, product) => total + product.price, 0);
		}
	}
})