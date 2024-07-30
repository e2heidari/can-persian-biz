import React from 'react'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'
import { AutoComplete, Input } from 'antd'

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
)

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
})

const options = [
    {
        label: renderTitle('Libraries'),
        options: [
            renderItem('AntDesign', 10000),
            renderItem('AntDesign UI', 10600),
        ],
    },
    {
        label: renderTitle('Solutions'),
        options: [
            renderItem('AntDesign UI FAQ', 60100),
            renderItem('AntDesign FAQ', 30010),
        ],
    },
    {
        label: renderTitle('Articles'),
        options: [renderItem('AntDesign design language', 100000)],
    },
]

const SearchBarContainer = styled.div`
    .ant-input-search-button {
        background-color: #1677ff;
        border-color: white;
    }

    /* Default styles */
    position: relative;
    width: 80%;
    padding: 13px 46px 13px 11px;
    background-color: transparent; /* Make the container background transparent */

    @media (max-width: 768px) {
        /* Mobile size styles */
        position: relative;
        width: 100%;
        padding: 11px 13px;
    }
`

const StyledAutoComplete = styled(AutoComplete)`
    width: 100%;
    height: 100%;

    .ant-input {
        background-color: rgba(128, 128, 128, 0.5);
    }
`

const SearchBar: React.FC = () => (
    <SearchBarContainer>
        <StyledAutoComplete
            popupClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={300}
            options={options}
        >
            <Input.Search
                size="large"
                placeholder="Find Ex. Mechanic, Beauty Salon, etc"
            />
        </StyledAutoComplete>
    </SearchBarContainer>
)

export default SearchBar
