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
import { closeModal } from "app/redux/slices/modalSlice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { launches, status, weather, starlink } = useSelector(selectDashboard);
  const modal = useSelector(selectModal);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  const launchTypes = ["next", "prev"];

  return (
    <>
      <Centerer />
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && (
        <>
          <Flex alignItems="center" flexDirection="column">
            {launchTypes.map((launchType) => (
              <LaunchTile
                key={launchType}
                launch={launchType}
                detailsList={launches[launchType].detailsList}
                {...launches[launchType].data}
              />
            ))}
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <FacilitiesTile title="Launch facilities" data={weather} />
            <StarlinkTile title="Starlink" count={starlink.activeCount} />
          </Flex>

          {modal.isOpen && (
            <Modal
              isOpen={modal.isOpen}
              closeModal={() => dispatch(closeModal())}
              type={modal.type}
              launch={modal.launch}
              data={{ ...launches[modal.launch].data }}
              detailsList={launches[modal.launch].detailsList}
            ></Modal>
          )}
        </>
      )}
    </>
  );
};
