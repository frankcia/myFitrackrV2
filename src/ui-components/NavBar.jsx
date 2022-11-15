/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 25px 24px 32px"
      backgroundColor="rgba(255,153,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="myFitrackr"
          {...getOverrideProps(overrides, "myFitrackr")}
        ></Text>
      </Flex>
      <Flex
        gap="25px"
        direction="row"
        width="837px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 30px 0px 1024px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="361px"
          height="33px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="#ProjectEast - Capstone 2022"
          {...getOverrideProps(overrides, "#ProjectEast - Capstone 2022")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="3px SOLID rgba(255,255,255,1)"
          borderRadius="20px"
          padding="3px 9px 3px 9px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Sign Out"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="0"
          direction="column"
          width="113px"
          height="38px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 27px 10px 24px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 421")}
          >
            <Image
              width="49px"
              height="49px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              border="2px SOLID rgba(0,0,0,1)"
              borderRadius="162px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src="https://www.jdrf.org/wp-content/uploads/2020/12/AWS-logo-2.jpg"
              {...getOverrideProps(overrides, "image")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="170px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={authAttributes["name"]}
              {...getOverrideProps(overrides, "First Last")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
