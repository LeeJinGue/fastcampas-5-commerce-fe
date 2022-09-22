import { BoxProps, FormLabelProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import { FormDataType } from "./_hooks/useExampleForm";

export interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}
export const FormLabelProp: FormLabelProps = {
  marginBottom: "10px",
  color: "primary.500",
  fontSize: "12px",
  lineHeight: "18px",
  fontWeight: 700,
  fontStyle: "normal",
}