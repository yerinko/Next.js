import React, {FC} from 'react';
import { Card, CardContent, CardHeader, Box, Typography, Button, Collapse, Table, TableRow, TableCell } from '@mui/material'

interface InfoCardProps {
    title?: string
}

const InfoCard: FC<InfoCardProps> = (props) => {
    const infoData = [
        { num: 1, filedName: 'email', label: '이메일', content: 'yerinko@test.com'},
        { num: 2, filedName: 'email', label: '이메일', content: 'yerinko@test.com'}
    ]
    return (
        <>
           <Card elevation={5}>
               <Box component="span" m={100}>
                   <CardHeader
                       title="Title"
                       action={
                           <Button variant="contained" color="primary">
                               등록
                           </Button>
                       }
                   />
               </Box>
               <CardContent>
                   <Table>
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