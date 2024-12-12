import { useState } from "react";
import { RangeControl } from "@wordpress/components";

const MyUsefulRangeControl = () => {
  const [columns, setColumns] = useState(2);
  console.log(columns);

  return (
    <RangeControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      label="Columns"
      value={columns}
      onChange={(value) => setColumns(value)}
      min={2}
      max={10}
    />
  );
};

export default MyUsefulRangeControl;

// const marks = [
//     {
//         value: 0,
//         label: '0',
//     },
//     {
//         value: 1,
//         label: '1',
//     },
//     {
//         value: 8,
//         label: '8',
//     },
//     {
//         value: 10,
//         label: '10',
//     },
// ];

// const MyRangeControl() {
//     return ( <RangeControl marks={ marks } min={ 0 } max={ 10 } step={ 1 } /> )
// }
