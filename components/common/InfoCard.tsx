import React, {FC, useState} from 'react';
import { Card, CardContent, CardHeader, Box, Button, Table, TableRow, TableCell, tableCellClasses } from '@mui/material'

interface InfoCardProps {
    title?: string,
    button?: string
}

const InfoCard: FC<InfoCardProps> = (props) => {
    const infoData = [
        { num: 1, filedName: 'email', label: '이메일', content: 'yerinko@test.com'},
        { num: 2, filedName: 'email', label: '핸드폰', content: '010-1234-5678'}
    ]
    return (
        <>
           <Card elevation={5}>
               <Box component="span" m={100}>
                   <CardHeader
                       title={props.title}
                       action={
                           <Button variant="contained" color="primary">
                               {props.button}
                           </Button>
                       }
                   />
               </Box>
               <CardContent>
                   <Table
                       sx={{
                           [`& .${tableCellClasses.root}`]: {
                               borderBottom: "none"
                           }
                       }}>
                       { infoData.map((data) => (
                           <TableRow key={data.num}>
                               <TableCell component="th" scope="row">{data.label}</TableCell>
                               <TableCell align="left">{data.content}</TableCell>
                           </TableRow>
                       ))}
                   </Table>
               </CardContent>
           </Card>
        </>
    );
};

export default InfoCard;