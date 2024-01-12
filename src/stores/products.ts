import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'

import axios from "axios";

interface Product {
	id: number;
	title: string;
	image: string;
	price: number;
	quantity: number;
  }

const productsInBagStorage = useLocalStorage('productsInBag', [] as Product[])
export const useProducts = defineStore('product', {
	state: () => ({ products: [] as Product[], productsInBag: productsInBagStorage.value }),
	actions: {
		 fetchProducts() {
			 axios.get("https://fakestoreapi.com/products/category/women's clothing").then(products => {
				this.products = products.data;
			})
		  },
		  addProductInBag(product: Product) {
			const productInBag = this.productsInBag.find((item) => item.id === product.id);

			if(productInBag) {
				productInBag.quantity += 1;
			} else {
				this.productsInBag.push({...product, quantity: 1});
			}

			productsInBagStorage.value = this.productsInBag;
		  },
	},
	getters: {
		totalInBag(): number {
			return this.productsInBag.reduce((total, product) => total + ( product.price * product.quantity), 0);
		}
	}
})