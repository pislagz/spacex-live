import { Tile } from "app/components/common/Tile";
import { Flex } from "app/components/common/ui";
import { setRoute } from "app/redux/slices/routeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Starlink = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute({ route: "Starlink" }));
  }, [dispatch]);

  return (
    <Flex margin="auto auto">
      <Tile height="400px">Starlink data will appear here.</Tile>;
    </Flex>
  );
};
