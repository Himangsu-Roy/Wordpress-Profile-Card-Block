import { Navigator } from '@wordpress/components';

const MyNavigator = () => (
    <Navigator initialPath="/">
        <Navigator.Screen path="/">
            <p>This is the home screen.</p>
            <Navigator.Button path="/child">
                Navigate to child screen.
            </Navigator.Button>
        </Navigator.Screen>
        <Navigator.Screen path="/child">
            <p>This is the child screen.</p>
            <Navigator.BackButton>Go back</Navigator.BackButton>
        </Navigator.Screen>
    </Navigator>
);


export default MyNavigator;