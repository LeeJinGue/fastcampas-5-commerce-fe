import { BoxProps, Box, Text, Circle } from "@chakra-ui/react";
import CheckLineIcon from "@components/common/New/@Icons/System/CheckLine";
import DuotoneAssignIcon from "@components/common/New/@Icons/Duotone/Assign";
import DuotoneBoxIcon from "@components/common/New/@Icons/Duotone/Box";
import DuotoneDeliveryIcon from "@components/common/New/@Icons/Duotone/Delivery";
import DuotonePaymentIcon from "@components/common/New/@Icons/Duotone/Payment";

type iconTypes = "Box" | "Delivery" | "Payment" | "Assign";
interface DistributionProcessProps extends BoxProps {
  checkIconShow: boolean,
  title: string,
  contents: JSX.Element,
  iconType: iconTypes,
}
interface DuotoneIcontProps{
  iconType: iconTypes,
  strokeColor? :string, 
}
const DuotoneIcon = ( {iconType, strokeColor} :DuotoneIcontProps) => {
  switch (iconType) {
    case "Box":
      return <DuotoneBoxIcon strokeColor={strokeColor} />
    case "Delivery":
      return <DuotoneDeliveryIcon strokeColor={strokeColor} />
    case "Payment":
      return <DuotonePaymentIcon strokeColor={strokeColor} />
    case "Assign":
      return <DuotoneAssignIcon strokeColor={strokeColor} />
    default:
      return  <></>
}
};
const DistributionProcess = ({ iconType,checkIconShow, ...props }: DistributionProcessProps) => {
  const { title, contents } = props

  let strokeColor = "white"
  let circleColor = "primary.500"
  let borderColor = "primary.500"
  let textColor = "gray.800"
  if (!checkIconShow) {
    strokeColor = "#CBCED6"
    circleColor = "white"
    borderColor = "gray.400"
    textColor = "gray.400"
  }
  
  return (
  <Box display="flex" flexDir="row" {...props}>
    <Circle ml="75px" size="150px" bg={circleColor}
      boxSizing='border-box' border="2px solid" borderColor={borderColor}
    >
      <DuotoneIcon strokeColor={strokeColor} iconType={iconType} />
    </Circle>
    <Box display="flex" flexDir="column" justifyContent="center" ml="10px">
      <Box display="flex" justifyContent="center" flexDir="row" >
        {checkIconShow && <CheckLineIcon bg="transparent" checked={checkIconShow} />}
        <Text textStyle="title" textColor={textColor}>{title}</Text></Box>
      <Text textStyle="text" textAlign="center" textColor={textColor}>{contents}</Text>
    </Box>
  </Box>
  )
}

export default DistributionProcess;