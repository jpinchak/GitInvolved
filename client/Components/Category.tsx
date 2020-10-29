import React from 'react';
import { MdRemoveCircle } from 'react-icons/md';
import { useDrop } from 'react-dnd';
import ItemTypes from '../../client/dragitems';

const Category = (props: any) => {

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.DRAGME,
    drop: () => console.log('something'),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <div id={props.id} ref={drop} className="catContainer">{props.catName}
    <MdRemoveCircle className="containericon" onClick={props.deleteCat}/></div>
  )
}

export default Category;