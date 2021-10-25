import React, { useEffect } from "react";
import { Flex } from "app/components/common/ui";
import { LaunchTile } from "./components/LaunchTile";
import { FacilitiesTile } from "app/views/Dashboard/components/FacilitiesTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "app/redux/actions/dashboard";
import { selectDashboard, selectModal } from "app/redux/selectors";
import { StarlinkTile } from "app/views/Dashboard/components/StarlinkTile";
import { Loading } from "app/components/common/Loading";
import { Error } from "app/components/common/Error";
import { Centerer } from "app/views/Dashboard/components/Centerer";
import { Modal } from "app/components/common/Modal";
import { closeModal } from "app/redux/reducers/modalReducer";
import { getAvailableDetailsList } from "app/utils/detailsAvailability";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDashboard);
  const modal = useSelector(selectModal);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <>
      <Centerer />
      {data.status === "loading" && <Loading />}
      {data.status === "failed" && <Error />}
      {data.status === "success" && (
        <>
          <Flex alignItems="center" flexDirection="column">
            <LaunchTile
              launch="next"
              availableDetails={getAvailableDetailsList(
                data.launches.next.detailsAvailability
              )}
              {...data.launches.next.data}
            />
            <LaunchTile
              launch="prev"
              availableDetails={getAvailableDetailsList(
                data.launches.prev.detailsAvailability
              )}
              {...data.launches.prev.data}
            />
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <FacilitiesTile title="Launch facilities" data={data.weather} />
            <StarlinkTile title="Starlink" count={data.starlink.activeCount} />
          </Flex>

          {modal.isOpen && (
            <Modal
              isOpen={modal.isOpen}
              closeModal={() => dispatch(closeModal())}
              type={modal.type}
              launch={modal.launch}
              data={{ ...data.launches[modal.launch].data }}
              availableDetails={getAvailableDetailsList(
                data.launches[modal.launch].detailsAvailability
              )}
            ></Modal>
          )}
        </>
      )}
    </>
  );
};
