<template>
	<h1>hello</h1>
</template>

<script setup lang="ts">
import axios from 'axios'
import qs from 'qs'

axios
	.post(
		'/api/user_router_list',
		qs.stringify({
			uid: 2,
		})
	)
	.then((res) => {
		console.log(res)
	})
</script>

<style scoped></style>
