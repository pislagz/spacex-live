import { Flex } from "app/components/common/ui";

export const Satellite = ({ label, version, height, velocity }) => {
  return (
    <div>
      <h2>STARLINK</h2>
      <Flex>
        <Flex flexDirection="column" style={{ marginRight: "0.4rem" }}>
          <h4>{"name"}</h4>
          <h4>{"version"}</h4>
          <h4>{"height"}</h4>
          <h4>{"velocity"}</h4>
        </Flex>
        <Flex flexDirection="column">
          <h4>{label}</h4>
          <h4>{version}</h4>
          <h4>{height.toFixed(2)} km</h4>
          <h4>{velocity.toFixed(2)} kms</h4>
        </Flex>
      </Flex>
    </div>
  );
};
