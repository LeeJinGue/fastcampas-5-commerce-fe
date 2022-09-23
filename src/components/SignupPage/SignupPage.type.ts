import { BoxProps, FormErrorMessageProps, FormLabelProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import { FormDataType } from "./_hooks/useExampleForm";

export interface SignupPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}
// export const FormLabelProp: FormLabelProps = {
//   marginBottom: "10px",
//   color: "primary.500",
//   fontSize: "12px",
//   lineHeight: "18px",
//   fontWeight: 700,
//   fontStyle: "normal",
// }
// export const errorTextProps:FormErrorMessageProps = {
//   textStyle:"textSmall",
//   color:"alertWarning",
// };