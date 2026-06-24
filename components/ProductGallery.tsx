"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  name: string;
}

export function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const validImages = images.filter(img => img && img.length > 0);
  const [selectedImage, setSelectedImage] = useState(validImages[0] || "");

  if (validImages.length === 0) {
    return (
      <div className="overflow-hidden rounded-2xl bg-[#F8F5EF] flex items-center justify-center h-96">
        <p className="text-zinc-500">No images available</p>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden rounded-2xl bg-[#F8F5EF]">
        <Image
          src={selectedImage}
          alt={name}
          width={800}
          height={800}
          className="h-auto w-full object-cover"
        />
      </div>

      {validImages.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {validImages.map((image) => (
            <button
            type="button"
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-xl border-2 ${
                selectedImage === image
                  ? "border-[#056839]"
                  : "border-[#E5E7EB]"
              }`}
            >
              <Image
                src={image}
                alt={name}
                width={150}
                height={150}
                className="h-24 w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}