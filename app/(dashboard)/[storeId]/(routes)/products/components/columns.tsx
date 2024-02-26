"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type ProductColumn = {
  id: string
  name: string
  price: string
  size: string
  category: string
  colour: string
  isFeatured: boolean
  isArchived: boolean
  createdAt: string
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "colour",
    header: "Colour",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.colour}
        <div 
        className="w-6 h-6 rounded-full border" 
        style={{backgroundColor: row.original.colour}}/>
      </div>
    )
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "action",
    cell: ({row}) => <CellAction data={row.original}/>
  }
]
