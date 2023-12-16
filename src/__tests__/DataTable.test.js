import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from '../Components/Tables/DataTable';

describe('DataTable component', () => {
    test('Renders DataTable component correctly', () => {
        const data = [
            {
                "entitie": "centeralAgency",
                "data": [
                    { "16/17": 3792 },
                    { "17/18": 2346 },
                    { "18/19": 1890 },
                    { "19/20": 1362 },
                    { "20/21": 1308 },
                    { "21/22": 572 }
                ]
            },
            {
                "entitie": "housing directorated",
                "data": [
                    { "16/17": 4648 },
                    { "17/18": 10079 },
                    { "18/19": 15478 },
                    { "19/20": 6030 },
                    { "20/21": 12163 },
                    { "21/22": 4231 }
                ]
            },
            {
                "entitie": "comunities authority",
                "data": [
                    {
                        "16/17": 27912
                    },
                    {
                        "17/18": 69676
                    },
                    {
                        "18/19": 50336
                    },
                    {
                        "19/20": 43832
                    },
                    {
                        "20/21": 64910
                    },
                    {
                        "21/22": 63200
                    }
                ]
            }
        ];

        render(
            <DataTable data={data} />
        );
        const DataTableElement = screen.getByTestId('DataTable');
        expect(DataTableElement).toBeInTheDocument();
    });
});