import { useState } from 'react';
import {
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';

const MyControlledRadioRadioGroup = () => {
    const [checked, setChecked] = useState('25');

    console.log(checked)
    return (
        <RadioGroup label="Width" onChange={setChecked} checked={checked}>
            <Radio __next40pxDefaultSize value="25">25%</Radio>
            <Radio __next40pxDefaultSize value="50">50%</Radio>
            <Radio __next40pxDefaultSize value="75">75%</Radio>
            <Radio __next40pxDefaultSize value="100">100%</Radio>
        </RadioGroup>
    );
};


export default MyControlledRadioRadioGroup;