import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Grid } from '@mui/system';
import {Cross} from '../Assets/SvgIcons';
const SummaryCard = ({ data, onRemove }) => {
    const highestPrice = data.High;
    const lowestPrice = data.Low;
    const avgMarketCap = (highestPrice + lowestPrice) / 2;

    return (
        <Card sx={{ minWidth: 200, boxShadow: 3 }}>
            <CardContent sx={{ position: "relative" }}>
                <Grid container alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item xs={8}>
                        <Typography variant="h6" sx={{ mb: 2 }}>{data.Name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Highest Price: ${highestPrice.toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lowest Price: ${lowestPrice.toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Avg Market Cap: ${avgMarketCap.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={data.Image} width="50" alt="" />
                    </Grid>
                </Grid>
                {onRemove && (
                    <Button
                        variant="text"
                        size="small"
                        color="error"
                        sx={{ margin: 0, padding: 0, minWidth: "auto", position: "absolute", top: 10, right:14 }}
                        onClick={onRemove}
                    >
                       <Cross/>
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default SummaryCard;