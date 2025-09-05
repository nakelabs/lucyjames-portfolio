import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function Lightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious 
}: LightboxProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
    console.error('Failed to load image:', currentImage);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:text-accent-gold"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-accent-gold"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-accent-gold"
              onClick={onNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </>
        )}

        {/* Loading state */}
        {imageLoading && (
          <div className="flex items-center justify-center w-96 h-96 bg-gray-800 rounded-lg">
            <div className="text-white">Loading...</div>
          </div>
        )}

        {/* Error state */}
        {imageError && (
          <div className="flex flex-col items-center justify-center w-96 h-96 bg-gray-800 rounded-lg text-white">
            <div className="mb-2">Failed to load image</div>
            <div className="text-sm text-gray-400">{currentImage}</div>
          </div>
        )}

        {/* Image */}
        {!imageError && (
          <img
            src={currentImage}
            alt={`Gallery image ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain rounded-lg ${imageLoading ? 'hidden' : 'block'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} of {images.length}
          </div>
        )}

        {/* Debug info */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
          {currentImage}
        </div>
      </div>

      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  );
}