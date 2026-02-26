import type { ReactNode } from 'react';

type Option<T extends string> = {
  value: T;
  label: string;
};

type PanelToggleGroupProps<T extends string> = {
  title: string;
  value: T;
  options: Option<T>[];
  onChange: (next: T) => void;
  trailing?: ReactNode;
};

export const PanelToggleGroup = <T extends string>({
  title,
  value,
  options,
  onChange,
  trailing
}: PanelToggleGroupProps<T>) => {
  return (
    <aside className="panel">
      <p className="panel-title">{title}</p>
      <div className="stack" role="group" aria-label={title}>
        {options.map((option) => (
          <button
            key={option.value}
            className={`toggle ${option.value === value ? 'is-active' : ''}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {trailing}
    </aside>
  );
};
