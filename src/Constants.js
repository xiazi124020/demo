export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export const datas = [
	{
		id: 1,
        name: "fd001",
		file_kbn: 1,
        last_modify: "",
        size: 0,
        contents: "",
		datas:
		[
			{
                id: 2,
                name: 'f001',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500000,
                contents: "",
				datas:[]
			},
			{
                id: 3,
                name: 'f002',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500000,
                contents: "",
				datas:[]
			},
			{
                id: 4,
                name: 'f003',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500000,
                contents: "",
				datas:[]
			},
			{
                id: 5,
                name: 'fd004',
				file_kbn: 1,
                last_modify: "",
				size: 0,
                contents: "",
				datas:
				[
					{
                        id: 6,
                        name: 'f005',
                        file_kbn: 0,
                        last_modify: "2020/01/02 12:12:10",
                        size: 500000,
                        contents: "",
                        datas:[]
					},
					{
                        id: 7,
                        name: 'f006',
                        file_kbn: 0,
                        last_modify: "2020/01/02 12:12:10",
                        size: 500000,
                        contents: "",
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
        last_modify: "",
        size: 0,
        contents: "",
        datas:
		[
			{
                id: 9,
                name: 'f007',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500000,
                contents: "",
				datas:[]
			},
			{
                id: 10,
                name: 'f008',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500000,
                contents: "",
				datas:[]
			},
			{
                id: 11,
                name: 'f009',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500000,
                contents: "",
				datas:[]
			},
		]
	},
	{
        id: 11,
        name: 'f003',
        file_kbn: 0,
        last_modify: "2020/01/02 12:12:10",
        size: 500000,
        contents: "",
        datas:[]
	},
]
