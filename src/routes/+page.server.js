export const load = async ({ fetch }) => {
	const products = await fetch('https://jsonplaceholder.typicode.com/posts');
	const productData = await products.json();
	return {
		data: 'Hello'
	};
};
