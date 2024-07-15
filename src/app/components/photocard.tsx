import React from 'react';

interface PhotoCardProps {
  imageSrc: string;
  description: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imageSrc, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt={description} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{description}</div>
      </div>
    </div>
  );
};

export default PhotoCard;