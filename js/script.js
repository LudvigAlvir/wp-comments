// Example data to send, post id must match existing post
const comment = JSON.stringify({
	post: 29,
	/*
    *** Can add more fields than post and content, but must have those two ***
    author_name: "YourName",
	author_email: "YourName@Email.com",*/
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

//Example for fetching all comments for post with id 29
async function getComments() {
	const res = await fetch(
		"https://*YourWordPressSite*/wp-json/wp/v2/comments?post=29"
	);
	const data = await res.json();
	data.forEach((comment) => {
		document.querySelector("body").innerHTML += `
        <h2>${comment.author_name}</h2>
        ${comment.content.rendered}
        <hr>
    `;
	});
}
