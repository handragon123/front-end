import { useState } from 'react';

const initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleMoveCircle() {
    const next = shapes.map((shape) => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });

    setShapes(next);
  }

  return (
    <>
      <button type="button" onClick={handleMoveCircle}>
        원만 50px씩 아래로 이동하기
      </button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            backgroundColor: 'red',
            width: 20,
            height: 20,
            borderRadius: shape.type === 'circle' ? '50%' : '',
          }}
        ></div>
      ))}
    </>
  );
}
