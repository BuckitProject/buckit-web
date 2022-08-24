import React from 'react';
import { Button, styled } from '@mui/material';

interface CustomButtonProps {
  variant: 'text' | 'outlined' | 'contained' | undefined;
  backgroundColor?: string | undefined;
  text_color: string;
  hover_color?: string | undefined;
  active_color?: string | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}
const CustomButton = styled(Button)((props: CustomButtonProps) => ({
  backgroundColor: props.backgroundColor ?? '#4EB08B',
  color: props.text_color,
  '&:hover': {
    backgroundColor: props.hover_color ?? '#4EB08B',
  },
}));

const FullWidthButton = (props: CustomButtonProps) => {
  return (
    <>
      <CustomButton
        variant={props.variant}
        backgroundColor={props.backgroundColor}
        text_color={props.text_color}
        fullWidth={true}
        hover_color={props.hover_color}
        active_color={props.active_color}
        onClick={props.onClick}
      >
        {props.children}
      </CustomButton>
    </>
  );
};

export default FullWidthButton;
