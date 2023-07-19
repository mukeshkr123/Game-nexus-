import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height={200} width="100%" />
        <CardBody>
          <Skeleton height="20px" width="80%" mb="4" />
        </CardBody>
      </Card>
    </>
  );
};

export default GameSkeleton;
