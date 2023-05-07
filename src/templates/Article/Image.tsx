import React from 'react';

export const Image: React.FC<{ url: string; title: string }> = ({
  url,
  title,
}) => <img src={url} alt={title} />;
