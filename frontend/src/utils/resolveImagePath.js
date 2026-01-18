/*export const IMAGE_BASE_PATH = "../assets/"; // Change this later to S3 base URL, etc.

export const resolveImagePath = (path) => {
	if (!path) return "";
	if (path.startsWith("http://") || path.startsWith("https://")) return path;
	return `${IMAGE_BASE_PATH}${path}`;
};*/



/*export const resolveImagePath = (relativePath) => {
	if (!relativePath) return "";

	// If it's already a URL or already imported module, just return it
	if (typeof relativePath !== "string") return relativePath;
	if (relativePath.startsWith("http://") || relativePath.startsWith("https://")) return relativePath;

	// Strip any "../assets/" if you include it sometimes
	const filename = relativePath.replace(/^(\.\.\/assets\/)/, "");

	// Webpack-friendly dynamic require
	try {
		return require(`../assets/${filename}`);
	} catch (err) {
		console.warn("Missing asset:", filename);
		return "";
	}
};*/





//Where to put the “additional_images” files
//Move them to:
//public/assets/<all additional_images files>
//Now resolveImagePath("foo.jpg") becomes:
//dev: /assets/foo.jpg
//prod: <your deployed base>/assets/foo.jpg

/*
export const IMAGE_BASE_PATH = "../assets/"; // Change this later to S3 base URL, etc.

//export const IMAGE_BASE_PATH =
	//process.env.REACT_APP_IMAGE_BASE_URL || `${process.env.PUBLIC_URL}/assets/`;

export const resolveImagePath = (path) => {
	if (!path) return "";

	// already a full URL (S3 etc.)
	if (path.startsWith("http://") || path.startsWith("https://")) return path;

	// already an absolute app path (/assets/..., /img/..., etc.)
	if (path.startsWith("/")) return `${process.env.PUBLIC_URL}${path}`;

	// default: treat it as a filename under public/assets
	return `${IMAGE_BASE_PATH}${path}`;
};*/


export const resolveImagePath = (path) => {
	if (!path) return "";

	// already a full URL (S3 etc.)
	if (path.startsWith("http://") || path.startsWith("https://")) return path;

	// if it's already absolute (/assets/..., /img/..., etc.)
	if (path.startsWith("/")) return path;

	// otherwise treat as filename under public/assets
	return `/assets/${path}`;
};




