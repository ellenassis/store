<template lang="">
<div class="footer py-4 mt-10">
	<div class="footer-content text-center">
		<p>© {{currentYear}} | Ellen Penteado de Assis</p>
	</div>
</div>
</template>
<script lang="ts">
export default {
	data() {
		return {
			currentYear: new Date().getFullYear()
		}
	}
}
</script>
<style>
.footer {
	background: #F9B9B7;
}
</style>
  