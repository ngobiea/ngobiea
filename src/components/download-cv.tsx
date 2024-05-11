'use client';

import { Button } from '@material-tailwind/react';

const DownloadCV = ({
  className,
  fullWidth,
}: {
  className: string;
  fullWidth: boolean;
}) => {
  const handleButtonClick = () => {
    window.open(
      'https://drive.google.com/file/d/11gdxgNsF-mrfNiRidwd7cAfwocBIwP-w/view?usp=drive_link',
      '_blank'
    );
  };
  return (
    <Button
      fullWidth={fullWidth}
      onClick={handleButtonClick}
      variant='outlined'
      size='sm'
      className={className}
    >
      <span>Download CV</span>
    </Button>
  );
};

export default DownloadCV;
