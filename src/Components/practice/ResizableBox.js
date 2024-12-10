// import { ResizableBox } from '@wordpress/components';



// const Edit = (props) => {

//     const {
//         attributes: { height, width },
//         setAttributes,
//         toggleSelection,
//     } = props;

//     return (
//         <ResizableBox
//             size={{
//                 height: 10,
//                 width: 10,
//             }}
//             minHeight="50"
//             minWidth="50"
//             enable={{
//                 top: false,
//                 right: true,
//                 bottom: true,
//                 left: false,
//                 topRight: false,
//                 bottomRight: true,
//                 bottomLeft: false,
//                 topLeft: false,
//             }}
//             onResizeStop={(event, direction, elt, delta) => {
//                 setAttributes({
//                     height: height + delta.height,
//                     width: width + delta.width,
//                 });
//                 toggleSelection(true);
//             }}
//             onResizeStart={() => {
//                 toggleSelection(false);
//             }}
//         />
//     );
// };

// export default Edit;