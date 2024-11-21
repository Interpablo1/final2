import React from 'react';
import { Card as MuiCard, CardContent, Typography, Button } from '@mui/material';

const Card = ({ pokemon, onSelect }) => (
  <MuiCard style={{ margin: '20px', padding: '10px', maxWidth: '300px' }}>
    <CardContent>
      <Typography variant="h5">{pokemon.name}</Typography>
      <Button variant="contained" color="primary" onClick={() => onSelect(pokemon)}>
        Ver detalles
      </Button>
    </CardContent>
  </MuiCard>
);

export default Card;
