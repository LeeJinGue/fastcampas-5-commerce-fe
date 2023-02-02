import { Button, ButtonProps, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Text, useDisclosure } from "@chakra-ui/react";
import DuotonePaymentIcon from "./@Icons/Duotone/Payment";
import PrimaryButton from "./PrimaryButton";

interface PrimaryButtonProps extends ModalProps {
  isOpen: boolean,
  onClose: () => void,
  cancelMsg?: string,
  cancelOnclick?: () => void,
  okMsg?: string,
  okOnclick?: () => void,
  bodyMsg: string,
}

const Popup = ({ ...props }: PrimaryButtonProps) => {
  const { isOpen, onClose, cancelMsg,cancelOnclick, okMsg,okOnclick, bodyMsg } = props
  const isPaymentClear = !cancelMsg && !okMsg
  return (
    <Modal blockScrollOnMount={false} isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="343px" h={isPaymentClear ? "180px": "300px"} py="30px" m="0">
        <ModalCloseButton color="gray" />
        <ModalBody justifyContent="center" >
        <Flex h={isPaymentClear ? "fit-content": "full"} flexDir="column" justifyContent="space-around">
            <Text textStyle="title" textColor="black" alignSelf="center">{bodyMsg}</Text>
        </Flex>
        </ModalBody>
        <ModalFooter justifyContent="space-around" px="0" py="0" >
          {cancelMsg && <PrimaryButton width="155px" h="55px" onClick={cancelOnclick} btntype={"Line"} btnstate={"Primary"} btnshape={"Round"} children={cancelMsg} />}
          {okMsg && <PrimaryButton width="155px" h="55px" onClick={okOnclick} btntype={"Solid"} btnstate={"Primary"} btnshape={"Round"} children={okMsg} />}
          {isPaymentClear && <DuotonePaymentIcon />}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


export default Popup;