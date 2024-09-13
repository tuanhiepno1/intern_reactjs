import React from 'react';
import Select from 'react-select';
import flagEn from '../../assets/flag-en.png'; // Hình lá cờ Anh
import flagVi from '../../assets/flag-vi.png'; // Hình lá cờ Việt Nam
import './LanguageSelector.css'; // Import file CSS

const options = [
  { value: 'en', label: <div><img src={flagEn} alt="English Flag" style={{ width: 20, marginRight: 8 }} />EN</div> },
  { value: 'vi', label: <div><img src={flagVi} alt="Vietnamese Flag" style={{ width: 20, marginRight: 8 }} />VN</div> },
];

const customStyles = {
  control: (base) => ({
    ...base,
    width: 110, // Điều chỉnh kích thước nếu cần
    border: 'none',
    boxShadow: 'none',
  }),
  menu: (base) => ({
    ...base,
    marginTop: 0,
  }),
};

const LanguageSelector = ({ language, setLanguage }) => {
  const handleChange = (selectedOption) => {
    setLanguage(selectedOption.value);
  };

  return (
    <div className="language-selector">
      <Select
        value={options.find(option => option.value === language)}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        isSearchable={false}
      />
    </div>
  );
};

export default LanguageSelector;