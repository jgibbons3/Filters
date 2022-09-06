import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

interface InstitutionNameRulesProps {
  open: boolean;
  onClose: void;
}

const InstitutionNameRules = (props: InstitutionNameRulesProps) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Institution Name Rules</DialogTitle>
        {/* add rule */}
    </Dialog>
  );
}

export default InstitutionNameRules;