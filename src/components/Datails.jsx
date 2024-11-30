import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Breadcrumbs } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import Detailedpage from './Detailedpage';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import wp from "../assets/watsappicon.png";
import wp1 from "../assets/call.png";

function Details() {
    const { slug } = useParams();
    const [propertyId, setPropertyId] = useState(null);
    const [detailApi, setDetailApi] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fetch the property ID based on the slug
    useEffect(() => {
        const fetchId = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/properties?filters[slug][$eq]=${slug}`);
                const id = res.data.data[0]?.id;
                setPropertyId(id);
            } catch (error) {
                console.error("Error fetching property ID:", error);
            }
        };

        fetchId();
    }, [slug]);

    // Fetch the detailed property information using the ID
    useEffect(() => {
        if (propertyId) {
            const fetchDetails = async () => {
                try {
                    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/properties/${propertyId}?populate=deep`);
                    setDetailApi(res.data.data);
                } catch (error) {
                    console.error("Error fetching property details:", error);
                }
            };

            fetchDetails();
        }
    }, [propertyId]);
    return (
        <>
        <HelmetProvider>
         <Helmet>
    <title>{detailApi?.attributes?.title}</title>
    <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
    <meta name="description" content={detailApi?.attributes?.seo_description} />
    <meta name="keywords" content={detailApi?.attributes?.seo_keywords} />
    <meta property="og:title" content={detailApi?.attributes?.title} />
<meta property="og:description" content={detailApi?.attributes?.seo_description} />
<meta property="og:image" content={detailApi?.attributes?.image} />
<meta property="og:url" content={`https://www.stanleyestates.in/${slug}`} />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={detailApi?.attributes?.title} />
<meta name="twitter:description" content={detailApi?.attributes?.seo_description} />
<meta name="twitter:image" content={detailApi?.attributes?.image} />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous" />
    
    {/* Schema Markup */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": "${detailApi?.attributes?.title}",
          "description": "${detailApi?.attributes?.seo_description}",
          "url": "${window.location.href}",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "${detailApi?.attributes?.address}",
            "addressLocality": "${detailApi?.attributes?.address}",
            "addressRegion": "${detailApi?.attributes?.address}",
            "postalCode": "${detailApi?.attributes?.address}",
            "addressCountry": "IN"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "${detailApi?.attributes?.price}",
            "url": "${window.location.href}"
          },
          "image": "${process.env.REACT_APP_API_URL}${detailApi?.attributes?.images?.data[0]?.attributes?.url}",
          "propertyType": "${detailApi?.attributes?.type}"
        }
      `}
    </script>
    </Helmet>

            <section className='details-bg'>
                <div className='container '>
                    <div className="row">
                        <div className="col breadcrumb_align ">
                            <Breadcrumbs aria-label="breadcrumb " className='pt-5 details-Div'>
                                <Link to="/" underline="hover" color="#949494" className='breadcrum_txt'>
                                    Home
                                </Link>
                                <Link to="/properties" underline="hover" color="#949494" className='breadcrum_txt'>
                                    Property Listings
                                </Link>
                                <Typography color="#000000" className='breadcrum_txt02'> {detailApi?.attributes?.title}</Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                    <Detailedpage detailApi={detailApi} />
                    <a href="https://wa.me/+919620675555?text=Hello%20!" target="_blank" className="wtbtn  btn-circle  fixedbutton-whatsapp1" id="webcall" role="button" type="button">
          <i className="fa fa-whatsapp"></i>
          <img src={wp} alt="watsapp icon" className="wapp-wh" />
        </a>
        <a href="tel:+919620675555" className="wtbtn  btn-circle  fixedbutton-whatsapp1" id="call" role="button" type="button">
          <img src={wp1} alt="call icon" className="wapp-wh1" />
        </a>
                </div>
            </section >
            </HelmetProvider>
        </>
    );
}

export default Details;
