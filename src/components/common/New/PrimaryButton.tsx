import { Button, ButtonProps, Text } from "@chakra-ui/react";

const PrimaryButton = ({ ...props }: ButtonProps) => {
  const {children} = props
  return (
    <Button
    px="15px"
    bg="primary.500"
    borderRadius="25px"
    boxSizing="border-box"
      {...props}>
        {typeof children === 'string' ? 
        <Text textAlign="center" color="white" textStyle="button">{children}</Text> : children}
    </Button>
  );
};


export default PrimaryButton;