import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Box,
  Button,
  TextField,
  VerticalStack
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { useState, useCallback } from 'react';
import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  const { t } = useTranslation();
  const [whatsappNo, setWhatsappNo] = useState('');
  const handlewhatsappNoChange = useCallback((value) => setWhatsappNo(value), []);
  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <VerticalStack gap="4" spacing="extraTight">
              <TextField
                value={whatsappNo}
                onChange={handlewhatsappNoChange}
                label="Whatsapp Number" />

            </VerticalStack>
          </Card>
          <Box paddingBlockStart="4">
            <Button primary>Save</Button>
          </Box>

        </Layout.Section>
      </Layout>
    </Page>
  );
}
