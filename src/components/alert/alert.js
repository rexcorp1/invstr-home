import * as React from 'react';
import PropTypes from "prop-types"
// import CloseIcon from '@mui/icons-material/Close';
import { Typography, IconButton, Alert, Box, Collapse } from '@mui/material';

const Alerts = ({ variant, severity, title }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert variant={variant} severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
            x
              {/* <CloseIcon fontSize="inherit" /> */}
            </IconButton>
          }
          sx={{ borderRadius:0 }}
        >
            <Typography
                align="center"
            >
                {title}
            </Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}

Alerts.defaultProps = {
  variant: `filled`,
  severity: `info`,
}

Alerts.propTypes = {
  variant: PropTypes.string,
  severity: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Alerts;