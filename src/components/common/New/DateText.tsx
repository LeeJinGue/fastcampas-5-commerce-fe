import { FlexProps, Flex, Text } from "@chakra-ui/react";
import { formatCreatedTimeToDate } from "@utils/format";

interface DateTextProps extends FlexProps{
  date: string,
}
const DateText = ({date, ...props}:DateTextProps) => {
  const formatDate = formatCreatedTimeToDate(date)
  return (
    <Flex h="55px" alignItems="center" borderTop="1px solid" borderColor="gray.100" {...props}>
      <Text textStyle="titleSmall">{formatDate}</Text>
    </Flex>
  )
}
export default DateText;