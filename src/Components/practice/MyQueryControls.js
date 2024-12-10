import { useState } from 'react';
import { QueryControls } from '@wordpress/components';

// const QUERY_DEFAULTS = {
//     category: 1,
//     categories: [
//         {
//             id: 1,
//             name: 'Category 1',
//             parent: 0,
//         },
//         {
//             id: 2,
//             name: 'Category 1b',
//             parent: 1,
//         },
//         {
//             id: 3,
//             name: 'Category 2',
//             parent: 0,
//         },
//     ],
//     maxItems: 20,
//     minItems: 1,
//     numberOfItems: 10,
//     order: 'asc',
//     orderBy: 'title',
// };

// const MyQueryControls = () => {
//     const [query, setQuery] = useState(QUERY_DEFAULTS);
//     const { category, categories, maxItems, minItems, numberOfItems, order, orderBy } = query;

//     const updateQuery = (newQuery) => {
//         setQuery({ ...query, ...newQuery });
//     };

//     return (
//         <QueryControls
//             {...{ maxItems, minItems, numberOfItems, order, orderBy }}
//             onOrderByChange={(newOrderBy) => updateQuery({ orderBy: newOrderBy })}
//             onOrderChange={(newOrder) => updateQuery({ order: newOrder })}
//             categoriesList={categories}
//             selectedCategoryId={category}
//             onCategoryChange={(newCategory) => updateQuery({ category: newCategory })}
//             onNumberOfItemsChange={(newNumberOfItems) =>
//                 updateQuery({ numberOfItems: newNumberOfItems })
//             }
//         />
//     );
// };

const QUERY_DEFAULTS = {
    orderBy: 'title',
    order: 'asc',
    selectedCategories: [
        {
            id: 1,
            value: 'Category 1',
            parent: 0,
        },
        {
            id: 2,
            value: 'Category 1b',
            parent: 1,
        },
    ],
    categories: {
        'Category 1': {
            id: 1,
            name: 'Category 1',
            parent: 0,
        },
        'Category 1b': {
            id: 2,
            name: 'Category 1b',
            parent: 1,
        },
        'Category 2': {
            id: 3,
            name: 'Category 2',
            parent: 0,
        },
    },
    numberOfItems: 10,
};

const MyQueryControls = () => {
    const [query, setQuery] = useState(QUERY_DEFAULTS);
    const { orderBy, order, selectedCategories, categories, numberOfItems } = query;

    const updateQuery = (newQuery) => {
        setQuery({ ...query, ...newQuery });
    };

    console.log(query)

    return (
        <QueryControls
            {...{ orderBy, order, numberOfItems }}
            onOrderByChange={(newOrderBy) => updateQuery({ orderBy: newOrderBy })}
            onOrderChange={(newOrder) => updateQuery({ order: newOrder })}
            categorySuggestions={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={(category) => updateQuery({ selectedCategories: category })}
            onNumberOfItemsChange={(newNumberOfItems) =>
                updateQuery({ numberOfItems: newNumberOfItems })
            }
        />
    );
};


export default MyQueryControls;