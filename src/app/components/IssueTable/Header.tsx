import React, { FC } from "react";
import { TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";
import { columnFilterKeys, sortableKeys } from "@/constants/IssuesTable";
import { ArrowDown, ArrowUp, Filter } from "lucide-react";

interface HeaderProps {
  table: Table<any>;
  setFilterPopup: (filterPopup: string) => void;
  filterPopup: string;
  uniqueValues: Record<string, string[]>;
}

const Header: FC<HeaderProps> = ({
  table,
  setFilterPopup,
  filterPopup,
  uniqueValues,
}) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              className="cursor-pointer select-none py-2"
            >
              <div className="flex items-center gap-2">
                <div
                  onClick={header.column.getToggleSortingHandler()}
                  className="flex items-center gap-1 "
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {sortableKeys.includes(header.column.id) &&
                  header.column.getIsSorted() ? (
                    header.column.getIsSorted() === "desc" ? (
                      <ArrowDown className="ml-2 h-4 w-4 text-green-400" />
                    ) : (
                      <ArrowUp className="ml-2 h-4 w-4 text-green-400" />
                    )
                  ) : null}
                </div>

                {columnFilterKeys.includes(header.column.id) && (
                  <div
                    className="relative"
                    onMouseOver={() => setFilterPopup(header.column.id)}
                    onMouseLeave={() => setFilterPopup("")}
                  >
                    <Filter className="h-4 w-4" />
                    {header.column.id === filterPopup && (
                      <div className="absolute top-[80%] left-0 mt-1 p-2 border rounded-md shadow-lg z-50 min-w-[200px] bg-white dark:bg-accent ">
                        <div className="space-y-2">
                          <div className="font-medium">
                            {typeof header.column.columnDef.header === "string"
                              ? header.column.columnDef.header
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </div>
                          <select
                            className="w-full border rounded px-2 py-1"
                            value={
                              (header?.column?.getFilterValue() as string) ?? ""
                            }
                            onChange={(e) =>
                              header?.column?.setFilterValue(e.target.value)
                            }
                          >
                            <option value="">All</option>
                            {uniqueValues[header.column.id]?.map((val) => (
                              <option key={val} value={val}>
                                {val}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default Header;
