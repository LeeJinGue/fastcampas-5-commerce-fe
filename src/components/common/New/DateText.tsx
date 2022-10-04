import { FlexProps, Flex, Text } from "@chakra-ui/react";

interface DateTextProps extends FlexProps{
  date: string,
}
const DateText = ({date, ...props}:DateTextProps) => {
  return (
    <Flex h="55px" alignItems="center" borderTop="1px solid" borderColor="gray.100" {...props}>
      <Text textStyle="titleSmall">{`[${date}]`}</Text>
    </Flex>
  )
}
export default DateText;