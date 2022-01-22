import React from 'react';
import Image from 'next/image';

type Props = {
  src: string | null;
  alt: string;
  onClick?: () => void;
  ContainerClassName?: string;
  className?: string;
  width?: number | null;
  height?: number | null;
  objectFit?: string | any;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | any;
};

export const ImageGenerics: React.FC<Props> = ({
  src,
  alt,
  onClick,
  className,
  ContainerClassName,
  width,
  height,
  objectFit,
  layout,
  ...restProps
}) => {
  return (
    <div
      className={ContainerClassName ? `${ContainerClassName} relative` : ''}
      onClick={onClick}
    >
      <Image
        alt={alt}
        src={src}
        width={width && width}
        height={height && height}
        objectFit={objectFit && objectFit}
        layout={layout && layout}
        className={className}
        {...restProps}
      />
    </div>
  );
};
