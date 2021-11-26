import { Flex } from "app/components/common/ui";
import { animationProps } from "app/styles/animations";
import { useState } from "react";
import * as S from "./styled";

export const Photos = ({ data }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handleNext = () => {
    if (currentPhoto + 1 < data.length) {
      setCurrentPhoto(currentPhoto + 1);
    } else {
      setCurrentPhoto(0);
    }
  };

  const handlePrev = () => {
    if (currentPhoto === 0) {
      setCurrentPhoto(data.length - 1);
    } else {
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  return (
    <Flex
      height="100%"
      width="100%"
      justifyContent="space-around"
      alignItems="center"
      {...animationProps}
    >
      <S.Arrow isLeft onClick={() => handlePrev()} />
      <S.Photo src={data[currentPhoto]} />
      <S.Arrow onClick={() => handleNext()} />
    </Flex>
  );
};
