import { Box, HStack, Link, VStack, SimpleGrid, Text } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { MetricsApi } from "../../../services/metrics-api.service";

import CountPaper from "../../metrics/count-papers";
import Title from "../Title";

const Transactions: FC = () => {
  const [TVL, setTVL] = useState<number | undefined>(undefined);

  useEffect(() => {
    MetricsApi.fetchTVL().then(setTVL);
  });

  return (
    <VStack w="full" align="flex-start">
      {/* Title */}
      <Box mb={"4"}>
        <Title highlighted="Transactions Stats"></Title>
      </Box>
      {/* Stats */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={400} mb={8}>
        <CountPaper count={TVL} label={`Total Transactions`} />
        <CountPaper count={2} label={`Change`} />
      </SimpleGrid>
      {/* Chart */}
    </VStack>
  );
};

export default Transactions;
