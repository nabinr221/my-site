import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Seo = ({
  title,
  description,
  canonicalUrl,
  noIndex = false,
  keywords = [],
  author = "Nabin R. Chaudhary",
  image = "/default-og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  socialProfiles = {},
  structuredData,
  children,
}) => {
  const fullTitle = `${title} | Portfolio`;
  const baseUrl = import.meta.env.BASE_URL || "nabinratgainya.com.np";
  const fullImageUrl = `${baseUrl}${image}`;

  const getStructuredData = () => {
    if (!structuredData) return null;

    if (Array.isArray(structuredData)) {
      return structuredData.map((data, i) => (
        <script key={`structured-data-${i}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ));
    }

    return (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    );
  };

  return (
    <>
      <Helmet>
        {/* Core Metadata */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content={author} />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content={noIndex ? "noindex,nofollow" : "index,follow"}
        />

        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="My Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl} />
        {socialProfiles.twitter && (
          <>
            <meta name="twitter:site" content={`@${socialProfiles.twitter}`} />
            <meta
              name="twitter:creator"
              content={`@${socialProfiles.twitter}`}
            />
          </>
        )}

        {/* Article Specific */}
        {type === "article" && publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {type === "article" && modifiedTime && (
          <meta property="article:modified_time" content={modifiedTime} />
        )}

        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>

      {/* Structured Data */}
      {getStructuredData()}

      {/* Children for additional customization */}
      {children}
    </>
  );
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  noIndex: PropTypes.bool,
  keywords: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(["website", "article", "profile"]),
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  socialProfiles: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
  }),
  structuredData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  children: PropTypes.node,
};

Seo.defaultProps = {
  noIndex: false,
  keywords: [],
  author: "Nabin R. Chaudhary",
  image: "/default-og-image.jpg",
  type: "website",
  socialProfiles: {},
};

export default Seo;
