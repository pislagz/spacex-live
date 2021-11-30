import "./timeline.scss";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryData } from "app/redux/actions/history";
import { selectHistory } from "app/redux/selectors";
import { Error } from "app/components/common/Error";
import { Loading } from "app/components/common/Loading";
import { useEffect } from "react";
import { Chrono } from "react-chrono";
import { DateTime } from "luxon";
import { Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { setRoute } from "app/redux/slices/routeSlice";

export const History = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector(selectHistory);

  useEffect(() => {
    dispatch(setRoute({ route: "History" }));
    if (status !== "success") {
      dispatch(fetchHistoryData());
    }
  }, [dispatch, status, data]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && (
        <>
          <Chrono
            mode="VERTICAL_ALTERNATING"
            borderLessCards
            useReadMore={false}
            hideControls
            cardWidth="220"
            cardHeight="150"
            theme={{
              primary: "white",
              secondary: "white",
              cardBgColor: "transparent",
              cardForeColor: "white",
              titleColor: "white",
            }}
          >
            {data.map((it) => (
              <Item
                key={it.title}
                href={
                  // exclude spacex links as they're not working anymore
                  it.links.article?.includes("spacex.com")
                    ? null
                    : it.links.article
                }
                target="_blank"
              >
                <Title>
                  {DateTime.fromISO(it.event_date_utc).toFormat("dd LLL yyyy")}
                </Title>
                <Desc>{it.title}</Desc>
              </Item>
            ))}
          </Chrono>
        </>
      )}
    </>
  );
};

const Item = styled(Flex).attrs({ as: "a" })`
  color: ${colors.white};
  flex-direction: column;
  cursor: ${({ href }) => (href ? "pointer" : "default")};
  text-decoration: none;

  &:hover {
    p {
      text-decoration: ${({ href }) => (href ? "underline" : "none")};
      transition: all 0.2s ease-out;
    }
  }
`;
const Title = styled(Flex).attrs({
  as: "h2",
  m: "0",
  p: "0",
  fontSize: "md",
  fontWeight: "500",
})``;
const Desc = styled(Flex).attrs({
  as: "p",
  m: "0",
  p: "0",
  fontSize: "md",
  fontWeight: "100",
})``;
