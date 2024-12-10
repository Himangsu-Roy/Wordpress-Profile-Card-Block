import { useState } from 'react';
import { RangeControl } from '@wordpress/components';

const MyRangeControl = () => {
    const [columns, setColumns] = useState(2);
    console.log(columns)

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

export default MyRangeControl;