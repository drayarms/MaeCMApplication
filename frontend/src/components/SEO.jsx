import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image,
  url
}) {
  const siteName = "MAE CM Services";

  return (
    <Helmet>
      {/* Title */}
      <title>{title} | {siteName}</title>

      {/* Basic Meta */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

