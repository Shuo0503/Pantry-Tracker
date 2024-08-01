const App = () => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (filters) => {
        // Replace this with your actual data fetching and filtering logic
        console.log('Filters:', filters);
        // Assume fetchData is a function that fetches and filters your data based on the filters
        const data = fetchData(filters);
        setFilteredData(data);
    };

    return (
        <div>
            <h1>Filter Example</h1>
            <FilterComponent onFilter={handleFilter} />
            {/* Render your filtered data here */}
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

const fetchData = (filters) => {
    // Dummy data for example purposes
    const data = [
        { id: 1, name: 'Item 1', category: 'category1' },
        { id: 2, name: 'Item 2', category: 'category2' },
        { id: 3, name: 'Item 3', category: 'category3' },
    ];

    // Filter data based on the filters
    return data.filter((item) => {
        return (
            (!filters.name || item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
            (!filters.category || item.category === filters.category)
        );
    });
};

export default App;