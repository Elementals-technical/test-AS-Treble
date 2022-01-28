export default {
  credentials: {
    preview: {
      orgId: process.env.THREEKIT_PREVIEW_ORG_ID,
      publicToken: process.env.THREEKIT_PREVIEW_PUBLIC_TOKEN,
    },
    'admin-fts': {
      orgId: process.env.THREEKIT_ADMIN_FTS_ORG_ID,
      publicToken: process.env.THREEKIT_ADMIN_FTS_PUBLIC_TOKEN,
    },
  },
  products: {
    preview: {
      assetId: 'd0088bc7-4ef9-4382-84d7-03cbfd7b9e4c',
      configurationId: undefined,
      stageId: undefined,
    },
  },
};
