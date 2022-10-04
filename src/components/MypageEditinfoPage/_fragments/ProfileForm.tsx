import { Box, BoxProps, Center, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import FormHelper from "@components/common/FormHelper/FormHelper";
import ProfileIcon from "@components/common/New/@Icons/System/Profile";
import AddProfileIcon from "@components/common/New/@Icons/System/Small/AddProfile";
import { FieldErrors,UseFormRegister } from "react-hook-form";
import { EditInfoFormDataType } from "../_hooks/useEditInfoForm";
interface ProfileFormProps extends BoxProps {
  register: UseFormRegister<EditInfoFormDataType>;
  errors: FieldErrors<EditInfoFormDataType>;
}

const ProfileForm = ({
  register,
  errors,
  onSubmit,
  ...basisProps
}: ProfileFormProps) => {
  return <>
    <Box flexDir="column"// 프로필 입력 리스트
    {...basisProps}
    >
      <Text mb="40px" textStyle="title">회원정보수정</Text>
      <Flex mb="40px" justifyContent="center" alignItems="end">
        <ProfileIcon w={70} h={70} shape='Fill' />
        <AddProfileIcon _hover={{cursor:"pointer"}} position="relative" left="-20px"/>
      </Flex>
      <FormHelper mb="50px" label="이름" errorText={errors.username?.message}>
        <Input
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="full" 
          border={"1px solid"} borderColor="black" borderRadius="100px"
          {...register('username')} autoComplete="off" />
      </FormHelper>

      <FormHelper mb="50px" label="닉네임" errorText={errors.nickname?.message}>
        <Input {...register('nickname')} autoComplete="off"
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="full" 
          border={"1px solid"} borderColor="black" borderRadius="100px"
        />
      </FormHelper>

      <FormHelper mb="50px" label="핸드폰 번호"  errorText={errors.phone?.message}>
        <Input flexGrow={1} {...register('phone')} autoComplete="off"
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="full" 
          border={"1px solid"} borderColor="black" borderRadius="100px"
        />
      </FormHelper>

      <FormHelper mb="50px" label="이메일 주소"
        errorText={errors.email?.message}>
        <Input {...register('email')} autoComplete="off"
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="full" 
          border={"1px solid"} borderColor="black" borderRadius="100px"
        />
      </FormHelper>
    </Box>
  </>
}
export default ProfileForm;