const hideWindowContent = () => {
	let windowContents = $(".window-content");
	for (let windowContent of windowContents) {
		if (!$(windowContent).hasClass("hidden")) {
			$(windowContent).addClass("hidden");
		}
	}
};

const showWindowContent = (id) => {
	let windowContent = $("#" + id);
	if (windowContent.hasClass("hidden")) {
		windowContent.removeClass("hidden");
	}
};

const addItemToList = (item) => {
	const newItem = `<button id="${item.key}" class="list-group-item list-group-item-action">
		${item.title}
	</button>`;
	$("#list-entries-blog").append(newItem);

	$("#" + item.key).on("click", () => {
		showBlogPost(item.key);
	});
};

const showBlogPost = (key) => {
	hideWindowContent();

	const entry = entries[key];

	$("#blog-entry-title").html(entry.title);
	$("#blog-entry-author").html(entry.author);
	$("#blog-entry-comment").html(entry.comments);

	showWindowContent("blog-entry");
};

let entries = [];
const getAllEntries = async () => {
	let request = await fetch(
		"https://blog-a05e0-default-rtdb.europe-west1.firebasedatabase.app/.json"
	);

	if (request.status === 200) {
		let data = await request.json();
		entries = data;
		for (let key of Object.keys(entries)) {
			addItemToList({
				key: key,
				title: entries[key].title,
			});
		}
	}
};

const initialLoad = async () => {
	hideWindowContent();
	await getAllEntries();
	if (entries == {}) {
		showWindowContent("no-entries");
	} else {
		showBlogPost(Object.keys(entries)[0]);
	}
};

const validateAndPost = async () => {
	let title = $("#input-title").val();
	let author = $("#input-author").val();
	let comments = $("#input-comments").val();

	if (title.trim() === "") {
		alert("Tienes que poner un títlo");
		return;
	} else if (author.trim() === "") {
		alert("Tienes que poner un autor");
		return;
	} else if (comments.trim() === "") {
		alert("Tienes que poner un comentario");
		return;
	}

	let request = await fetch(
		"https://blog-a05e0-default-rtdb.europe-west1.firebasedatabase.app/.json",
		{
			method: "POST",
			body: JSON.stringify({
				title: title,
				author: author,
				comments: comments,
			}),
			dataType: "json",
		}
	);

	if (request.status === 200) {
		$("#input-title").val("");
		$("#input-author").val("");
		$("#input-comments").val("");
	}
};

initialLoad();

$("#button-entry-post").on("click", (event) => {
	event.preventDefault();
	validateAndPost();
});

$("#button-new-entry").on("click", (event) => {
	hideWindowContent();
	showWindowContent("new-entry");
});
