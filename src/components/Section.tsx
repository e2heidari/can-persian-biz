import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  height: number;
}

const SectionContainer = styled.section<SectionProps>`
  height: ${(props) => props.height}px;
  background: url('/path/to/your/background/image.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
`;

const Section = ({ height }: SectionProps) => {
  return <SectionContainer height={height}>Section</SectionContainer>;
};

export default Section;
