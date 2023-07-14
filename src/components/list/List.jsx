import React from "react";

const List = () => {
  return (
    <div className="lista">
      <ol className="lista__ol">
        {list.map((tarea) => (
          <li className="lista__ol-li" key={tarea.id}></li>
        ))}
      </ol>
    </div>
  );
};

export default List;
