import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Issue } from "@/types/Issues";
import { flexRender, Table, TableState } from "@tanstack/react-table";
import React, { FC, useEffect, useState } from "react";

interface BodyProps {
  table: Table<Issue>;
  setTableState: any;
}

const Body: FC<BodyProps> = ({ table, setTableState }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <TableBody>
        {[...Array(10)].map((_, index) => (
          <TableRow key={index}>
            {table.getAllColumns().map((column) => (
              <TableCell key={column.id} className="py-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );
  }

  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => {
        if (row.getIsGrouped()) {
          return (
            <>
              <TableRow key={row.id} className="bg-blue-50 dark:bg-black">
                <TableCell colSpan={row.getVisibleCells().length}>
                  <span className="font-bold text-[16px]">
                    {row.getValue(row.groupingColumnId as string)}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    ({row.subRows.length} items)
                  </span>
                </TableCell>
              </TableRow>
              {row.subRows.map((subRow) => (
                <TableRow
                  key={subRow.id}
                  className="cursor-pointer"
                  onClick={() =>
                    setTableState((prev: TableState) => ({
                      ...prev,
                      selectedRow: subRow.original,
                    }))
                  }
                >
                  {subRow.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          );
        }
        // Render normal data row
        return (
          <TableRow
            key={row.id}
            className="cursor-pointer"
            onClick={() =>
              setTableState((prev: TableState) => ({
                ...prev,
                selectedRow: row.original,
              }))
            }
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="py-4">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default Body;