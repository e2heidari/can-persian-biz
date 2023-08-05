import React from 'react';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: 'right' }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];

const SearchBarContainer = styled(AutoComplete)`
  .ant-input-search-button {
    background-color: #1677ff;
    border-color: white;
  }
`;

const SearchBar: React.FC = () => (
  <SearchBarContainer
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{
      width: 938.98, // Set the desired width
      height: 60, // Set the desired height
      padding: '13px 46px 13px 11px', // Set the desired padding
      
    }}
    options={options}
  >
    <Input.Search size="large" placeholder="Find  Ex. Mechanic, Beauty Salon, etc" />
  </SearchBarContainer>
);

export default SearchBar;
