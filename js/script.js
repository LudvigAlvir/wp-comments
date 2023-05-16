// Example data to send, post id must match existing post
const comment = JSON.stringify({
	post: 29,
	/*
	 *** Can add more fields than post and content, but must have those two ***
	 */
	content: "Test comment",
});

async function postComment() {
	console.log("post running");
	const res = await fetch(
		"https://*YourWordPressSite*/wp-json/wp/v2/comments",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: comment,
		}
	);

	console.log(res);
	const data = await res.json();
	console.log(data);
}
