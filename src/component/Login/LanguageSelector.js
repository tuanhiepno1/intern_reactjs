import React from 'react';
import { Select } from 'antd';
import flagEn from '../../assets/flag-en.png'; // Hình lá cờ Anh
import flagVi from '../../assets/flag-vi.png'; // Hình lá cờ Việt Nam
import './LanguageSelector.css'; // Import file CSS

const { Option } = Select;

const LanguageSelector = ({ language, setLanguage }) => {
  const handleChange = (value) => {
    setLanguage(value);
  };

  return (
    <div className="language-selector">
      <Select
        value={language}
        onChange={handleChange}
        style={{ width: 110 }}
        dropdownStyle={{ padding: 0 }}
        bordered={false}
      >
        <Option value="en">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={flagEn} alt="English Flag" style={{ width: 20, marginRight: 8 }} />
            EN
          </div>
        </Option>
        <Option value="vi">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={flagVi} alt="Vietnamese Flag" style={{ width: 20, marginRight: 8 }} />
            VN
          </div>
        </Option>
      </Select>
    </div>
  );
};

export default LanguageSelector;
