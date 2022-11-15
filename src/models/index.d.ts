import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type Myfitrackrv2DBMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMyfitrackrv2DB = {
  readonly id: string;
  readonly count: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMyfitrackrv2DB = {
  readonly id: string;
  readonly count: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Myfitrackrv2DB = LazyLoading extends LazyLoadingDisabled ? EagerMyfitrackrv2DB : LazyMyfitrackrv2DB

export declare const Myfitrackrv2DB: (new (init: ModelInit<Myfitrackrv2DB, Myfitrackrv2DBMetaData>) => Myfitrackrv2DB) & {
  copyOf(source: Myfitrackrv2DB, mutator: (draft: MutableModel<Myfitrackrv2DB, Myfitrackrv2DBMetaData>) => MutableModel<Myfitrackrv2DB, Myfitrackrv2DBMetaData> | void): Myfitrackrv2DB;
}