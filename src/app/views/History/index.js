import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryData } from "app/redux/actions/history";
import { selectHistory } from "app/redux/selectors";
import { Error } from "app/components/common/Error";
import { Loading } from "app/components/common/Loading";
import { useEffect } from "react";

export const History = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector(selectHistory);

  useEffect(() => {
    if (status !== "success") {
      dispatch(fetchHistoryData());
    }
  }, [dispatch, status, data]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && "history"}
    </>
  );
};
