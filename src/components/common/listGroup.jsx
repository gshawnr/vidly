import React from "react";
import PropType from "prop-types";

const ListGroup = (props) => {
  const { items, selectedItem, handleItemSelect, valueProp, textProp } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProp]}
          className={
            item[valueProp] === selectedItem[valueProp]
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => handleItemSelect(item)}
        >
          {item[textProp]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propsTypes = {
  items: PropType.shape({
    valueProp: "string",
    textProp: "string",
  }).isRequired,
  selectedItem: PropType.string.isRequired,
  handleItemSelect: PropType.func.isRequired,
};

ListGroup.defaultProps = {
  valueProp: "_id",
  textProp: "name",
};

export default ListGroup;
