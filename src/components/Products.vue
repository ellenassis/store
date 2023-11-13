<template lang="">
	<div class="mt-12">
		<div class='card-product mt-6'>
			<div v-for='(product, index) in products' :key="index"  class='w-full text-center'>
				<div>
					<div class='product-image relative py-16'>
						<img :src='product.image' alt="" class='h-48 w-full object-contain'  @mouseover='showInfo(index)' @mouseout='hideInfo(index)'>
						<button v-show='active === index' class='btn-buy absolute bottom-4 left-0 right-0'>Add</button>
					</div>
					<h3 class='text-sm font-bold mt-4 h-12'>{{ product.title }}</h3>
					<p class="mt-4 font-bold text-xl">${{ product.price }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.card-product {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	column-gap: 1rem;
	row-gap: 1.5rem;
	justify-content: space-between;
}
.product-image {
	border: 2px solid rgb(238, 238, 238);
}
.product-image:hover {
	
}
.btn-buy {
	background: #F06C9B;
	width: 100px;
	margin: 0 auto;
	padding: 0.2rem 1rem;
	border-radius: 5px;
	color: #ffff;
	font-weight: 700;
}
</style>
<script lang="ts">
import axios from 'axios';


export default {
	name: 'Products',
	data() {
		return {
			products: [],
			active: null
		}
	},
	methods: {
		getProducts() {
			axios.get("https://fakestoreapi.com/products/category/women's clothing").then((data) => {
				this.products = data.data
				console.log(data.data)
			})
		},
		showInfo(index) {
			this.active = index;
		},
		hideInfo(index) {
			this.active = null;
		}
	},
	created() {
		this.getProducts();
	}
}

</script>