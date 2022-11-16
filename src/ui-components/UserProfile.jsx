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
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function UserProfile(props) {
  const { myfitrackrv2DB, overrides, ...rest } = props;
  const refreshButtonOnClick = useNavigateAction({ type: "reload" });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1105px"
      height="unset"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="21px 17px 21px 59px"
      {...rest}
      {...getOverrideProps(overrides, "UserProfile")}
    >
      <View
        width="285px"
        height="498px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <View
          width="285px"
          height="498px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="25px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 1165")}
        ></View>
        <Image
          width="170px"
          height="170px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="48px"
          left="58px"
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
          position="absolute"
          top="237px"
          left="44px"
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
          position="absolute"
          top="318px"
          left="51px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Stats")}
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
          width="250px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="366px"
          left="18px"
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
          width="250px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="436px"
          left="18px"
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
        <View
          width="252px"
          height="27px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="4px"
          left="18px"
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
      </View>
      <View
        width="717px"
        height="498px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="25px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 424")}
      >
        <View
          width="717px"
          height="498px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="25px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 1166")}
        ></View>
        <View
          width="642px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="163px"
          left="46px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 422")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12px"
            left="26px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Steps"
            {...getOverrideProps(overrides, "Steps")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12px"
            left="170px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Miles"
            {...getOverrideProps(overrides, "Miles")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12px"
            left="274px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Calories Burned"
            {...getOverrideProps(overrides, "Calories Burned")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12px"
            left="525px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Total Time"
            {...getOverrideProps(overrides, "Total Time")}
          ></Text>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          bottom="16px"
          right="29px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Last activity - Yesterday 10:35 AM"
          {...getOverrideProps(overrides, "Last activity - Yesterday 10:35 AM")}
        ></Text>
        <Icon
          width="120px"
          height="120px"
          viewBox={{ minX: 0, minY: 0, width: 120, height: 120 }}
          paths={[
            {
              d: "M110 60C110 87.6142 87.6142 110 60 110L60 130C98.6599 130 130 98.6599 130 60L110 60ZM60 110C32.3858 110 10 87.6142 10 60L-10 60C-10 98.6599 21.3401 130 60 130L60 110ZM10 60C10 32.3858 32.3858 10 60 10L60 -10C21.3401 -10 -10 21.3401 -10 60L10 60ZM60 10C87.6142 10 110 32.3858 110 60L130 60C130 21.3401 98.6599 -10 60 -10L60 10Z",
              stroke: "rgba(255,153,0,1)",
              fillRule: "nonzero",
              strokeWidth: 10,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="43px"
          left="552px"
          {...getOverrideProps(overrides, "Ellipse 4")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="91px"
          left="567px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="7:54"
          {...getOverrideProps(overrides, "7:54")}
        ></Text>
        <Icon
          width="120px"
          height="120px"
          viewBox={{ minX: 0, minY: 0, width: 120, height: 120 }}
          paths={[
            {
              d: "M110 60C110 87.6142 87.6142 110 60 110L60 130C98.6599 130 130 98.6599 130 60L110 60ZM60 110C32.3858 110 10 87.6142 10 60L-10 60C-10 98.6599 21.3401 130 60 130L60 110ZM10 60C10 32.3858 32.3858 10 60 10L60 -10C21.3401 -10 -10 21.3401 -10 60L10 60ZM60 10C87.6142 10 110 32.3858 110 60L130 60C130 21.3401 98.6599 -10 60 -10L60 10Z",
              stroke: "rgba(255,153,0,1)",
              fillRule: "nonzero",
              strokeWidth: 10,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="43px"
          left="322px"
          {...getOverrideProps(overrides, "Ellipse 3")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="91px"
          left="342px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="623"
          {...getOverrideProps(overrides, "623")}
        ></Text>
        <Icon
          width="120px"
          height="120px"
          viewBox={{ minX: 0, minY: 0, width: 120, height: 120 }}
          paths={[
            {
              d: "M110 60C110 87.6142 87.6142 110 60 110L60 130C98.6599 130 130 98.6599 130 60L110 60ZM60 110C32.3858 110 10 87.6142 10 60L-10 60C-10 98.6599 21.3401 130 60 130L60 110ZM10 60C10 32.3858 32.3858 10 60 10L60 -10C21.3401 -10 -10 21.3401 -10 60L10 60ZM60 10C87.6142 10 110 32.3858 110 60L130 60C130 21.3401 98.6599 -10 60 -10L60 10Z",
              stroke: "rgba(255,153,0,1)",
              fillRule: "nonzero",
              strokeWidth: 10,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="43px"
          left="177px"
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="91px"
          left="215px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="21"
          {...getOverrideProps(overrides, "21")}
        ></Text>
        <Icon
          width="120px"
          height="120px"
          viewBox={{ minX: 0, minY: 0, width: 120, height: 120 }}
          paths={[
            {
              d: "M110 60C110 87.6142 87.6142 110 60 110L60 130C98.6599 130 130 98.6599 130 60L110 60ZM60 110C32.3858 110 10 87.6142 10 60L-10 60C-10 98.6599 21.3401 130 60 130L60 110ZM10 60C10 32.3858 32.3858 10 60 10L60 -10C21.3401 -10 -10 21.3401 -10 60L10 60ZM60 10C87.6142 10 110 32.3858 110 60L130 60C130 21.3401 98.6599 -10 60 -10L60 10Z",
              stroke: "rgba(255,153,0,1)",
              fillRule: "nonzero",
              strokeWidth: 10,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="43px"
          left="34px"
          {...getOverrideProps(overrides, "Ellipse 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="53px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="91px"
          left="67px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="37"
          {...getOverrideProps(overrides, "37")}
        ></Text>
      </View>
    </Flex>
  );
}
