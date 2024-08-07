import React from 'react';
import PhotoCard from './photocard';
import { usePhotos } from '../hooks/usePhotos';

const PhotoGallery: React.FC = () => {
  //let { usePhotosResponse } = usePhotos()

  // since API wont work until I set up SSL on EC2 I need to use photos object
  const photos = [
    { src: './photos/recipePhotos/food-1.jpg', description: 'Photo 1 Description' },
    { src: './photos/recipePhotos/food-2.jpg', description: 'Photo 2 Description' },
    { src: './photos/recipePhotos/food-3.jpg', description: 'Photo 3 Description' },
    { src: './photos/recipePhotos/food-4.jpg', description: 'Photo 4 Description' },
    { src: './photos/recipePhotos/food-5.jpg', description: 'Photo 5 Description' },
    { src: './photos/recipePhotos/food-6.jpg', description: 'Photo 6 Description' },
    { src: './photos/recipePhotos/food-7.jpg', description: 'Photo 7 Description' },
    { src: './photos/recipePhotos/food-8.jpg', description: 'Photo 8 Description' },
    { src: './photos/recipePhotos/food-9.jpg', description: 'Photo 9 Description' }
  ];


  return (
    <div className="flex flex-wrap">
      {/* since API wont work until I set up SSL on EC2 I need to use photos object */}
      {photos.map((photo, index) => (
        <div key={index} className="p-4 w-full md:w-1/2 lg:w-1/3">
          <PhotoCard imageSrc={photo.src} description={photo.description} />
        </div>
      ))}

      {/* {usePhotosResponse.images.length > 0 && usePhotosResponse.images.map((photo, index) => (
        <div key={index} className="p-4 w-full md:w-1/2 lg:w-1/3">
          <PhotoCard imageSrc={photo.src} description={photo.description} />
        </div>
      ))} */}

    </div>
  );
};

export default PhotoGallery;
