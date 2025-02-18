/**
 * @generated SignedSource<<0f753d05ac06b919af8917a40bdba0bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NEwsfeedContentsRefetchQuery$variables = {
  count?: number | null;
  cursor?: string | null;
};
export type NEwsfeedContentsRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"NewsfeedContentsFragment">;
};
export type NEwsfeedContentsRefetchQuery = {
  response: NEwsfeedContentsRefetchQuery$data;
  variables: NEwsfeedContentsRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 3,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "altText",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NEwsfeedContentsRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ],
        "kind": "FragmentSpread",
        "name": "NewsfeedContentsFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NEwsfeedContentsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "StoriesConnection",
            "kind": "LinkedField",
            "name": "newsfeedStories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "StoriesConnectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Story",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "summary",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "poster",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isActor"
                          },
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "profilePicture",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": null
                              },
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "thumbnail",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "width",
                                "value": 400
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(width:400)"
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "concreteType": "CommentsConnection",
                        "kind": "LinkedField",
                        "name": "comments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "kind": "LinkedField",
                            "name": "pageInfo",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "startCursor",
                                "storageKey": null
                              },
                              (v6/*: any*/),
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommentsConnectionEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Comment",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "text",
                                    "storageKey": null
                                  },
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v8/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "comments(first:3)"
                      },
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "filters": null,
                        "handle": "connection",
                        "key": "StoryCommentsSectionFragment_comments",
                        "kind": "LinkedHandle",
                        "name": "comments"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "likeCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "doesViewerLike",
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "NewsfeedContentsFragment_newsfeedStories",
            "kind": "LinkedHandle",
            "name": "newsfeedStories"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a75da736b1722c52cfeaf60400fdd730",
    "id": null,
    "metadata": {},
    "name": "NEwsfeedContentsRefetchQuery",
    "operationKind": "query",
    "text": "query NEwsfeedContentsRefetchQuery(\n  $count: Int = 3\n  $cursor: String\n) {\n  ...NewsfeedContentsFragment_1G22uz\n}\n\nfragment CommentFragment on Comment {\n  text\n}\n\nfragment ImageFragment on Image {\n  url\n  altText\n}\n\nfragment ImageFragment_OxVt3 on Image {\n  url(width: 400)\n  altText\n}\n\nfragment NewsfeedContentsFragment_1G22uz on Query {\n  viewer {\n    newsfeedStories(after: $cursor, first: $count) {\n      edges {\n        node {\n          id\n          ...StoryFragment\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment PosterBylineFragment on Actor {\n  __isActor: __typename\n  id\n  name\n  profilePicture {\n    ...ImageFragment\n  }\n}\n\nfragment StoryCommentsComposerFragment on Story {\n  id\n}\n\nfragment StoryCommentsSectionFragment on Story {\n  comments(first: 3) {\n    pageInfo {\n      startCursor\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...CommentFragment\n        __typename\n      }\n      cursor\n    }\n  }\n  ...StoryCommentsComposerFragment\n  id\n}\n\nfragment StoryFragment on Story {\n  title\n  summary\n  createdAt\n  poster {\n    __typename\n    ...PosterBylineFragment\n    id\n  }\n  thumbnail {\n    ...ImageFragment_OxVt3\n  }\n  ...StoryCommentsSectionFragment\n  ...StoryLikeButtonFragment\n}\n\nfragment StoryLikeButtonFragment on Story {\n  id\n  likeCount\n  doesViewerLike\n}\n"
  }
};
})();

(node as any).hash = "930dfd8cfa06c56f392bfafc0ca56609";

export default node;
