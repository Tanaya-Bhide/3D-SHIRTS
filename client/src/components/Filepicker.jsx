import React from 'react';

// Import the CustomButton component for use within Filepicker.
import CustomButton from './CustomButton';

// Define the Filepicker component as a functional component.
// It receives three props: file, setFile, and readFile.
const Filepicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">

        {/* Input field for selecting a file. */}
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          
          // When a file is selected, setFile is called with the selected file.
          onChange={(e) => setFile(e.target.files[0])}
        />

        {/* Label associated with the file input. */}
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        {/* Display the selected file's name or "No file selected". */}
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      {/* Section containing two CustomButton components. */}
      <div className="mt-4 flex flex-wrap gap-3">

        {/* CustomButton component for 'Logo'. */}
        <CustomButton 
          type="outline"
          title="Logo"
          
          // When the 'Logo' button is clicked, the readFile function is called with 'logo' as an argument.
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />

        {/* CustomButton component for 'Full'. */}
        <CustomButton 
          type="filled"
          title="Full"
          
          // When the 'Full' button is clicked, the readFile function is called with 'full' as an argument.
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
}

// Export the Filepicker component for use in other parts of the application.
export default Filepicker;
