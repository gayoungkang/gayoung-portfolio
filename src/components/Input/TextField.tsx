import { theme } from "@/styles/theme";
import { ChangeEvent, FocusEvent, ReactNode, useState } from "react";
import { css, styled } from "styled-components";
import * as yup from "yup";

export type TextFieldProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: "outlined" | "filled" | "standard";
  validationSchema?: yup.StringSchema;
  onValidate?: (isValid: boolean, errorMessage?: string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
  $sx?: Record<string, any>;
  multiline?: boolean;
  rows?: number;
  color?: string;
};
/**---------------------------------------------------------------------------/
  * ! TextField 컴포넌트
  * * 사용자 입력을 받는 텍스트 필드 컴포넌트
  * * 다양한 옵션을 통해 커스터마이즈 가능 (에러 메시지, 라벨, 아이콘 등)
  * * `label`: 입력 필드 위에 표시되는 라벨
  * * `placeholder`: 필드의 플레이스홀더 텍스트
  * * `type`: 필드의 유형 (기본값: 'text')
  * * `value`: 필드의 값 (제어 컴포넌트에서 사용)
  * * `defaultValue`: 필드의 기본값 (비제어 컴포넌트에서 사용)
  * * `disabled`: 필드를 비활성화할지 여부 (기본값: false)
  * * `fullWidth`: 필드가 전체 너비를 차지할지 여부
  * * `error`: 외부에서 에러 상태를 설정 (기본값: false)
  * * `helperText`: 에러 발생 시 보이는 메시지
  * * `startIcon`: 필드 왼쪽에 표시될 아이콘
  * * `endIcon`: 필드 오른쪽에 표시될 아이콘
  * * `variant`: 필드 스타일 종류 ('outlined', 'filled', 'standard')
  * * `validationSchema`: yup을 통한 유효성 검사 스키마
  * * `onValidate`: 유효성 검사 후 호출되는 콜백 함수
  * * `onChange`: 입력 값이 변경될 때 호출되는 콜백 함수
  * * `onFocus`: 필드가 포커스를 받을 때 호출되는 콜백 함수
  * * `onBlur`: 필드가 포커스를 잃을 때 호출되는 콜백 함수
  * * `multiline`: 여러 줄을 입력할 수 있는 텍스트 영역일지 여부
  * * `rows`: 텍스트 영역의 줄 수
  * * `color`: 텍스트 색상
/**--------------------------------------------------------------------------*/
const TextField = ({
  label,
  placeholder,
  type = "text",
  value,
  defaultValue,
  disabled = false,
  fullWidth = false,
  error: externalError = false,
  helperText: externalHelperText = "",
  startIcon,
  endIcon,
  variant = "filled",
  validationSchema,
  onValidate,
  onChange,
  onFocus,
  onBlur,
  $marginTop,
  $marginBottom,
  $marginLeft,
  $marginRight,
  $borderRadius,
  $sx = {},
  multiline = false,
  rows = 3,
  $backgroundColor = theme.colors.white,
  color = theme.colors.black,
}: TextFieldProps) => {
  const [error, setError] = useState<boolean>(externalError);
  const [helperText, setHelperText] = useState<string>(externalHelperText);

  const validate = async (inputValue: string) => {
    if (!validationSchema) return;

    try {
      await validationSchema.validate(inputValue);
      setError(false);
      setHelperText("");
      onValidate?.(true);
    } catch (validationError) {
      const errorMessage = (validationError as yup.ValidationError).message;
      setError(true);
      setHelperText(errorMessage);
      onValidate?.(false, errorMessage);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) onChange(e);
    validate(e.target.value);
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onBlur) onBlur(e);
    validate(e.target.value);
  };

  return (
    <InputWrapper
      $fullWidth={fullWidth}
      $marginTop={$marginTop}
      $marginBottom={$marginBottom}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $sx={$sx}
    >
      {label && (
        <Label $error={error} color={color}>
          {label}
        </Label>
      )}
      <InputContainer
        $backgroundColor={$backgroundColor}
        $variant={variant}
        $error={error}
        $disabled={disabled}
      >
        {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
        {multiline ? (
          <StyledTextArea
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={handleBlur}
            $variant={variant}
            rows={rows}
            $borderRadius={$borderRadius}
            color={color}
          />
        ) : (
          <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={handleBlur}
            $variant={variant}
            $borderRadius={$borderRadius}
            color={color}
          />
        )}
        {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
      </InputContainer>
      {helperText && (
        <HelperText $error={error} color={color}>
          {helperText}
        </HelperText>
      )}
    </InputWrapper>
  );
};
/**---------------------------------------------------------------------------/
  * ! InputWrapper 스타일
  * * 필드 전체 컨테이너 스타일링
  * * `fullWidth`: 필드가 전체 너비를 차지할지 여부
  * * `marginTop`, `marginBottom`, `marginLeft`, `marginRight`: 각 방향의 여백
  * * 추가적인 스타일을 위해 `$sx`를 받아서 스타일을 동적으로 조정
/**--------------------------------------------------------------------------*/
const InputWrapper = styled.div<{
  $fullWidth: boolean;
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $sx?: Record<string, any>;
}>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  margin-top: ${(props) => props.$marginTop || "0"};
  margin-bottom: ${(props) => props.$marginBottom || "0"};
  margin-left: ${(props) => props.$marginLeft || "0"};
  margin-right: ${(props) => props.$marginRight || "0"};
  ${(props) => props.$sx && css({ ...props.$sx })}
`;
/**---------------------------------------------------------------------------/
  * ! Label 스타일
  * * 입력 필드 위에 표시되는 라벨 스타일링
  * * `color`: 텍스트 색상
  * * `error`: 에러가 있을 경우, 에러 메시지 색상으로 변경
/**--------------------------------------------------------------------------*/
const Label = styled.label<{ $error: boolean; color: string }>`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) =>
    props.$error ? theme.colors.validation.error : props.color};
  margin-bottom: 4px;
`;
/**---------------------------------------------------------------------------/
  * ! InputContainer 스타일
  * * 입력 필드가 포함된 컨테이너 스타일링
  * * `variant`: 필드 스타일에 따른 배경색 및 테두리 스타일 설정
  * * `error`: 에러 상태에 따라 테두리 색상이 변경됨
  * * `disabled`: 비활성화된 필드의 배경색
/**--------------------------------------------------------------------------*/
const InputContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "error" && prop !== "fullWidth",
})<{
  $variant: string;
  $error: boolean;
  $disabled: boolean;
  $backgroundColor: string;
}>`
  display: flex;
  align-items: center;
  border: ${(props) =>
    props.$variant === "outlined"
      ? `2px solid ${
          props.$error ? theme.colors.validation.error : theme.colors.grey[400]
        }`
      : "none"};
  background-color: ${(props) =>
    props.$variant === "filled"
      ? props.$disabled
        ? theme.colors.grey[300]
        : props.$backgroundColor || theme.colors.grey[100]
      : "transparent"};
  border-bottom: ${(props) =>
    props.$variant === "standard"
      ? `2px solid ${
          props.$error ? theme.colors.validation.error : theme.colors.grey[400]
        }`
      : "none"};
  padding: 8px 12px;
  border-radius: ${theme.borderRadius[4]};
  transition: 0.3s ease-in-out;
`;
/**---------------------------------------------------------------------------/
  * ! StyledInput 스타일
  * * 기본 텍스트 입력 필드 스타일링
  * * `variant`: 스타일에 따른 배경 및 테두리 설정
  * * `color`: 텍스트 색상
  * * `borderRadius`: 둥근 모서리 설정
/**--------------------------------------------------------------------------*/
const StyledInput = styled.input<{
  $variant: string;
  $borderRadius?: string;
  color: string;
}>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  padding: 8px;
  border-radius: ${(props) => props.$borderRadius || theme.borderRadius[4]};
  color: ${(props) => props.color};
`;
/**---------------------------------------------------------------------------/
  * ! StyledTextArea 스타일
  * * 여러 줄 입력 필드 스타일링 (textarea)
  * * `variant`: 스타일에 따른 배경 및 테두리 설정
  * * `color`: 텍스트 색상
  * * `resize`: 사용자가 크기를 변경할 수 없도록 설정
/**--------------------------------------------------------------------------*/
const StyledTextArea = styled.textarea<{
  $variant: string;
  $borderRadius?: string;
  color: string;
}>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  padding: 8px;
  border-radius: ${(props) => props.$borderRadius || theme.borderRadius[4]};
  color: ${(props) => props.color};
  resize: none;
`;
/**---------------------------------------------------------------------------/
  * ! IconWrapper 스타일
  * * 텍스트 필드의 아이콘을 감싸는 스타일링
  * * 아이콘은 필드의 양쪽에 위치할 수 있음
/**--------------------------------------------------------------------------*/
const IconWrapper = styled.span`
  margin: 0 8px;
  display: flex;
  align-items: center;
`;
/**---------------------------------------------------------------------------/
  * ! HelperText 스타일
  * * 에러 메시지나 헬프 텍스트 스타일링
  * * `error`: 에러 상태일 경우 빨간색으로 텍스트 표시
/**--------------------------------------------------------------------------*/
const HelperText = styled.span<{ $error: boolean; color: string }>`
  font-size: 12px;
  margin-top: 4px;
  color: ${(props) =>
    props.$error ? theme.colors.validation.error : props.color};
`;

export default TextField;
