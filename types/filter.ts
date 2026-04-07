import type { IconName, FlagCode } from './ui';

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
  icon?: IconName;
  flag?: FlagCode;
}

export interface FilterRange {
  min: number;
  max: number;
  unit: string;
  step: number;
}

export interface FilterGroup {
  id: string;
  title: string;
  type: 'checklist' | 'range' | 'radio';
  options?: FilterOption[];
  range?: FilterRange;
}

export type SortOption = {
  value: string;
  label: string;
};

export type ViewMode = 'grid' | 'list';
