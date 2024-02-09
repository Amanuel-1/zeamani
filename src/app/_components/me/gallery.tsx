'use client'

import React, { useEffect, useState } from 'react';
import { sanityFetch } from 'fireup/lib/client';
import { urlForImage } from 'fireup/lib/image';
import { SGallery } from 'fireup/lib/types';
import { groq } from 'next-sanity';
import moment from 'moment';
import GalleryDialog from './galleryDialog';

const Gallery = () => {
  const [gallery, setGallery] = useState<SGallery[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type=="gallery"]{
        ...,
      }`;

      try {
        const data: SGallery[] = await sanityFetch({ query: query, tags: ['post', 'articles'] });
        setGallery(data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div className="p-5 sm:p-8 z-0">
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {gallery.length > 0 &&
          gallery.map((item: SGallery, index: number) => (
               <GalleryDialog key={index} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
