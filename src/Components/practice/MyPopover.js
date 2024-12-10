// import { useState } from 'react';
// import { Button, Popover } from '@wordpress/components';

// const MyPopover = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const toggleVisible = () => {
//         setIsVisible((state) => !state);
//     };

//     return (
//         <Button variant="secondary" onClick={toggleVisible}>
//             Toggle Popover!
//             {isVisible && <Popover>Popover is toggled!</Popover>}
//         </Button>
//     );
// };


// export default MyPopover;


import { useState } from 'react';
import { Button, Popover } from '@wordpress/components';

const MyPopover = () => {
    // Use internal state instead of a ref to make sure that the component
    // re-renders when the popover's anchor updates.
    const [popoverAnchor, setPopoverAnchor] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisible = () => {
        setIsVisible((state) => !state);
    };

    console.log(isVisible, popoverAnchor)

    return (
        <>
            <p ref={setPopoverAnchor}>Popover s anchor</p>
            <Button variant="secondary" onClick={toggleVisible}>
                Toggle Popover!
            </Button>
            {
                isVisible && (
                    <Popover
                        anchor={popoverAnchor}
                    >
                        Popover is toggled!
                    </Popover>
                )
            }
        </>
    );
};


export default MyPopover;
