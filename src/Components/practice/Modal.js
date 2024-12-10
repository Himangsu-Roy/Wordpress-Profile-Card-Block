import { IsolatedEventContainer } from '@wordpress/components';

const Modal = () => {
    const clickHandler = () => {
        console.log('Component clicked!');
    };

    return (
        <IsolatedEventContainer
            className="component-some_component"
            onClick={clickHandler}
        >
            <p>This is an isolated component</p>
        </IsolatedEventContainer>
    );
};

export default Modal;