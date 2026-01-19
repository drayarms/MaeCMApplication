export const resolveImagePath = (path) => {
	if (!path) return "";

	// already a full URL (S3 etc.)
	if (path.startsWith("http://") || path.startsWith("https://")) return path;

	// if it's already absolute (/assets/..., /img/..., etc.)
	if (path.startsWith("/")) return path;

	// otherwise treat as filename under public/assets
	return `/assets/${path}`;
};




