import { keyframes } from "styled-components";
/**---------------------------------------------------------------------------/
  * ! keyframes 
  * * 애니메이션 정의
/**--------------------------------------------------------------------------*/
export const TextFlipAnimation = keyframes`
  0% { margin-top: -150px; }
  5% { margin-top: -100px; }
  33% { margin-top: -100px; }
  38% { margin-top: -50px; }
  66% { margin-top: -50px; }
  71% { margin-top: 0px; }
  99.99% { margin-top: 0px; }
  100% { margin-top: -150px; }
`;

export const ProgressAnimation = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

export const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
`;

export const wave = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;
