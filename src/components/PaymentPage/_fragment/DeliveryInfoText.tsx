import { FlexProps, Flex, Text } from "@chakra-ui/react";

interface DeliveryInfoTextProps extends FlexProps{
  title: string,
  content: string,
}
const DeliveryInfoText = ({...basisprops}: DeliveryInfoTextProps) => {
  const {title, content} = {...basisprops}
  return (
    <Flex >
    <Text w="92px" textStyle="text" textColor="black">{title}</Text>
    <Text ml="10px" textStyle="text" textColor="gray.700">{content}</Text>          
  </Flex>
  )
}
export default DeliveryInfoText;