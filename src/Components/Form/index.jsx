import { useState } from "react";

function Form({ moviesearch }) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    moviesearch(formData.searchTerm);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Search Bar  */}
        <input
          placeholder="Search"
          id="input"
          className="input"
          name="searchTerm"
          type="text"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        {/* Search Button */}
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Search&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Search&nbsp;
          </span>
        </button>
      </form>
    </div>
  );
}

export default Form;
