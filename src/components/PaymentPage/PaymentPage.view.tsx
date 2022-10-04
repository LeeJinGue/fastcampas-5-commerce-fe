import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, BoxProps, Input } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import { UseFormReturn } from 'react-hook-form';
import { OrderFormDataType } from './_hooks/useOrderForm';
import FormHelper from '@components/common/FormHelper/FormHelper';
import PrimaryButton from '@components/common/New/PrimaryButton';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon';
import TotalPaymentIcon from '@components/common/New/@Icons/Line/TotalPayment';
import PriceCard from '@components/common/Card/PriceCard';

interface PaymentPageProps extends BoxProps {
  formData: UseFormReturn<OrderFormDataType>;
}

function PaymentPageView({ 
  formData: {
    register,
    formState: { errors },
  },
  onSubmit,
  ...basisProps 
}: PaymentPageProps) {
  return (
    <Flex 
    {...basisProps} bgColor="white" w="375px" px="16px" pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column">
      <Text mt="50px" textStyle="titleLarge" textColor="black">{"주문결제"}</Text>
      <Text mt="80px" textStyle="title" textColor="black">{"주문상품"}</Text>
      <PriceCard isPaymentComplete={false} />
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
          errorText={errors.order?.name?.message}>
            <Input
              boxSizing='border-box' pl="20px" textStyle="text" 
              h="40px" alignSelf="stretch" 
              border={"1px solid"} borderColor="black" borderRadius="100px"
              {...register('order.phone')} autoComplete="off" />
          </FormHelper>
        <FormHelper mt="40px" label="주소" 
        errorText={errors.order?.address?.zipcode?.message}>
          <Flex>
          <Input
            boxSizing='border-box' pl="20px" textStyle="text" 
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('order.address.zipcode')} autoComplete="off" />
            <PrimaryButton ml="10px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Rectangle'}>{"우편번호 검색"}</PrimaryButton>
          </Flex>
          <Input
            boxSizing='border-box' mt="10px" pl="20px" textStyle="text" 
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('order.address.detail')} autoComplete="off" />
        </FormHelper>
      </Flex>
      <Box w="343px" h="0" mt="50px" border="1px solid" borderColor="gray.200"/>
      <Flex mt="50px" justifyContent="space-between" alignItems="center">
        <Text textStyle="title" textColor="black">{"배송지 정보"}</Text>
        <Flex alignItems="center">
          <CheckboxIcon state={'Select'} shape={'Rectangle'} />
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
          errorText={errors.delivery?.name?.message}>
            <Input
              boxSizing='border-box' pl="20px" textStyle="text" 
              h="40px" alignSelf="stretch" 
              border={"1px solid"} borderColor="black" borderRadius="100px"
              {...register('delivery.phone')} autoComplete="off" />
          </FormHelper>
        <FormHelper mt="40px" label="주소" 
        errorText={errors.delivery?.address?.zipcode?.message}>
          <Flex>
          <Input
            boxSizing='border-box' pl="20px" textStyle="text" 
            h="40px" alignSelf="stretch"
            border={"1px solid"} borderColor="black" borderRadius="100px"
            {...register('delivery.address.zipcode')} autoComplete="off" />
            <PrimaryButton ml="10px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Rectangle'}>{"우편번호 검색"}</PrimaryButton>
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
      <Box w="343px" h="0" mt="50px" border="1px solid" borderColor="gray.200"/>
      <Text textStyle="title" textColor="black">{"결제수단"}</Text>
      <Flex alignItems="center" h="90px">
        <CheckboxIcon state={'Select'} shape={'Circle'} />
        <TotalPaymentIcon ml="10px" fillcolor='Default'/>
        <Text ml="10px" textStyle="text" textColor="black">{"신용카드 결제"}</Text>
      </Flex>
      <Text mt="30px" textStyle="title" textColor="black">{"최종 결제금액"}</Text>
      <Flex flexDir="column" mt="40px">
        <Flex justifyContent="space-between" textStyle="text" textColor="gray.600">
          <Text>{"총 상품금액"}</Text>
          <Text>{54000}{"원"}</Text>          
        </Flex>
        <Flex mt="10px" justifyContent="space-between" textStyle="text" textColor="gray.600">
          <Text>{"총 배송비"}</Text>
          <Text>{0}{"원"}</Text>          
        </Flex>
      </Flex>
      <Box w="343px" h="0" my="20px" border="1px solid" borderColor="gray.200"/>
      <Flex justifyContent="space-between" >
          <Text textStyle="text" textColor="black">{"결제금액"}</Text>
          <Text textStyle="title" textColor="primary.500">{54000}{"원"}</Text>          
      </Flex>
      <Box w="343px" h="0" my="20px" border="1px solid" borderColor="gray.200"/>
      <Flex alignItems="center">
        <CheckboxIcon state={'Default'} shape={'Rectangle'}  />
        <Text ml="10px" textColor="gray.600" textStyle="text">{"개인정보 수집 이용 동의(필수)"}</Text>
      </Flex>
      <PrimaryButton w="343px" h="50px" mt="40px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'} type='submit'>{"결제하기"}</PrimaryButton>
    </Flex>
  );
}

export default PaymentPageView;
