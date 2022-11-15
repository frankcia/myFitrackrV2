/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Myfitrackrv2DB } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import UserProfile from "./UserProfile";
import { Collection } from "@aws-amplify/ui-react";
export default function UserCollin(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Myfitrackrv2DB,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="center"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "UserCollin")}
    >
      {(item, index) => (
        <UserProfile
          myfitrackrv2DB={item}
          height="auto"
          width="auto"
          margin="0rem 2rem 2rem 2rem"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></UserProfile>
      )}
    </Collection>
  );
}
