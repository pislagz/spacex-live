import { InfoItem } from "app/components/common/InfoItem";
import { Tile } from "app/components/common/Tile";
import { Flex } from "app/components/common/ui";
import { fetchActiveStarlinks } from "app/redux/actions/activeStarlinks";
import { selectActiveStarlinks } from "app/redux/selectors";
import { setRoute } from "app/redux/slices/routeSlice";
import { Satellite } from "assets/icons/buttons/Satellite";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Mobile = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(selectActiveStarlinks);

  useEffect(() => {
    dispatch(setRoute({ route: "Starlink" }));
    if (!count?.activeCount) {
      dispatch(fetchActiveStarlinks());
    }
  }, [dispatch, count?.activeCount]);

  return (
    <Tile title="Notice">
      <Flex
        m="auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Satellite fill={"rgba(255,255,255,0.4)"} lightColor={"white"} />
        <InfoItem info="Mobile view available soon!" />
      </Flex>
    </Tile>
  );
};
