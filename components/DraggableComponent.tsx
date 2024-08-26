import React, { useRef, useEffect } from 'react';

const DraggableComponent = ({ id, children }) => {
  const ref = useRef(null);

  const handleDragStart = (e) => {
    const rect = ref.current.getBoundingClientRect();
    e.dataTransfer.setData('text/plain', JSON.stringify({
      id,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const left = e.clientX - data.offsetX;
    const top = e.clientY - data.offsetY;
    savePosition(data.id, left, top);
  };

  const savePosition = (id, left, top) => {
    const positions = JSON.parse(localStorage.getItem('positions')) || {};
    positions[id] = { left, top };
    localStorage.setItem('positions', JSON.stringify(positions));
  };

  useEffect(() => {
    const positions = JSON.parse(localStorage.getItem('positions')) || {};
    if (positions[id]) {
      ref.current.style.left = `${positions[id].left}px`;
      ref.current.style.top = `${positions[id].top}px`;
    }
  }, [id]);

  return (
    <div
      ref={ref}
      draggable
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{ position: 'absolute' }}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;
