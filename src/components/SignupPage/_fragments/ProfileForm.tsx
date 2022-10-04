import { Box, BoxProps, Center, IconButton, Input, Text } from "@chakra-ui/react";
import FormHelper from "@components/common/FormHelper/FormHelper";
import ProfileIcon from "@components/common/New/@Icons/System/Profile";
import { FieldErrors,UseFormRegister } from "react-hook-form";
import { SignupFormDataType } from "../_hooks/useSignupForm";
interface ProfileFormProps extends BoxProps {
  register: UseFormRegister<SignupFormDataType>;
  errors: FieldErrors<SignupFormDataType>;
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
      <Text mb="40px" textStyle="title">회원정보입력</Text>
      <Center flexDir="column">
        <IconButton mb="40px" aria-label='Change Profile' icon={<ProfileIcon w={70} h={70} shape='Fill' />} />
      </Center>
      <FormHelper mb="50px" label="이름" errorText={errors.username?.message}>
        <Input
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="343px" border={"1px solid"} borderColor="black" borderRadius="100px"
          {...register('username')} autoComplete="off" />
      </FormHelper>

      <FormHelper mb="50px" label="닉네임" errorText={errors.nickname?.message}>
        <Input {...register('nickname')} autoComplete="off"
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="343px" border={"1px solid"} borderColor="black" borderRadius="100px"
        />
      </FormHelper>

      <FormHelper mb="50px" label="핸드폰 번호"  errorText={errors.phone?.message}>
        <Input flexGrow={1} {...register('phone')} autoComplete="off"
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="343px" border={"1px solid"} borderColor="black" borderRadius="100px"
        />
      </FormHelper>

      <FormHelper mb="50px" label="이메일 주소"
        errorText={errors.email?.message}>
        <Input {...register('email')} autoComplete="off"
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="343px" border={"1px solid"} borderColor="black" borderRadius="100px"
        />
      </FormHelper>
    </Box>
  </>
}
export default ProfileForm;