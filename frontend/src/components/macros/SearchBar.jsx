import { useState, useEffect } from "react";
import { getApplicant } from "../../api/applicantSearch/applicant";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 

  // Debounce search 
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      // Check  no spaces or special characters)
      if (query.length >= 3 && /^[a-zA-Z0-9]*$/.test(query)) {
        fetchStudents();
        setShowDropdown(true);
      } else {
        setStudents([]);
        setShowDropdown(false);
      }
    }, 300); 

    return () => clearTimeout(delaySearch);
  }, [query]);

  // Fetch students from API
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const data = await getApplicant(query);
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
    setLoading(false);
  };

  // Handle student selection
  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setQuery(""); 
    setShowDropdown(false);
  };

  // Function to highlight matching text
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi")); 
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex flex-col items-center p-6 w-full">
      {/* Search Input */}
      <input
        type="text"
        className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search students..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length >= 3 && setShowDropdown(true)} // Reopen dropdown if query is valid
      />

      {/* Dropdown Results */}
      {showDropdown && students.length > 0 && (
        <div className="relative w-full max-w-md mt-2">
          <ul className="border border-gray-300 rounded-md bg-white shadow-lg overflow-auto max-h-60">
            {students.map((student) => (
              <li
                key={student.rollNumber}
                className="p-3 hover:bg-blue-100 cursor-pointer transition-all"
                onClick={() => handleSelectStudent(student)}
              >
                {/* Highlight the matching text in the student's name */}
                {highlightText(student.name, query)}
                {students.filter(s => s.name === student.name).length > 1 &&
                  ` (${student.rollNumber})`
                }
              </li>
            ))}
          </ul>
        </div>
      )}

     
      {loading && <p className="text-gray-500 mt-2">Loading...</p>}


      {query.length >= 3 && !loading && students.length === 0 && (
        <p className="text-gray-500 mt-2">No results found</p>
      )}

      {/* Display Selected Student Details */}
      {selectedStudent && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md w-full max-w-md bg-gray-50 shadow">
          <h2 className="text-lg font-semibold text-gray-800">{selectedStudent.name}</h2>
          <p className="text-gray-600">Class: {selectedStudent.class}</p>
          <p className="text-gray-600">Roll Number: {selectedStudent.rollNumber}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
