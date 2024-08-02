// Rating.tsx
import React from 'react';
import Image from 'next/image';

interface StarProps {
  src: string;
  alt?: string;
}

const Star: React.FC<StarProps> = ({ src, alt = 'Star' }) => (
  <Image src={src} alt={alt} width={30} height={30}  />
);

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Star key={i} src="/star.png" alt="" />);
  }

  return <div className="flex space-x-2">{stars}</div>;
};

export default Rating;
