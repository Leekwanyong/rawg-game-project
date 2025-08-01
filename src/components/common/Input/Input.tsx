import styled from '@emotion/styled';

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeStyles = {
  sm: {
    fontSize: '12px',
    padding: '3px 12px',
  },
  md: {
    fontSize: '14px',
    padding: '5px 16px',
  },
  lg: {
    fontSize: '16px',
    padding: '9px 20px',
  },
};

const StyledInput = styled.input<{ inputSize: 'sm' | 'md' | 'lg' }>`
  font-size: ${(props) => sizeStyles[props.inputSize].fontSize};
  padding: ${(props) => sizeStyles[props.inputSize].padding};
  border: 1px solid #ccc;
  background-color: #151515;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #fff;
  }
`;

export default function Input({
  type = 'text',
  placeholder = '검색어를 입력해주세요...',
  inputSize = 'sm',
  value = '',
  className,
  onChange,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      className={className}
      inputSize={inputSize}
      value={value}
      onChange={onChange}
    />
  );
}
