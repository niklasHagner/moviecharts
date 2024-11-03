const { useState, useEffect } = React;

function Search() {
    const [searchTerm, setSearchTerm] = React.useState("");

    function handleInputChange(event) {
      setSearchTerm(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      window.searchClick(searchTerm);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById('react-inject-search'));
root.render(<Search />);