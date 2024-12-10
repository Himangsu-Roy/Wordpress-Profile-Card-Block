import {
    SlotFillProvider,
    Slot,
    Fill,
    Panel,
    PanelBody,
} from '@wordpress/components';

const MySlotFillProvider = () => {
    const MyPanelSlot = () => (
        <Panel header="Panel with slot!!!">
            <PanelBody>
                <Slot name="MyPanelSlot" />
            </PanelBody>
        </Panel>
    );

    MyPanelSlot.Content = () => <Fill name="MyPanelSlot">Panel body</Fill>;

    return (
        <SlotFillProvider>
            <MyPanelSlot />
            <MyPanelSlot.Content />
        </SlotFillProvider>
    );
};

export default MySlotFillProvider;