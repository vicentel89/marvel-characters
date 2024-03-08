import { IconProps } from './types';

export default function HeartIcon({
  title,
  titleId,
  variant = 'filled',
  strokeWidth: _,
  ...props
}: IconProps) {
  const BASE_WIDTH = 24;
  const BASE_HEIGHT = 22;
  const STROKE_WIDTH = 4;

  const variantProps = {
    filled: {
      fill: 'currentColor',
      height: BASE_HEIGHT,
      viewBox: `0 0 ${BASE_WIDTH} ${BASE_HEIGHT}`,
    },
    outlined: {
      strokeWidth: STROKE_WIDTH,
      stroke: 'currentColor',
      fill: 'none',
      height: BASE_HEIGHT - STROKE_WIDTH,
      viewBox: `${-STROKE_WIDTH / 2} ${-STROKE_WIDTH / 2} ${BASE_WIDTH + STROKE_WIDTH} ${
        BASE_HEIGHT + STROKE_WIDTH
      }`,
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={titleId}
      {...variantProps[variant]}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.80348L6 0.161865L0 3.80348V11.607L12 21.8382L24 11.607V3.80348L18 0.161865L12 3.80348Z"
      />
    </svg>
  );
}
