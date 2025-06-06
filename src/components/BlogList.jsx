// src/pages/BlogList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import location from "../assets/date.svg";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get('https://www.api.stanleyestates.in/api/blogs?&populate=deep')
            .then((res) => {
                setBlogs(res.data.data);
            })
            .catch((err) => console.error('Error fetching blogs:', err));
    }, []);


    // Format date as: April 4, 2025
    const formatDate = (rawDate) => {
        return rawDate
            ? new Date(rawDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            : '';
    };

    const extractTextFromContent = (content) => {
        if (!Array.isArray(content)) return "";

        // Gather all "text" from children
        const text = content
            .flatMap((block) =>
                block.children?.map((child) => child.text) || []
            )
            .join(" ");

        const words = text.split(" ");
        return words.slice(0, 70).join(" ") + (words.length > 70 ? "..." : "");
    };


    return (
        <div>
            {/* Hero Section */}
            <div
                className="blog-hero"
                style={{
                  
                    backgroundImage: 'url("https://www.api.stanleyestates.in/uploads/9_a09a2489db.jpg")',
                }}
            >
                <div class="color-blur-overlay" bis_skin_checked="1"></div>
                <h1 class="title hero-h1">Blogs</h1>
            </div>
        <div className="container mx-auto p-4 space-y-6">
            {blogs.map((blog) => {
                const { Title, publishedAt, slug, image } = blog.attributes;
                const imageUrl = `https://www.api.stanleyestates.in${image?.data?.attributes?.formats?.medium?.url || image?.data?.attributes?.url
                    }`;
                const formattedDate = new Date(publishedAt).toLocaleDateString();

                return (
                    <div key={blog.id} className="d-lg-flex blogcard flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={Title}
                            className="w-desktop-img w-full md:w-1/3 object-cover h-64 md:h-auto"
                        />
                        <div className="p-4 md:w-2/3">
                            <h2 className="text-2xl blog-title mb-2">{Title}</h2>
                            <div className='d-flex'><p><span><img height='23px' width='22px' src={location} alt='Details' className='img-fluid '></img></span> &nbsp; <span className='property-cart_para '>{formatDate(publishedAt)}</span></p></div>
                            <p className="mb-4 blog-about_para">
                                {extractTextFromContent(blog.attributes.Content)}
                            </p>

                            <Link
                                to={`/blog/${slug}`}
                                className="text-blue-600 h4-heading text-decoration-none"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div></div>
    );
};

export default BlogList;
