import { Flex } from "app/components/common/ui";
import { Tile } from "app/components/common/Tile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyData } from "app/redux/actions/company";
import { selectCompany } from "app/redux/selectors";
import { Error } from "app/components/common/Error";
import { Loading } from "app/components/common/Loading";
import { TopPadder } from "app/components/common/TopPadder";
import { animationProps } from "app/styles/animations";
import { InfoItem } from "app/components/common/InfoItem";
import { formatBigNumber } from "app/utils/textFormatting";
import * as S from "./styled";
import shotwell from "../../../assets/pictures/shotwell.jpg";
import mueller from "../../../assets/pictures/mueller.jpg";
import { setRoute } from "app/redux/slices/routeSlice";

export const About = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector(selectCompany);

  useEffect(() => {
    dispatch(setRoute({ route: "About" }));

    if (status !== "success") {
      dispatch(fetchCompanyData());
    }
  }, [dispatch, status]);

  const {
    name,
    founded,
    employees,
    vehicles,
    launch_sites: launchSites,
    test_sites: testSites,
    valuation: value,
    summary,
    headquarters,
    ceo,
    coo,
    cto_propulsion: ctoPropulsion,
    links,
  } = data || {};

  const companyDetails = [
    { label: "name", info: name },
    { label: "founded", info: founded },
    { label: "employees", info: employees },
    { label: "vehicles", info: vehicles },
    { label: "launch sites", info: launchSites },
    { label: "test sites", info: testSites },
    { label: "value", info: value ? `$ ${formatBigNumber(value, 2)}` : "" },
    {
      label: "links",
      links: {
        spacex: links?.website,
        flickr: links?.flickr,
        twitter: links?.twitter,
      },
      areAboutLinks: true,
    },
  ];

  const hqDetails = [
    { label: "address", info: headquarters?.address },
    { label: "state", info: headquarters?.state },
    { label: "city", info: headquarters?.city },
  ];

  // {label:"",info:""}

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && (
        <>
          <TopPadder intensity="8" />
          <Flex alignItems="center" flexDirection="column" {...animationProps}>
            {/* left-side-tiles */}
            <Tile title="Company" minHeight="unset">
              <Flex flexWrap="wrap">
                {companyDetails.map((data, i) => (
                  <Flex key={i} px="xxs" minWidth="95px">
                    <InfoItem {...data} />
                  </Flex>
                ))}
              </Flex>
              <InfoItem
                label="description"
                details={summary}
                detailsLineHeight="1.8"
              />
            </Tile>
            <Tile title="Headquarters" minHeight="unset">
              <Flex flexWrap="wrap">
                {hqDetails.map(({ label, info }, i) => (
                  <Flex key={i} flex="auto" pr="xs">
                    <InfoItem label={label} info={info} />
                  </Flex>
                ))}
              </Flex>
            </Tile>
            <Tile title="Disclaimer" minHeight="unset">
              <InfoItem
                details="This website is not an official SpaceX website."
                detailsLineHeight="1.8"
              />
            </Tile>
          </Flex>
          <Flex alignItems="center" flexDirection="column" {...animationProps}>
            {/* right-side-tiles */}
            <Tile title="Board" minHeight="unset">
              <S.Card
                isWide
                src="https://media.vanityfair.com/photos/5a7b1800a7cf14041ee0af07/16:9/w_1280,c_limit/t-elon-musk-showman-rocket.jpg"
              >
                <Flex flexDirection="column">
                  <InfoItem
                    label="role"
                    info={ceo === "Elon Musk" ? "CEO, CTO & Founder" : "CEO"}
                  />
                  <InfoItem label="name" info={ceo} />
                </Flex>
              </S.Card>
              <Flex marginTop="sm">
                <S.Card
                  src={
                    coo === "Gwynne Shotwell"
                      ? shotwell
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/962px-Person_icon_BLACK-01.svg.png"
                  }
                >
                  <Flex flexDirection="column">
                    <InfoItem label="role" info={"COO"} />
                    <InfoItem label="name" info={coo} />
                  </Flex>
                </S.Card>
                <S.Card
                  src={
                    ctoPropulsion === "Tom Mueller"
                      ? mueller
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/962px-Person_icon_BLACK-01.svg.png"
                  }
                >
                  <Flex flexDirection="column">
                    <InfoItem label="role" info={"Propulsion CTO"} />
                    <InfoItem label="name" info={ctoPropulsion} />
                  </Flex>
                </S.Card>
              </Flex>
            </Tile>
          </Flex>
        </>
      )}
    </>
  );
};
