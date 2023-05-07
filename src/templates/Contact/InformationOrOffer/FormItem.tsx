import React from 'react';

interface FormItemProps {
  isActive?: boolean;
  img: React.ReactNode;
  text: string;
  onSelect: () => void;
}
export const FormItem: React.FC<FormItemProps> = ({
  isActive,
  img,
  text,
  onSelect,
}) => (
  <div className="item-container">
    <div
      className={`item-body ${isActive ? 'active' : ''}`}
      onClick={() => {
        onSelect();
      }}
    >
      <div className="img">{img}</div>
      <h3>{text}</h3>
    </div>
  </div>
);
