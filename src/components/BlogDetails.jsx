import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import location from "../assets/date.svg";

const BlogDetail = () => {
  const { slug } = useParams();
  const [detailApi, setDetailApi] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(`https://www.api.stanleyestates.in/api/blogs?filters[slug][$eq]=${slug}&populate=deep`);
        const json = await response.json();
        setDetailApi(json.data[0]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchDetail();
  }, [slug]);

  const title = detailApi?.attributes?.Title;
  const rawDate = detailApi?.attributes?.publishedAt;
  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const description = detailApi?.attributes?.seo_description;
  const keywords = detailApi?.attributes?.seo_keywords;
  const image = detailApi?.attributes?.image?.data?.attributes?.url
    ? `https://www.api.stanleyestates.in${detailApi.attributes.image.data.attributes.url}`
    : "";

  return (
    <div className="container mt-5">
      <Helmet>
        <title>{title}</title>
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://www.stanleyestates.in/${slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        ></script>

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            name: title,
            description: description,
            url: `https://www.stanleyestates.in/${slug}`,
            image: image,
            datePublished: detailApi?.attributes?.publishedAt,
            dateModified: detailApi?.attributes?.updatedAt,
            author: {
              "@type": "Organization",
              name: "Stanley Estates"
            }
          })}
        </script>
      </Helmet>

      {/* Blog Content */}
      {detailApi ? (
        <>
          <h1 className="mb-3 blog-head1">{title}</h1>
          <div className='d-flex'><p><span><img height='23px' width='22px' src={location} alt='Details' className='img-fluid '></img></span> &nbsp; <span className='property-cart_para '>{formattedDate}</span></p></div>
          <img
            src={image}
            alt={title}
            className="img-fluid mb-4 w-100"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
          {/* Render rich content */}
          {detailApi.attributes.Content.map((block, idx) => {
            switch (block.type) {
              case "paragraph":
                return <p key={idx} className="blog-about_para">{block.children[0]?.text}</p>;
              case "heading":
                const HeadingTag = `h${block.level || 2}`;
                return <HeadingTag key={idx}>{block.children[0]?.text}</HeadingTag>;
              case "list":
                const ListTag = block.format === "ordered" ? "ol" : "ul";
                return (
                  <ListTag key={idx}>
                    {block.children.map((item, i) => (
                      <li key={i}>{item.children[0]?.text}</li>
                    ))}
                  </ListTag>
                );
              case "image":
                const imgUrl = block.image?.url
                  ? `${block.image.url}`
                  : "";
                return (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={block.image?.alternativeText || "blog image"}
                    className="img-fluid my-4"
                  />
                );
              default:
                return null;
            }
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetail;
