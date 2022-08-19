import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const rows_datas = [
	{
		id: 1,
        name: "fd001",
		file_kbn: 1,
        last_modify: "2020/01/02 12:12:10",
        size: "",
		datas:
		[
			{
                id: 2,
                name: 'f001',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 3,
                name: 'f002',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 4,
                name: 'f003',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 5,
                name: 'f004',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:
				[
					{
                        id: 6,
                        name: 'f005',
                        file_kbn: 0,
                        last_modify: "2020/01/02 12:12:10",
                        size: 500,
                        datas:[]
					},
					{
                        id: 7,
                        name: 'f006',
                        file_kbn: 0,
                        last_modify: "2020/01/02 12:12:10",
                        size: 500,
                        datas:[]
					},
				]
			},
		],
	},
	{
        id: 8,
        name: 'fd002',
        file_kbn: 1,
        last_modify: "2020/01/02 12:12:10",
        size: "",
        datas:
		[
			{
                id: 9,
                name: 'f007',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 10,
                name: 'f008',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 11,
                name: 'f009',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
		]
	},
	{
        id: 11,
        name: 'fd003',
        file_kbn: 1,
        last_modify: "2020/01/02 12:12:10",
        size: 500,
        datas:[]
	},
]
const column_datas = [
    // {
    //     field: 'id', headerName: 'File name',flex: 0.5,editable: true
    // },
    {
        field: 'name', headerName: 'File name',flex: 0.5,editable: true
    },
    {
        field: 'size', headerName: 'size',flex: 0.2,editable: true
    },
    {
        field: 'last_modify', headerName: 'last modify',flex: 0.3,editable: true
    },
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows_datas}
        columns={column_datas}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
}
