import React from 'react';
import Image from 'next/image';

type Props = {
  src: string | null;
  alt: string;
  onClick?: () => void;
  className: string;
  extraStyle?: string;
};

export const ImageGenerics: React.FC<Props> = (props) => {
  const { src, alt, onClick, className, extraStyle, ...restProps } = props;

  return (
    <div className={`${className} relative`} onClick={onClick}>
      <Image alt={alt} src={src} className={extraStyle} {...restProps} />
    </div>
  );
};
