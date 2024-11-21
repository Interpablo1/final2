import React from 'react';
import { Modal as MuiModal, Box, Typography, Button } from '@mui/material';

const Modal = ({ open, onClose, pokemonDetails }) => (
  <MuiModal open={open} onClose={onClose}>
    <Box style={{ padding: '20px', background: 'white', margin: '50px auto', maxWidth: '500px' }}>
      <Typography variant="h4">{pokemonDetails.name}</Typography>
      <Typography variant="body1">ID: {pokemonDetails.id}</Typography>
      {/* Agrega más detalles aquí */}
      <Button variant="contained" color="secondary" onClick={onClose}>
        Volver
      </Button>
    </Box>
  </MuiModal>
);

export default Modal;
