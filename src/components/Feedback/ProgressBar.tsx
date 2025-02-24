import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import { ProgressAnimation } from "@/styles/animation";

export type ProgressProps = {
  value: number;
  variant?: "bar" | "circular";
  size?: number;
  barWidth?: string;
  height?: string;
  color?: string;
  animate?: boolean;
};
/**---------------------------------------------------------------------------/
  * ! Progress 컴포넌트
  * * 진행 상황을 표시하는 컴포넌트
  * * `value`: 진행 상태를 나타내는 값 (0 ~ 100)
  * * `variant`: 진행 표시 방식 (기본값: 'bar', 'bar' 또는 'circular' 선택 가능)
  * * `size`: 원형 진행 표시기의 크기 (기본값: 100px, 'circular' variant일 때만 적용)
  * * `barWidth`: 진행 표시바의 너비 (기본값: '100%')
  * * `height`: 진행 표시바의 높이 (기본값: '8px')
  * * `color`: 진행 상태의 색상 (기본값: 테마의 기본 색상)
  * * `animate`: 진행 상태 업데이트 시 애니메이션을 적용할지 여부 (기본값: true)
  * * `variant`가 'bar'일 경우, 가로형 진행 표시바가 렌더링되며, 'circular'일 경우 원형 진행 표시기가 렌더링됨
  * * `animate`가 true일 때, 진행 상태 변경 시 애니메이션 효과가 적용됨
/**--------------------------------------------------------------------------*/
const Progress = ({
  value,
  variant = "bar",
  size = 100,
  barWidth = "100%",
  height = "8px",
  color = theme.colors.primary.main,
  animate = true,
}: ProgressProps) => {
  return variant === "bar" ? (
    <BarContainer width={barWidth} height={height}>
      <BarFill value={value} color={color} $animate={animate} />
    </BarContainer>
  ) : (
    <CircularContainer size={size}>
      <svg viewBox='0 0 100 100'>
        <circle className='bg' cx='50' cy='50' r='45' />
        <circle
          className='progress'
          cx='50'
          cy='50'
          r='45'
          strokeDasharray='283'
          strokeDashoffset={animate ? 283 - (value / 100) * 283 : 283}
          style={{
            stroke: color,
            transition: animate ? "stroke-dashoffset 1.5s ease-in-out" : "none",
          }}
        />
        <text x='50%' y='50%' dy='.3em' textAnchor='middle'>
          {value}%
        </text>
      </svg>
    </CircularContainer>
  );
};
/**---------------------------------------------------------------------------/
  * ! BarContainer 스타일
  * * 가로형 진행 표시바의 배경을 스타일링
  * * 진행 표시바의 너비와 높이를 설정하고, 배경 색상 및 모서리 둥글기를 설정
  * * 내부의 `BarFill`이 진행 상태를 채움
/**--------------------------------------------------------------------------*/
const BarContainer = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius[4]};
  overflow: hidden;
  position: relative;
`;
/**---------------------------------------------------------------------------/
  * ! BarFill 스타일
  * * 진행 표시바 내부의 채워진 부분을 스타일링
  * * `value`에 비례하여 진행 상태를 설정하고, 색상을 지정
  * * 애니메이션 효과가 활성화된 경우, 진행 상태 변화에 애니메이션을 적용
/**--------------------------------------------------------------------------*/
const BarFill = styled.div<{ value: number; color: string; $animate: boolean }>`
  height: 100%;
  width: ${(props) => props.value}%;
  background: ${(props) => props.color};
  border-radius: ${theme.borderRadius[4]};
  transition: ${(props) =>
    props.$animate ? "width 1.5s cubic-bezier(0.65, 0, 0.35, 1)" : "none"};
  animation: ${(props) => (props.$animate ? ProgressAnimation : "none")} 1.5s
    ease-in-out;
`;
/**---------------------------------------------------------------------------/
  * ! CircularContainer 스타일
  * * 원형 진행 표시기의 컨테이너를 스타일링
  * * `size`에 따라 크기를 설정하고, 원형 형태로 설정된 SVG에 스타일을 적용
  * * 원형 진행 표시기의 배경 원과 진행 원을 스타일링
/**--------------------------------------------------------------------------*/
const CircularContainer = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;

  svg {
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
  }

  circle {
    fill: none;
    stroke-width: 10;
  }

  .bg {
    stroke: ${theme.colors.white};
  }

  .progress {
    stroke-linecap: round;
  }

  text {
    font-size: 18px;
    font-weight: bold;
    fill: ${theme.colors.black};
  }
`;

export default Progress;
