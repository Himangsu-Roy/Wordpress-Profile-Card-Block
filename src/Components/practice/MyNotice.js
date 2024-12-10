import { Notice } from '@wordpress/components';

const MyNotice = () => {
    // Define errorDetails
    const errorDetails = 'Unable to fetch data from the server.';

    return (
        <Notice status="error">
            <p>
                An error occurred: <code>{errorDetails}</code>.
            </p>
        </Notice>
    );
};

export default MyNotice;