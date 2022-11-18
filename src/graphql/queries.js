/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMyfitrackrv2DB = /* GraphQL */ `
  query GetMyfitrackrv2DB($id: ID!) {
    getMyfitrackrv2DB(id: $id) {
      id
      count
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMyfitrackrv2DBS = /* GraphQL */ `
  query ListMyfitrackrv2DBS(
    $filter: ModelMyfitrackrv2DBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyfitrackrv2DBS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        count
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMyfitrackrv2DBS = /* GraphQL */ `
  query SyncMyfitrackrv2DBS(
    $filter: ModelMyfitrackrv2DBFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMyfitrackrv2DBS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        count
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
