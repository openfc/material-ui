import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, boolean, text } from '@kadira/storybook-addon-knobs';

import { Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn } from '../Table';

storiesOf('Table', module)
    .addDecorator(withKnobs)
    .addDecorator(muiTheme())
    .add(null, () => (
        <div style={{ padding: text('Padding', '50px'), width: text('Width', '') }}>
            <Table
                fixedHeader={boolean('Fixed Header', true)}
                fixedFooter={boolean('Fixed Footer', true)}
                multiSelectable={boolean('Multi Selectable', false)}
                height={text('Height', 'inherit')}
                selectable={boolean('Selectable', true)}
                onCellClick={action('CellClick')}
                onCellHover={action('CellHover')}
                onCellHoverExit={action('CellHoverExit')}
                onRowHover={action('RowHover')}
                onRowHoverExit={action('RowHoverExit')}
                onRowSelection={action('RowSelection')}
            >
                <TableHeader
                    adjustForCheckbox={boolean('Header Adjust For Checkbox', true)}
                    displaySelectAll={boolean('Header Display Select All', true)}
                    enableSelectAll={boolean('Header Enable Select All', true)}
                >
                    <TableRow
                        displayBorder={boolean('Header Row1 Display Border', false)}
                        hoverable={boolean('Header Row1 Hoverable', false)}
                        hovered={boolean('Header Row1 Hovered', false)}
                        selectable={boolean('Header Row1 Selectable', false)}
                        striped={boolean('Header Row1 Striped', false)}
                    >
                        <TableHeaderColumn colSpan={'3'} tooltip={text('Header Tooltip', 'Header')} style={{ textAlign: 'center' }}>
                            {text('Header Content', 'Заголовок таблицы')}
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow
                        displayBorder={boolean('Header Row2 Display Border', false)}
                        hoverable={boolean('Header Row2 Hoverable', false)}
                        hovered={boolean('Header Row2 Hovered', false)}
                        selectable={boolean('Header Row2 Selectable', false)}
                        striped={boolean('Header Row2 Striped', false)}
                    >
                        <TableHeaderColumn tooltip={text('Column1 Tooltip', 'The ID')}>
                            {text('Header Col1 Text', 'ID')}
                        </TableHeaderColumn>
                        <TableHeaderColumn tooltip={text('Column2 Tooltip', 'The Name')}>
                            {text('Header Col2 Text', 'ФИО работника')}
                        </TableHeaderColumn>
                        <TableHeaderColumn tooltip={text('Column3 Tooltip', 'The Status')}>
                            {text('Header Col3 Text', 'Статус')}
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    deselectOnClickaway={boolean('Body Deselect On Clickaway', true)}
                    displayRowCheckbox={boolean('Body Display Row Checkbox', true)}
                    preScanRows={boolean('Body Pre Scan Rows', true)}
                    showRowHover={boolean('Body Show Row Hover', null)}
                    stripedRows={boolean('Body Striped Rows', null)}
                >
                    <TableRow
                        displayBorder={boolean('Row1 Display Border', false)}
                        hoverable={boolean('Row1 Hoverable', false)}
                        hovered={boolean('Row1 Hovered', false)}
                        selectable={boolean('Row1 Selectable', true)}
                        striped={boolean('Row1 Striped', false)}
                    >
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>Вася Пупкин</TableRowColumn>
                        <TableRowColumn>Работает</TableRowColumn>
                    </TableRow>
                    <TableRow
                        displayBorder={boolean('Row2 Display Border', false)}
                        hoverable={boolean('Row2 Hoverable', false)}
                        hovered={boolean('Row2 Hovered', false)}
                        selectable={boolean('Row2 Selectable', true)}
                        striped={boolean('Row2 Striped', false)}
                    >
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Иван Иванов</TableRowColumn>
                        <TableRowColumn>Не работает</TableRowColumn>
                    </TableRow>
                    <TableRow
                        displayBorder={boolean('Row3 Display Border', false)}
                        hoverable={boolean('Row3 Hoverable', false)}
                        hovered={boolean('Row3 Hovered', false)}
                        selectable={boolean('Row3 Selectable', true)}
                        striped={boolean('Row3 Striped', false)}
                    >
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Пётр Петров</TableRowColumn>
                        <TableRowColumn>Работает</TableRowColumn>
                    </TableRow>
                    <TableRow
                        displayBorder={boolean('Row4 Display Border', false)}
                        hoverable={boolean('Row4 Hoverable', false)}
                        hovered={boolean('Row4 Hovered', false)}
                        selectable={boolean('Row4 Selectable', true)}
                        striped={boolean('Row4 Striped', false)}
                    >
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Сидор Сидоров</TableRowColumn>
                        <TableRowColumn>Работает</TableRowColumn>
                    </TableRow>
                    <TableRow
                        displayBorder={boolean('Row5 Display Border', false)}
                        hoverable={boolean('Row5 Hoverable', false)}
                        hovered={boolean('Row5 Hovered', false)}
                        selectable={boolean('Row5 Selectable', true)}
                        striped={boolean('Row5 Striped', false)}
                    >
                        <TableRowColumn />
                        <TableRowColumn>Null Null</TableRowColumn>
                        <TableRowColumn>???</TableRowColumn>
                    </TableRow>
                </TableBody>
                <TableFooter
                    adjustForCheckbox={boolean('Footer Adjust For Checkbox', true)}
                >
                    <TableRow>
                        <TableRowColumn colSpan="3" style={{ textAlign: 'center' }}>
                            {text('Footet Content', 'Подвал таблицы')}
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
  ));
