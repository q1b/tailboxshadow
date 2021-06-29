<template>
	<div
		class="
			inline-flex
			relative
			rounded-md
			shadow
			w-full
			items-center
			justify-center
		"
	>
		<button
			:class="[
				Class,
				` before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-md before:opacity-80 hover:before:opacity-100 before:transition-opacity before:duration-700 before:ease-in-out text-base font-semibold border-2  inline-flex items-center justify-center w-full px-0.5 py-1 xsss:px-1 xsss:py-1 xss:px-2 xss:py-1.5 xs:px-3 xs:py-2 sm:px-5  sm:py-3 rounded-md`,
			]"
		>
			<slot name="content"></slot>
		</button>
	</div>
</template>

<script>
export default {
	name: "Button",
	props: ["Class"],
	data() {
		return {};
	},
};
</script>

<style lang="css" scoped></style>
