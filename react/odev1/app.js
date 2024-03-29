import axios from "axios";

export default async function getUser(user_id) {
	const { data: user } = await axios(
		"https://jsonplaceholder.typicode.com/users/" + user_id
	);

	const { data: posts } = await axios(
		"https://jsonplaceholder.typicode.com/posts?userId=" + user_id
	);

	user.posts = posts;

	console.log(user);
}
