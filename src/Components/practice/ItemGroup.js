import {
    __experimentalItemGroup as ItemGroup,
    __experimentalItem as Item,
} from '@wordpress/components';

function MyItemGroup() {
    return (
        // <ItemGroup>
        //     <Item>Code</Item>
        //     <Item>is</Item>
        //     <Item>Poetry</Item>
        // </ItemGroup>

        <ItemGroup size="small">
            <Item>Item text</Item>
        </ItemGroup>
    );
}

export default MyItemGroup;