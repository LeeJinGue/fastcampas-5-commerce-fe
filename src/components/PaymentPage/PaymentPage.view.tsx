import React, { useState } from 'react';
import { Box, Flex, Text, BoxProps, Input, Checkbox } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { FormDataType, OrderFormDataType } from './_hooks/useOrderForm';
import FormHelper from '@components/common/FormHelper/FormHelper';
import PrimaryButton from '@components/common/New/PrimaryButton';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon';
import TotalPaymentIcon from '@components/common/New/@Icons/Line/TotalPayment';
import PriceCard from '@components/common/Card/PriceCard';
import { OrderItemStateType } from '@features/orderItem/orderItemSlice';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { DAUM_ADDRESS_SCRIPT_URL } from '@constants/social';
import CheckLineIcon from '@components/common/New/@Icons/System/CheckLine';
import { usePrevDupSubmit } from 'hooks/usePrevDupClick';
import { CONFIG } from '@config';
type AddrType = "O" | "D"
// O: Order(주문자 정보), D: Delivery(배송지 정보)
const initialFormData = {
  name: "",
  phone: "",
  address: {
    base: "",
    detail: "",
    post: "",
  }
}
const initialOrderData: OrderFormDataType = {
  order: initialFormData,
  delivery: initialFormData,
  deliveryrequest: "",
  privacyAgree: false
}
interface PaymentPageProps extends BoxProps {
  formData: UseFormReturn<OrderFormDataType>;
  orderData: OrderItemStateType,
  isagree: boolean,
  setisagree: (value: React.SetStateAction<boolean>) => void,
}

function PaymentPageView({
  formData: {
    register,
    formState: { errors },
    getValues,
    setValue,
    control
  },
  onSubmit,
  orderData,
  isagree,
  setisagree,
  ...basisProps
}: PaymentPageProps) {
  const {orderItemList} = orderData
  
  const handleAgree = () => {
    setisagree(prev => !prev)
  }
  const [isSame, setIsSame] = useState(false)
  const [deliveryData, setDeliveryData] = useState<FormDataType>(initialFormData)
  const {totalCost, totalDeliveryCost} = orderData
  const handleSame = () => {
    setIsSame(prev => {
      if (prev) {
        setValue("delivery", deliveryData)
      }
      else {
        const { order, delivery } = getValues()
        setDeliveryData(delivery)
        setValue("delivery", order)
      }
      return !prev
    })
  }
  const postOpen = useDaumPostcodePopup(DAUM_ADDRESS_SCRIPT_URL);
  const privacyAgree = useWatch({
    control,
    name: "privacyAgree"
  })
  const handleOrderAddressComplete = (data:Address) => {
    let fullAddress = data.jibunAddress;
    let extraAddress = '';

    if (data.userSelectedType === 'R') {
      fullAddress = data.roadAddress
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // J면 jibun(지번), R이면 Road(도로명)
    setValue("order.address.base", fullAddress)
    setValue("order.address.post", data.zonecode)
  };
  const handleDeliveryAddressComplete = (data:Address) => {
    let fullAddress = data.jibunAddress;
    let extraAddress = '';
    if (data.userSelectedType === 'R') {
      fullAddress = data.roadAddress
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // J면 jibun(지번), R이면 Road(도로명)
    setValue("delivery.address.base", fullAddress)
    setValue("delivery.address.post", data.zonecode)
  };
  React.useEffect(() => {
    if(CONFIG.ENV === "development"){
      setValue("order", {name: "테스트 이름", phone: "010-1234-1234", address:{base: "경기 가평군 가평읍 가랫골길 1 (이화리)", post: "135-100", detail: "테스트주소"}})
      setValue("delivery", {name: "테스트 이름", phone: "010-1234-1234", address:{base: "경기 가평군 가평읍 가랫골길 1 (이화리)", post: "135-100", detail: "테스트주소"}})
      setValue("deliveryrequest", "테스트 요청사항")
    }
  }, [])
  const {oneOnSubmit:onSubmitOne} = usePrevDupSubmit({callBack: onSubmit})
  return (
    <Box as="form"
      {...basisProps} onSubmit={(e) => {
        e.preventDefault()
        onSubmitOne()
      }} bgColor="white" w="375px" px="16px" pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column">
      <Text mt="50px" textStyle="titleLarge" textColor="black">{"주문결제"}</Text>
      <Text mt="80px" textStyle="title" textColor="black">{"주문상품"}</Text>
      {orderItemList.map((orderItem) => <PriceCard key={orderItem.cartItemId} isshippingfeevisible={false} productid={orderItem.productId} count={orderItem.count} status={''} />)}
      <Text mt="45px" textStyle="title" textColor="black">{"주문자 정보"}</Text>
      <Flex   // 주문 Form
        flexDir="column" mt="40px">
        <FormHelper label="이름"
          errorText={errors.order?.name?.message}>
          <Input
            boxSizing='border-box' pl="20px" textStyle="text"
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('order.name')} autoComplete="off" />
        </FormHelper>
        <FormHelper mt="40px" label="핸드폰 번호"
          errorText={errors.order?.phone?.message}>
          <Input
            boxSizing='border-box' pl="20px" textStyle="text"
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('order.phone')} autoComplete="off" />
        </FormHelper>
        <FormHelper mt="40px" label="주소"
          errorText={errors.order?.address?.base?.message}>
          <Flex>
            <Input
              readOnly boxSizing='border-box' pl="20px" textStyle="text"
              h="40px" alignSelf="stretch"
              border={"1px solid"} borderColor="black" borderRadius="100px"
              {...register('order.address.base')} autoComplete="off" />
            <PrimaryButton ml="10px" btntype={'Solid'} onClick={() => 
            {
              postOpen({ onComplete: handleOrderAddressComplete });
            }}
            btnstate={'Primary'} btnshape={'Rectangle'}>{"우편번호 검색"}</PrimaryButton>
          </Flex>
          <Input
            boxSizing='border-box' mt="10px" pl="20px" textStyle="text"
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('order.address.detail')} autoComplete="off" />
        </FormHelper>
      </Flex>
      <Box w="343px" h="0" mt="50px" border="1px solid" borderColor="gray.200" />
      <Flex mt="50px" justifyContent="space-between" alignItems="center">
        <Text textStyle="title" textColor="black">{"배송지 정보"}</Text>
        <Flex alignItems="center">
          <CheckboxIcon state={isSame ? 'Select' : 'Default'} shape={'Rectangle'} _hover={{ cursor: "pointer" }} onClick={handleSame} />
          <Text ml="10px" textStyle="text" textColor="gray.600">{"주문자 정보와 동일"}</Text>
        </Flex>
      </Flex>
      <Flex   // 배송지 Form
        flexDir="column" mt="40px">
        <FormHelper label="이름"
          errorText={errors.delivery?.name?.message}>
          <Input
            boxSizing='border-box' pl="20px" textStyle="text"
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('delivery.name')} autoComplete="off" />
        </FormHelper>
        <FormHelper mt="40px" label="핸드폰 번호"
          errorText={errors.delivery?.phone?.message}>
          <Input
            boxSizing='border-box' pl="20px" textStyle="text"
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('delivery.phone')} autoComplete="off" />
        </FormHelper>
        <FormHelper mt="40px" label="주소"
          errorText={errors.delivery?.address?.base?.message}>
          <Flex>
            <Input
              readOnly boxSizing='border-box' pl="20px" textStyle="text"
              h="40px" alignSelf="stretch"
              border={"1px solid"} borderColor="black" borderRadius="100px"
              {...register('delivery.address.base')} autoComplete="off" />
            <PrimaryButton ml="10px" btntype={'Solid'} btnstate={'Primary'} onClick={() =>{
              postOpen({ onComplete: handleDeliveryAddressComplete });
            }
            // handlePostClick(handleDeliveryAddressComplete)
          } 
            btnshape={'Rectangle'}>{"우편번호 검색"}</PrimaryButton>
          </Flex>
          <Input
            boxSizing='border-box' mt="10px" pl="20px" textStyle="text"
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('delivery.address.detail')} autoComplete="off" />
        </FormHelper>
      </Flex>
      <FormHelper mt="50px" label="배송요청사항"
        errorText={errors.deliveryrequest?.message}>
        <Input
          boxSizing='border-box' pl="20px" textStyle="text"
          h="40px" alignSelf="stretch"
          border={"1px solid"} borderColor="black" borderRadius="100px"
          {...register('deliveryrequest')} autoComplete="off" />
      </FormHelper>
      <Box w="343px" h="0" mt="50px" border="1px solid" borderColor="gray.200" />
      <Text textStyle="title" textColor="black">{"결제수단"}</Text>
      <Flex alignItems="center" h="90px">
        <CheckboxIcon state={'Select'} _hover={{ cursor: "pointer" }} shape={'Circle'} />
        <TotalPaymentIcon ml="10px" fillcolor='Default' />
        <Text ml="10px" textStyle="text" textColor="black">{"신용카드 결제"}</Text>
      </Flex>
      <Text mt="30px" textStyle="title" textColor="black">{"최종 결제금액"}</Text>
      <Flex flexDir="column" mt="40px">
        <Flex justifyContent="space-between" textStyle="text" textColor="gray.600">
          <Text>{"총 상품금액"}</Text>
          <Text>{totalCost}{"원"}</Text>
        </Flex>
        <Flex mt="10px" justifyContent="space-between" textStyle="text" textColor="gray.600">
          <Text>{"총 배송비"}</Text>
          <Text>{totalDeliveryCost}{"원"}</Text>
        </Flex>
      </Flex>
      <Box w="343px" h="0" my="20px" border="1px solid" borderColor="gray.200" />
      <Flex justifyContent="space-between" >
        <Text textStyle="text" textColor="black">{"결제금액"}</Text>
        <Text textStyle="title" textColor="primary.500">{totalCost+totalDeliveryCost}{"원"}</Text>
      </Flex>
      <Box w="343px" h="0" my="20px" border="1px solid" borderColor="gray.200" />
      {/* <Flex alignItems="center">
        <CheckboxIcon state={isagree ? 'Select' : 'Default'} shape={'Rectangle'} _hover={{ cursor: "pointer" }} onClick={handleAgree} />
        <Text ml="10px" textColor="gray.600" textStyle="text">{"개인정보 수집 이용 동의(필수)"}</Text>
      </Flex> */}
      <FormHelper mt="50px"
        errorText={errors.privacyAgree?.message}>
        <Flex alignItems="center">
        <Checkbox
              {...register('privacyAgree')}
              isChecked={privacyAgree}
              icon={<CheckLineIcon isChecked={privacyAgree} />}
        ></Checkbox>
        <Text ml="10px" textColor="gray.600" textStyle="text">{"개인정보 수집 이용 동의(필수)"}</Text>
        </Flex>
      </FormHelper>
      <PrimaryButton w="343px" h="50px" mt="40px" 
      btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'} type='submit'>{"결제하기"}</PrimaryButton>
    </Box>
  );
}

export default PaymentPageView;
