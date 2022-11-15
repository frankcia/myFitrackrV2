/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function UserProfile(props) {
  const { myfitrackrv2DB, overrides, ...rest } = props;
  const refreshButtonOnClick = useNavigateAction({ type: "reload" });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="320px"
      height="536px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "UserProfile")}
    >
      <View
        width="252px"
        height="27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <View
          width="59px"
          height="18px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="4px"
          left="calc(50% - 29.5px - 0.5px)"
          borderRadius="7px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(26,30,37,1)"
          {...getOverrideProps(overrides, "Rectangle 1164")}
        ></View>
      </View>
      <Image
        width="170px"
        height="170px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="5px SOLID rgba(255,153,0,1)"
        borderRadius="165px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://media-exp1.licdn.com/dms/image/C5603AQHok7i_GJfMfA/profile-displayphoto-shrink_400_400/0/1637507803194?e=1674086400&v=beta&t=GPKYUgOHNnnohVwPu_RD2ZRs7Mjbh55tRxkZ2j232hY"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,153,0,1)"
          lineHeight="25px"
          textAlign="center"
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
          children="@cvandersx"
          {...getOverrideProps(overrides, "@cvandersx")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Collin Vadersommen"
          {...getOverrideProps(overrides, "Collin Vadersommen")}
        ></Text>
      </Flex>
      <Flex
        gap="6px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Followers")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="LIVE "
          {...getOverrideProps(overrides, "LIVE")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Push-ups:"
          {...getOverrideProps(overrides, "Push-ups:")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.09px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={myfitrackrv2DB?.count}
          {...getOverrideProps(overrides, "10")}
        ></Text>
      </Flex>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        backgroundColor="rgba(255,153,0,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Update"
        {...getOverrideProps(overrides, "updateButton")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        backgroundColor="rgba(255,153,0,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Refresh"
        onClick={() => {
          refreshButtonOnClick();
        }}
        {...getOverrideProps(overrides, "refreshButton")}
      ></Button>
    </Flex>
  );
}
