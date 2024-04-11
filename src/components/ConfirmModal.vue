<template>
	<div class="modal">
		<div class="modal-card">
			<h2 class="text-2xl text-center">Are you sure you want to delete?</h2>
			<div class="modal-btns">
				<button class="btn-close" @click="closeModal">Close</button>
				<button class="btn-confirm" @click="confirm">Confirm</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ConfirmModal',
	methods: {
		confirm() {
			this.$emit('confirm');
		},
		closeModal() {
			this.$emit('closeModal')
		}
	}
}
</script>

<style>
.modal {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh; 
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);
}
.modal-card {
	width: 500px;
	padding: 2rem;
	background-color: white;
	border-radius: 8px;
	position: absolute;
	top: 50%; 
	left: 50%;
	transform: translate(-50%, -50%);
}
.modal-btns {
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 1rem;
}
.modal-btns button {
	padding: 5px 8px;
	border: none;
	border-radius: 8px;
}
.btn-confirm {
	background: #E72929;
	color: white;
}
.btn-close {
	color: gray;
	border: 1px solid gray;
}
</style>