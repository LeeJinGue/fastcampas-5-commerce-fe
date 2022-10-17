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
} from '@chakra-ui/react';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import CommerceCount from '@components/common/Card/CommerceCount';
import { ProductDetailDTOTType } from '@apis/product/ProductApi.type';
import { usePostCartItemMutation } from '@apis/cart/CartApi.mutation';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';
import { getToken } from '@utils/localStorage/token';
// 필요한 데이터: 상품, 유저, 장바구니
interface DrawerBuyProps extends DrawerProps {
  productData: ProductDetailDTOTType,
  cart_id: number,
  user_id: number,
}

function DrawerBuy(props: Omit<DrawerBuyProps, 'children'>) {
  const {productData, cart_id, user_id} = props
  const {name, price} = productData
  const route = useRouter()
  const {mutateAsync: cartItemMutate} = usePostCartItemMutation()

  const handleCartOnclick = () => {
    cartItemMutate({
      productId: productData.id,
      cartId: cart_id,
      count,
    }).then(res => {      
      console.log("# cartItemMutate success:",res)
      route.push({
        pathname:ROUTES.CART, 
        query: {productId: productData.id, count: count}
      })
    }).catch(error => {
      console.log("# cartItemMutate error:",error)
    })
  }
  const handleBuynowOnclick = () => {
    route.push({pathname:ROUTES.PAYMENT.MAIN})
  }
  const [count, setCount] = React.useState(1)
  return (
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
  );
}

export default DrawerBuy;
