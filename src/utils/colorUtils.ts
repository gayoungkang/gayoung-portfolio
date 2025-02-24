import { ERROR_INVALID_HEX_COLOR } from "@/constants/string";
import { theme } from "@/styles/theme";

/**---------------------------------------------------------------------------/
  * ! darken 함수
  * * 주어진 색상을 어둡게 조정하는 함수
  * * HEX 색상 값을 받아서, `percentage`만큼 어둡게 만듦 (기본값: 20%)
  * * 유효하지 않은 HEX 색상 형식이 전달되면 경고 메시지를 출력하고, 기본 색상(검정색)으로 대체
  * * `color`는 HEX 형식이어야 하며, 형식이 잘못되었을 경우 경고 메시지 출력
  * * 색상 값은 `#RRGGBB` 형식의 문자열로 반환
/**--------------------------------------------------------------------------*/

export const darken = (color?: string, percentage: number = 0.2): string => {
  if (!color || !/^#[0-9A-Fa-f]{6}$/i.test(color)) {
    console.warn(`${ERROR_INVALID_HEX_COLOR}`);
    color = theme.colors.black;
  }

  const colorHex = color.replace("#", "");

  if (colorHex.length !== 6) {
    console.warn(`${ERROR_INVALID_HEX_COLOR}`);
    color = theme.colors.black;
  }

  const r = parseInt(colorHex.substr(0, 2), 16);
  const g = parseInt(colorHex.substr(2, 2), 16);
  const b = parseInt(colorHex.substr(4, 2), 16);

  const newR = Math.max(r - Math.round(r * percentage), 0);
  const newG = Math.max(g - Math.round(g * percentage), 0);
  const newB = Math.max(b - Math.round(b * percentage), 0);

  return `#${newR.toString(16).padStart(2, "0")}${newG
    .toString(16)
    .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
};
