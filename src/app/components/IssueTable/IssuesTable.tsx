"use client";

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnDef,
  getGroupedRowModel,

} from "@tanstack/react-table";

import {
  Table,
} from "../../../components/ui/table";

import { Issue } from "@/types/Issues";
import { sampleIssueData } from "@/data/IssuesData";
import {
  columnConfig,
  columnFilterKeys,
} from "@/constants/IssuesTable";
import { useMemo, useState } from "react";
import IssueDetailModal from "./IssueDetailModal";
import {  useAtomValue, useSetAtom } from "jotai";
import { tableStateAtom } from "@/store/tableState";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import ActionBar from "./ActionBar";

export function IssuesTable() {
  const [data] = useState<Issue[]>(() => [...sampleIssueData]);
  const tableState = useAtomValue(tableStateAtom);
  const setTableState = useSetAtom(tableStateAtom);

  // Extract unique values for column filters
  const uniqueValues = useMemo(() => {
    const values: Record<string, string[]> = {};
    columnFilterKeys.forEach((key) => {
      values[key] = Array.from(
        new Set(data.map((row) => row[key as keyof Issue] as string))
      );
    });
    return values;
  }, [data]);

  // Custom global filter: search title & identifier
  function globalFilterFn(row: any, columnId: string, filterValue: string) {
    
    const { title, identifier } = row.original;
    return (
      title.toLowerCase().includes(filterValue.toLowerCase()) ||
      identifier.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  // Column definitions
  const columns = useMemo<ColumnDef<Issue>[]>(
    () => columnConfig,
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: tableState.sorting,
      globalFilter: tableState.globalFilter,
      columnFilters: tableState.columnFilters,
      grouping: tableState.grouping,
    },
    onSortingChange: (updater) => {
      const newSorting = typeof updater === 'function' ? updater(tableState.sorting) : updater;
      setTableState(prev => ({ ...prev, sorting: newSorting }));
    },
    onGlobalFilterChange: (newFilter) => setTableState(prev => ({ ...prev, globalFilter: newFilter })),
    onColumnFiltersChange: (updater) => {
      const newFilters = typeof updater === 'function' ? updater(tableState.columnFilters) : updater;
      setTableState(prev => ({ ...prev, columnFilters: newFilters }));
    },
    onGroupingChange: (updater) => {
      const newGrouping = typeof updater === 'function' ? updater(tableState.grouping) : updater;
      setTableState(prev => ({ ...prev, grouping: newGrouping }));
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    globalFilterFn,
    enableGrouping: true,
  });

  return (
    <div className="w-full mx-auto p-5 border rounded-md">
      {/* Filter and Grouping section */}
     <ActionBar tableState={tableState} setTableState={setTableState}/>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          {/* Table Header */}
          <Header 
            table={table} 
            setFilterPopup={(value) => setTableState(prev => ({ ...prev, filterPopup: value }))} 
            filterPopup={tableState.filterPopup} 
            uniqueValues={uniqueValues} 
          />

          {/* Table Body */}
         <Body table={table} setTableState={setTableState} />
        </Table>
      </div>

      {/* Footer section */}
      <Footer table={table} />

      {/* Detail Modal */}
      <IssueDetailModal
        selectedRow={tableState.selectedRow}
        onOpenChange={() => setTableState(prev => ({ ...prev, selectedRow: null }))}
      />
    </div>
  );
}
