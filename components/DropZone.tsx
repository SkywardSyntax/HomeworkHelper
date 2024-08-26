import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ id, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      savePosition(id, left, top);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const savePosition = (id, left, top) => {
    const positions = JSON.parse(localStorage.getItem('positions')) || {};
    positions[id] = { left, top };
    localStorage.setItem('positions', JSON.stringify(positions));
  };

  return (
    <div ref={drop} style={{ position: 'relative', opacity: isOver ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default DropZone;
