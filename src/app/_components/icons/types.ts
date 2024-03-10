type BaseIconProps = {
  variant?: 'filled' | 'outlined';
} & React.ComponentProps<'svg'>;

type IconPropsWithTitle = BaseIconProps & {
  title: string;
  titleId: string;
};

type IconPropsWithoutTitle = BaseIconProps & {
  title?: undefined;
  titleId?: undefined;
};

export type IconProps = IconPropsWithTitle | IconPropsWithoutTitle;
