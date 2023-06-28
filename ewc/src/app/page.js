"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Card, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <Card>
        <Card.Body>
          <Text>Let's setup Whatsapp Chat </Text>
          <Text>1. Open theme customizer </Text>
          <Text>2. Activate "Whatsapp Widget" block </Text>
          <Text>3. Change the phone number from block settings </Text>
          <Text>... and it is done. Easy and Simple. </Text>
        </Card.Body>
      </Card>
    </main>
  );
}
