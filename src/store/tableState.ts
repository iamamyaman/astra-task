
import { atomWithStorage } from 'jotai/utils';
import { SortingState, ColumnFiltersState, GroupingState } from '@tanstack/react-table';
import { Issue } from '@/types/Issues';

export interface TableState {
  globalFilter: string;
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  grouping: GroupingState;
  selectedRow: Issue | null;
  filterPopup: string;
}

export const initialState: TableState = {
  globalFilter: '',
  sorting: [],
  columnFilters: [],
  grouping: [],
  selectedRow: null,
  filterPopup: '',
};

export const tableStateAtom = atomWithStorage<TableState>('table-state', initialState); 