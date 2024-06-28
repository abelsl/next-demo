'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type Props = {
  label?: string;
  error?: string;
  labelClassName?: string;
  containerClassName?: string;
} & React.ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { label, error, className, containerClassName, labelClassName, ...rest },
  ref
) {
  return (
    <div className={cn('group', containerClassName)}>
      {label && (
        <label
          className={cn(
            'block text-gray-700 text-sm font-semibold mb-1',
            { 'text-red-500': error },
            { 'group-focus-within:text-accent ': !error },
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        ref={ref}
        className={cn(
          'py-2 px-4 shadow appearance-none w-full group-focus-within:outline-none border border-border group-focus-within:border-accent rounded-md text-gray-800',
          { 'outline outline-offset-1 !outline-1 !outline-red-500': error },
          className
        )}
      />
      {error ? <p className="text-xs text-red-500 mt-2">{error}</p> : null}
    </div>
  );
});

export default Input;
