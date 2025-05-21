import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { groupingOptions } from "@/constants/IssuesTable";
import { initialState, TableState } from "@/store/tableState";
import { ListRestart } from "lucide-react";
import React, { FC } from "react";

interface ActionBarProps {
  tableState: TableState;
  setTableState: any;
}

const ActionBar: FC<ActionBarProps> = ({ tableState, setTableState }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between  ">
      {/* Global filter  */}
      <Input
        placeholder="Search title or identifier..."
        value={tableState.globalFilter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTableState((prev: TableState) => ({
            ...prev,
            globalFilter: e.target.value,
          }))
        }
        className="w-full sm:w-100"
      />
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          <label htmlFor="grouping" className="font-medium">
            Group by:
          </label>
          <Select
            value={tableState.grouping[0] || ""}
            onValueChange={(value) =>
              setTableState((prev: TableState) => ({
                ...prev,
                grouping: value ? [value] : [],
              }))
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select grouping" />
            </SelectTrigger>
            <SelectContent>
              {groupingOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          className="cursor-pointer justify-self-end"
          onClick={() => setTableState((prev: TableState) => initialState)}
        >
          <ListRestart className="w-4 h-4 " />
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
