import { compose, cva, cx, focusRing } from '@/lib/cva';
import type { VariantProps } from 'cva';
import {
  Checkbox as _Checkbox,
  CheckboxGroup as _CheckboxGroup,
  type CheckboxGroupProps as _CheckboxGroupProps,
  type CheckboxProps as _CheckboxProps,
  composeRenderProps,
} from 'react-aria-components';

interface CheckboxGroupProps extends _CheckboxGroupProps {}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  return (
    <_CheckboxGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => cx('', className))}
    >
      {props.children}
    </_CheckboxGroup>
  );
};

const _checkboxVariants = cva({
  base: 'flex gap-2 items-center group text-sm transition',
  variants: {
    size: {
      sm: '[--size:17px] text-std-16N-7',
      md: '[--size:17px] text-std-16N-7',
      lg: '[--size:23px] text-std-17N-7',
    },
    isInvalid: {
      true: 'text-error-1',
    },
    isDisabled: {
      false: 'text-solid-grey-800',
      true: 'text-solid-grey-600',
    },
  },
  compoundVariants: [
    {
      isInvalid: true,
      isDisabled: true,
      className: 'text-solid-grey-600',
    },
  ],
  defaultVariants: {
    size: 'md',
  },
});

const checkboxVariants = compose(_checkboxVariants);
interface CheckboxProps extends _CheckboxProps, VariantProps<typeof checkboxVariants> {}

const _boxVariants = cva({
  base: 'w-[--size] h-[--size] flex-shrink-0 rounded-sm flex items-center justify-center border-2 transition',
  variants: {
    isSelected: {
      false: [
        '[--color:theme(colors.solid-grey.900)]',
        'group-pressed:[--color:theme(colors.black)]',
        'bg-white border-[--color]',
      ],
      true: [
        '[--color:theme(colors.blue.900)]',
        'group-pressed:[--color:theme(colors.blue.1000)]',
        'bg-[--color] border-[--color]',
      ],
    },
    isInvalid: {
      true: ['[--color:theme(colors.error-1)]', 'group-pressed:[--color:theme(colors.error-1)]'],
    },
    isDisabled: {
      true: ['[--color:theme(colors.solid-grey.200)]'],
    },
  },
});

const boxVariants = compose(focusRing, _boxVariants);

const iconVariants = 'w-4 h-4 text-white group-disabled:text-solid-grey-400 ';

const SvgCheck = (props: { className: string }) => (
  <svg
    aria-hidden={true}
    className={cx('fill-current', props.className)}
    width='17'
    height='17'
    viewBox='0 0 17 17'
    fill='none'
  >
    <path d='M6.9 12.35L13.625 5.62495L12.575 4.57495L6.9 10.25L4.05 7.39995L3 8.44995L6.9 12.35Z' />
  </svg>
);
const SvgIndeterminate = (props: { className: string }) => (
  <svg
    aria-hidden={true}
    className={cx('fill-current', props.className)}
    width='23'
    height='23'
    viewBox='0 0 23 23'
  >
    <path d='M5.07324 12.5147H17.9262V10.4854H5.07324V12.5147Z'></path>
  </svg>
);

const Checkbox = (props: CheckboxProps) => {
  const { size, ...rest } = props;
  return (
    <_Checkbox
      {...rest}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxVariants({ ...renderProps, size, className }),
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <span
            className={boxVariants({ isSelected: isSelected || isIndeterminate, ...renderProps })}
          >
            {isIndeterminate ? (
              <SvgIndeterminate className={iconVariants} />
            ) : isSelected ? (
              <SvgCheck className={iconVariants} />
            ) : null}
          </span>
          {props.children}
        </>
      )}
    </_Checkbox>
  );
};

export { Checkbox, CheckboxGroup };
export type { CheckboxProps, CheckboxGroupProps };
