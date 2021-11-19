import React, { useEffect, useState } from "react";
import { Flex, Box } from "app/components/common/ui";
import { Card } from "app/views/Rockets/components/Card";
import { fetchRocketsData } from "app/redux/actions/rockets";
import { useDispatch, useSelector } from "react-redux";
import { selectRockets } from "app/redux/selectors";
import { InfoItem } from "app/components/common/InfoItem";
import { Loading } from "app/components/common/Loading";
import { Error } from "app/components/common/Error";
import { colors } from "app/styles/theme/colors";
import { MoreLessIcon } from "assets/icons/functional/MoreLessIcon";
import * as S from "./styled";
import { openModal } from "app/redux/slices/modalSlice";
import {
  colorizeStatus,
  getActivityStatus,
} from "app/utils/getRocketActivityStatus";
import { RocketsModal } from "./components/RocketsModal";
import { TopPadder } from "../../components/common/TopPadder";

export const Rockets = () => {
  const dispatch = useDispatch();

  const { rockets, status } = useSelector(selectRockets);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && console.log(rockets)}
      {status === "success" && (
        <>
          <TopPadder intensity={14} />
          <S.Wrapper width={{ _: "100%", xl: "820px" }}>
            <Flex flexDirection="column" width="100%">
              <Flex width="100%" flexDirection={{ _: "column", md: "row" }}>
                {rockets
                  .filter(({ active, name }) =>
                    !seeMore
                      ? active || name === "Starship"
                      : !active && name !== "Starship"
                  )
                  .map(
                    ({ name, active, flickr_images: flickrImages }, index) => (
                      <Flex
                        key={name}
                        flexDirection="column"
                        margin="1rem"
                        onClick={() =>
                          dispatch(
                            openModal({
                              type: "Overview",
                              launch: null,
                              item: name,
                            })
                          )
                        }
                      >
                        <Box as="p" m="0" p="0" fontSize="md">
                          {name}
                        </Box>
                        <Card
                          src={
                            name === "Falcon 1"
                              ? flickrImages[0]
                              : flickrImages[1]
                          }
                        >
                          <InfoItem
                            label="status"
                            labelColor={colors.transparentWhite}
                            p="xxs"
                            borderRadius="sm"
                            bg={colorizeStatus(getActivityStatus(name, active))}
                            info={getActivityStatus(name, active)}
                          />
                        </Card>
                      </Flex>
                    )
                  )}
              </Flex>

              <S.Button onClick={() => setSeeMore(!seeMore)}>
                {!seeMore ? "View retired" : "View active"}
                <S.IconWrapper isLeft={seeMore}>
                  <MoreLessIcon />
                </S.IconWrapper>
              </S.Button>
            </Flex>
          </S.Wrapper>
        </>
      )}
      <RocketsModal />
    </>
  );
};
