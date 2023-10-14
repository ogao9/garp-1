import React from "react";
import ListCard from "./ListCard";

const ReadingList = ({ list }) => {
  return (
    <div>
      {
        list.map(item => <ListCard key={item.id} props={item} />)
      }
    </div>
  )
}

export default ReadingList