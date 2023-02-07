import { useGetReviewListByTagQuery } from "@apis/product/ProductApi.query";
import { TagReviewDTOTType } from "@apis/product/ProductApi.type";
import { ChakraProps, useRadioGroup, Text } from "@chakra-ui/react";
import BadgeSlider from "@components/common/BadgeSlider";
import SlideCard from "@components/common/Card/Slide";
import CardSlider from "@components/common/CardSlider";
import LoadingPage from "@components/common/New/LoadingPage";
import { BADGE_NAME_LIST } from "@constants/string";
import { useState } from "react";
import { LoadingIndicator } from "react-select/dist/declarations/src/components/indicators";
import BadgeRadio from "./BadgeRadio";

const DEFAULT_TAG = "전체"
interface BadgeReviewSliderDataProps extends ChakraProps{
}
interface BadgeReviewSliderViewProps extends BadgeReviewSliderDataProps{
  selectedTag: string,
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>,
  reviewList: TagReviewDTOTType[],
}
const BadgeReviewSliderData = ({...basisProps}:BadgeReviewSliderDataProps) => {
  const [selectedTag, setSelectedTag] = useState(DEFAULT_TAG)
  const { data: firstTagProductList, isError:isReviewError, isLoading:isReviewLoading, isSuccess:isReviewSuccess } = useGetReviewListByTagQuery({
    variables:{ tag_name:selectedTag},
    options: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  })
  if ( isReviewLoading) return <LoadingPage />
  if ( !isReviewSuccess || isReviewError ) return <Text>에러발생!</Text>
  
  const reviewList:TagReviewDTOTType[] = []
  if(firstTagProductList) {
      firstTagProductList.forEach((product) => {
      reviewList.push(...product.reviewList)
    })
  }
  return (<BadgeReviewSliderView reviewList={reviewList} selectedTag={selectedTag} setSelectedTag={setSelectedTag} {...basisProps} />)
}

const BadgeReviewSliderView = ({reviewList, setSelectedTag, selectedTag, ...basisProps}:BadgeReviewSliderViewProps) => {
  const handleBadgeText = (badge: string) => {        // Radio 버튼 onChange 이벤트
    setSelectedTag(badge)
  }
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: selectedTag,
    onChange: handleBadgeText,
    name: "상품 종류"
  })
  return (
    <>
      <BadgeSlider children={BADGE_NAME_LIST.map((tag) =>
        <BadgeRadio key={tag} ml="10px" badgeName={tag} {...getRadioProps({ value: tag  })}></BadgeRadio>)} />
       {reviewList.length === 0 ? <SlideCard mt="76px" mx="10px"/> : 
      <CardSlider >
        {reviewList.map((reviewData) =>
        <SlideCard mt="76px" mx="10px" key={reviewData.id.toString()} reviewData={reviewData} />)} 
      </CardSlider>}
    </>)
}
export default BadgeReviewSliderData;

