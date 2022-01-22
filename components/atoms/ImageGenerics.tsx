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
};

export const ImageGenerics: React.FC<Props> = (props) => {
  const {
    src,
    alt,
    onClick,
    className,
    ContainerClassName,
    width,
    height,
    objectFit,
    ...restProps
  } = props;

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
        className={className}
        {...restProps}
      />
    </div>
  );
};
