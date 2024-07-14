const output = document.querySelector("#output");
const button = document.querySelector("#get-post-btn");

async function showPost() {
	try {
		const res = await fetch("http://localhost:8000/api/posts");
		if (!res.ok) {
			throw new Error("fail to fetch post ");
		}

		const posts = await res.json();
		output.innerHTML = "";

		posts.forEach((post) => {
			const postEl = document.createElement("div");
			postEl.textContent = post.title;
			output.appendChild(postEl);
		});
	} catch (error) {
      console.log(`error fetching post`, error);
      
   }
}


button.addEventListener('click' , showPost)