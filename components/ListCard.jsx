import React, { useState } from "react";
import { Checkbox, cn } from "@nextui-org/react";

export default function ListCard({ props }) {
  const [isSelected, setIsSelected] = React.useState(false);
  console.log(props)
  // useEffect(() =>{
  //   setIsSelected(React.useS)
  // }, [props])

  const handleClick = (event) => {
    if (isSelected) {
    } else {
    }
    setIsSelected(!isSelected)
  }

  return (
    <Checkbox
      classNames={{
        base: cn(
          "inline-flex w-full max-w-md bg-content1",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
        label: "w-full",
      }}
      isSelected={isSelected}
      onClick={handleClick}
    >
      <a href={props.paper.url}>
        <span>
          {props.paper.url}
        </span>
      </a>
    </ Checkbox >
  );
}