import {
    NavigableMenu,
    TabbableContainer,
    Button,
} from '@wordpress/components';

function onNavigate(index, target) {
    console.log(`Navigates to ${index}`, target);
}

const MyNavigableContainer = () => (
    <div>
        <span>Navigable Menu:</span>
        <NavigableMenu onNavigate={onNavigate} orientation="horizontal">
            <Button variant="secondary">Item 1</Button>
            <Button variant="secondary">Item 2</Button>
            <Button variant="secondary">Item 3</Button>
        </NavigableMenu>

        <span>Tabbable Container:</span>
        <TabbableContainer onNavigate={onNavigate}>
            <Button variant="secondary" tabIndex="0">
                Section 1
            </Button>
            <Button variant="secondary" tabIndex="0">
                Section 2
            </Button>
            <Button variant="secondary" tabIndex="0">
                Section 3
            </Button>
            <Button variant="secondary" tabIndex="0">
                Section 4
            </Button>
        </TabbableContainer>
    </div>
);

export default MyNavigableContainer;