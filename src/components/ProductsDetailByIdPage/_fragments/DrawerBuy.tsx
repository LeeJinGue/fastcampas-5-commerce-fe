import React from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  Text,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Input,
  Modal,
  useDisclosure,
} from '@chakra-ui/react';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import CommerceCount from '@components/common/Card/CommerceCount';
import { usePostCartItemMutation } from '@apis/cart/CartApi.mutation';
import { useDispatch } from 'react-redux';
import { addOrderItemType, orderItemSliceActions, orderItemType, setTotalType } from '@features/orderItem/orderItemSlice';
import Popup from '@components/common/New/Popup';
import { cart_popup_string } from '@constants/string';
// 필요한 데이터: 상품, 유저, 장바구니
interface DrawerBuyProductData {
  id: number;
  name: string;
  price: number;
  capacity: number;
}
interface DrawerBuyProps extends DrawerProps {
  productData: DrawerBuyProductData,
  cart_id: number,
}
const {bodyText, okText, cancelText} = cart_popup_string
function DrawerBuy(props: Omit<DrawerBuyProps, 'children'>) {
  const {onClose: drawerClose} = props
  const dispatch =  useDispatch()
  const {productData, cart_id:cartId} = props
  const {name, price, id:productId} = productData
  const route = useRouter()
  const {mutateAsync: cartItemMutate} = usePostCartItemMutation()
  const [count, setCount] = React.useState(1)
  const { isOpen:isPopupOpen, onClose:popupClose, onOpen:popupOpen} = useDisclosure()
  const handleCartOnclick = () => {
    // 장바구니 버튼 onClick 이벤트 함수
    cartItemMutate({productId,cartId, count,}).then(res => {      
      console.log("# cartItemMutate success:",res)
      popupOpen()
    }).catch(error => {
      console.log("# cartItemMutate error:",error)
    })
  }
  const handleBuynowOnclick = () => {
    // 바로구매 버튼 onClick 이벤트 함수
    const {id:productId, name, capacity, price} = productData
    const buyNowTotalCost = count * price
    const buyNowTotalDeliveryCost = (buyNowTotalCost <= 30000 ? 2500 : 0) 
    const tempCartItemId = -1
    const buyNowOrderItem:orderItemType = {
      cartItemId: tempCartItemId,
      count,productId, name, capacity, price
    }
    dispatch(orderItemSliceActions.delAllOrderItem())
    dispatch(orderItemSliceActions.addOrderItem({cartItemId:tempCartItemId, orderItem:buyNowOrderItem}))
    dispatch(orderItemSliceActions.setTotal({totalCost:buyNowTotalCost, totalDeliveryCost:buyNowTotalDeliveryCost}))
    route.push({pathname:ROUTES.PAYMENT.MAIN})
  }
  const handleContinueShopping = () => {
    // 쇼핑 계속하기 onClick 이벤트 함수
    popupClose()
    drawerClose()
  }
  const moveToCartPage = () => {
    // 장바구니 이동 onClick 이벤트 함수
    route.push({pathname:ROUTES.CART})
  }
  return (
    <>
    <Drawer placement="bottom" {...props}>
      <DrawerOverlay  />
      <DrawerContent position="relative" w="375px" borderRadius="10px 10px 0 0">
        <DrawerBody px="16px" pt="20px">
          <CommerceCount count={count} setcount={setCount} name={name} price={price} />
          <Flex textStyle="text" textColor="black" mt="5px" justifyContent="space-between">
            <Text >{"총 수량 "}<Text textStyle="title" textColor="primary.500" as="span">{count}</Text>{" 개"}</Text>
            <Text>{"합계"}<Text textStyle="title" as="span">{` ${count*price}원`}</Text></Text>
          </Flex>
        </DrawerBody>
        <DrawerFooter px="16px" pb="30px" pt="10px" justifyContent="space-between">
            <PrimaryButton w="165px" h="50px" onClick={handleCartOnclick} btntype={'Line'} btnstate={'Primary'} btnshape={'Round'}>
              장바구니
            </PrimaryButton>
            <PrimaryButton w="165px" h="50px" onClick={handleBuynowOnclick} btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>
              바로구매
            </PrimaryButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    <Popup isOpen={isPopupOpen} onClose={popupClose} 
    okMsg={okText} okOnclick={handleContinueShopping} 
    bodyMsg={bodyText} 
    cancelMsg={cancelText} cancelOnclick={moveToCartPage} 
    children={''} />
    </>
  );
}

export default DrawerBuy;
