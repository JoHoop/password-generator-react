import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Wallpaper, Widget } from './Wallpaper';

export const PasswordGenerator = () => {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const length = 18;
  const blockSize = 6;
  const delimiter = '-';
  const password = Array(length)
    .fill(chars)
    .map(function (c) {
      return c[Math.floor(Math.random() * c.length)];
    })
    .join('')
    .match(new RegExp('.{1,' + blockSize + '}', 'g'))
    .join(delimiter);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Widget>
        <Box
          component='form'
          noValidate
          autoComplete='off'
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Typography>{password}</Typography>
        </Box>
      </Widget>
      <Wallpaper />
    </Box>
  );
};
