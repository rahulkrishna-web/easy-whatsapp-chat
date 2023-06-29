"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";
import { Page, Layout, LegacyCard } from "@shopify/polaris";

export default function Home() {
  return (
    <main>
      <AppProvider>
        <Page fullWidth>
          <Layout>
            <Layout.Section>
              <LegacyCard title="Easy Whatsapp Chat" sectioned>
                <p>
                  Easy Whatsapp Chat simplifies customer interaction on your
                  website. By adding an app block to your theme, you can
                  effortlessly embed a Whatsapp chat feature, enabling visitors
                  to reach out to you directly on Whatsapp.
                </p>
              </LegacyCard>
              <LegacyCard title="Key Features:" sectioned>
                <ul>
                  <li>
                    <b>Effortless Integration:</b> Seamlessly add the "Easy
                    Whatsapp Chat" app block to your Shopify theme.
                  </li>
                  <li>
                    <b>Customizable Placement:</b> Choose between bottom right
                    or bottom left positioning for the Whatsapp chat icon.
                  </li>
                  <li>
                    <b>Phone Number Configuration:</b> Easily set your preferred
                    phone number for Whatsapp communication.
                  </li>
                  <li>
                    <b>Improved Customer Communication:</b> Enable direct
                    interaction with visitors, fostering engagement and building
                    stronger relationships.
                  </li>
                  <li>
                    <b>Streamlined Support:</b> Provide real-time support to
                    address customer inquiries and offer assistance promptly.
                  </li>
                  <li>
                    <b>Enhanced Conversions:</b> Convenient access to Whatsapp
                    communication can instill confidence and encourage users to
                    make purchases.
                  </li>
                </ul>
              </LegacyCard>
              <LegacyCard title="How to Use:" sectioned>
                <ul>
                  <li>
                    Install the "Easy Whatsapp Chat" app from the Shopify App
                    Store.
                  </li>
                  <li>Access your Shopify theme customization settings.</li>
                  <li>
                    Locate the desired section of your website where you want
                    the Whatsapp chat functionality to appear.
                  </li>
                  <li>
                    Add the "Easy Whatsapp Chat" app block to the selected
                    section.
                  </li>
                  <li>
                    Configure the app block settings, including the phone number
                    and placement options (bottom right or bottom left).
                  </li>
                  <li>
                    Save the changes and preview your website to see the
                    Whatsapp chat icon displayed in the designated area.
                  </li>
                  <li>
                    Visitors can now click on the Whatsapp icon to initiate a
                    chat conversation with you on Whatsapp.
                  </li>
                </ul>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </Page>
      </AppProvider>
    </main>
  );
}
