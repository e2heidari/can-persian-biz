import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';

// Define the type for the option objects
interface Option {
  value: string;
  label: JSX.Element;
}

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query: string): Option[] =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const SearchBar = () => {
  const [options, setOptions] = useState<Option[]>([]); // Provide explicit type for options

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 938.98, // Set the desired width
        height: 46, // Set the desired height
        padding: '13px 46px 13px 11px', // Set the desired padding
        
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="Find  Ex. Mechanic, Beauty Salon, etc" enterButton />
    </AutoComplete>
  );
};

export default SearchBar;
