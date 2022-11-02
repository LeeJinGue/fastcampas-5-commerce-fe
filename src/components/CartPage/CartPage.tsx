import React, { useEffect, useState } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, IconButton, Checkbox } from '@chakra-ui/react';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon';
import { LAYOUT } from '@constants/layout';
import XIcon from '@components/common/New/@Icons/System/XIcon';
import CartQuantityIcon from '@components/common/New/@Icons/System/CartQuantity';
import Commerce from '@components/common/Card/Commerce';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { productSimpleType } from '@constants/dummy';
import { ProductDetailDTOTType } from '@apis/product/ProductApi.type';
import { RefetchOptions, RefetchQueryFilters, useQueries, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { useGetCartQuery } from '@apis/cart/CartApi.query';
import LoadingPage from '@components/common/New/LoadingPage';
import { useDeleteCartItemByCartItemIdMutation, usePostCartMutation } from '@apis/cart/CartApi.mutation';
import { useGetProductByIdQuery, useGetProductsByIdListQueries } from '@apis/product/ProductApi.query';
import axios from 'axios';
import useAppStore from '@features/useAppStore';
import { CartDTOType } from '@apis/cart/CartApi.type';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import useCheckList from './_hook/useCheckList';
import { useDispatch, useSelector } from 'react-redux';
import { orderItemSliceActions } from '@features/orderItem/orderItemSlice';

export type cartItem = {
  count: number,
  productData: ProductDetailDTOTType,
}
interface CartPageViewProps extends ChakraProps {
  cartData: CartDTOType,
  refetch: (options?: (RefetchOptions & RefetchQueryFilters)) => Promise<UseQueryResult>
}
interface EmptyCartPageProps extends ChakraProps {
}
function EmptyCartPage({ ...basisProps }: EmptyCartPageProps) {
  const route = useRouter()
  const handleGoProducts = () => route.push({pathname: ROUTES.PRODUCTS})
  return (
    <Flex
      flexDir="column" pt={LAYOUT.HEADER.HEIGHT} w="375px"
      alignItems="center" pb="80px" bgColor="white" {...basisProps}>
      <Text textStyle="title" textColor="black" textAlign="center" mt="100px">
        {"장바구니가 비어있습니다."}<br />
        {"상품을 추가해보세요!"}
      </Text> 
      <PrimaryButton onClick={handleGoProducts} mt="30px" w="180px" h="50px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"상품보러가기"}</PrimaryButton>
    </Flex>
  )
}
function CartPageData({...basisProps}){
  const { userData } =  useAppStore(state => state.USER)
  const {mutateAsync: postCartMutation} = usePostCartMutation()
  const {id:user_id} = userData
  const {refetch, data:cartData, isError, isLoading} = useGetCartQuery({variables: {user_id:0}, options: {
    notifyOnChangeProps: ["data"],
  }})
  if(isLoading || cartData===undefined) return <LoadingPage />
  if(isError){
    return <Text>장바구니 정보 불러오기 실패</Text>
  }
  if(cartData && cartData.length === 0){
    // cartData가 없다면, 장바구니를 새로 생성합니다.
    postCartMutation({userId: user_id}).then(res => {
      console.log("새 장바구니를 생성했습니다:",res)
      return <EmptyCartPage />
    })
  }
    if(cartData && cartData[0].cartitem && cartData[0].cartitem.length === 0) return <EmptyCartPage />
    return (
    <>
      <CartPageView refetch={refetch} cartData={cartData[0]} {...basisProps}/>
    </>
    )
  
}
function CartPageView({ refetch,cartData,...basisProps }: CartPageViewProps) {
  const dispatch =  useDispatch()
  const orderItemList = useAppStore(state => state.ORDER_ITEM)
  const { mutateAsync: deleteCartItemMutation } = useDeleteCartItemByCartItemIdMutation()
  const [totalCost, setTotalCost] = useState(0)
  const [totalDeliveryCost, setTotalDeliveryCost] = useState(0)
  const {checkList, setCheckList, changeByIndex, setAllCheck, isAllCheck} = useCheckList({length: cartData.cartitem.length, initVal:false})
  const route = useRouter()
  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllCheck(e.target.checked)
  }
  const handleDeleteItem = (id:number, index:number) => {
    deleteCartItemMutation({cartItemId: id}).then((res) => {
      refetch()
    }).catch(err => {
      console.log("# cartItem 삭제 에러:",err)
    })
  }
  const handleDeleteSelectedItem = async() => {
    checkList.forEach((isCheck, index) => {
      if(isCheck) {
        deleteCartItemMutation({cartItemId:cartData.cartitem[index].id})
        return undefined
      }
      return isCheck
    })
    const newCheckArray = checkList.filter((isCheck) => isCheck !== undefined)
    setCheckList(newCheckArray)
    refetch()
  }
  const handlePayment = (total:number) => {
    dispatch(orderItemSliceActions.setTotal({totalDeliveryCost, totalCost}))
    if(totalCost === 0) {
      alert("선택된 아이템이 없습니다.")
      return
    }
    route.push({pathname:ROUTES.PAYMENT.MAIN})
  }

    return (
      <Flex   // 장바구니 카드 리스트
        flexDir="column" pt={LAYOUT.HEADER.HEIGHT} w="375px" bgColor="gray.200" {...basisProps}>
        <Flex // 선택 탭
          w="375px" h="50px" bgColor="white" px="16px" justifyContent="space-between" alignItems="center">
          <Flex justifyContent="center" alignItems="center">
            <Checkbox
            onChange={handleCheckAll} isChecked={isAllCheck}
            icon={<CheckboxIcon state={isAllCheck ? "Select" : "Default"} shape="Rectangle" />}>
              <Text ml="10px" textStyle="text" textColor="gray.600">{"모두선택"}</Text>
            </Checkbox>
          </Flex>
          <Button bgColor="white" onClick={handleDeleteSelectedItem}>
            <Text textStyle="text" textColor="gray.400">{"선택삭제"}</Text>
          </Button>
        </Flex>
        {cartData.cartitem.map((cart, cartIndex) => {
          return <Commerce mt="10px" handledeleteitem={handleDeleteItem} 
          ischeck={checkList[cartIndex]} changeByIndex={changeByIndex}
          
          // setischeck={setCheckList[cartIndex]}
          cartindex={cartIndex} itemdata={cart} key={cart.id} 
          settotalcost={setTotalCost} settotaldeliverycost={setTotalDeliveryCost} />
        })}
        <Flex   // 결제카드리스트
          flexDir="column" bgColor="white" px="16px" mt="10px" pb="50px">
          <Flex // 결제 텍스트
            flexDir="column" textColor="gray.600" textStyle="text" my="20px">
            <Flex
              justifyContent="space-between">
              <Text>{"총 상품 금액"}</Text>
              <Text>{totalCost}{"원"}</Text>
            </Flex>
            <Flex
              justifyContent="space-between">
              <Text>{"총 배송비"}</Text>
              <Text>{totalDeliveryCost}{"원"}</Text>
            </Flex>
          </Flex>
          <Box border="1px solid" borderColor="gray.200" w="343px" h="0px"></Box>
          <Flex // 결제 금액
            justifyContent="space-between" my="20px">
            <Text textStyle="text" textColor="black">{"결제금액"}</Text>
            <Text textStyle="title" textColor="primary.500">{totalCost+totalDeliveryCost}{"원"}</Text>
          </Flex>
          <PrimaryButton mb="30px" h="50px" w="343px" onClick={() => handlePayment(totalCost+totalDeliveryCost)} btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"결제하기"}</PrimaryButton>
        </Flex>
      </Flex>
    );
  }


export default CartPageData;
