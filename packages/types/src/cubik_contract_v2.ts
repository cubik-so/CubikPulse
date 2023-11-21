export type CubikContractV2 = {
  "version": "0.1.0",
  "name": "cubik_contract_v2",
  "instructions": [
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "avatar",
          "type": "string"
        },
        {
          "name": "nftToken",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createProject",
      "accounts": [
        {
          "name": "owners",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "projectAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "counter",
          "type": "string"
        },
        {
          "name": "multiSig",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createRound",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "roundAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "counter",
          "type": "string"
        },
        {
          "name": "matchingPool",
          "type": "u64"
        },
        {
          "name": "projectSize",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createAdmin",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateProjectStatusVerified",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "projectAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "counter",
          "type": "string"
        },
        {
          "name": "owner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateProjectStatusFailed",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "projectAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "counter",
          "type": "string"
        },
        {
          "name": "owner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createEvent",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "eventKey",
          "type": "publicKey"
        },
        {
          "name": "matchingPool",
          "type": "u64"
        },
        {
          "name": "eventId",
          "type": "string"
        }
      ]
    },
    {
      "name": "createContributionV2",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaSender",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaAdmin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "projectAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contributionAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "split",
          "type": "u64"
        },
        {
          "name": "createKey",
          "type": "publicKey"
        },
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "roundId",
          "type": "string"
        },
        {
          "name": "counter",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "admin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "contribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "usd",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "contributionV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "eventKey",
            "type": "publicKey"
          },
          {
            "name": "matchingPool",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "status",
            "type": {
              "defined": "ProjectVerification"
            }
          },
          {
            "name": "multiSig",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "round",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "roundId",
            "type": "string"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "matchingPoolSize",
            "type": "u64"
          },
          {
            "name": "limit",
            "type": "u64"
          },
          {
            "name": "projectSize",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "eventJoin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "status",
            "type": {
              "defined": "RoundProjectStatus"
            }
          },
          {
            "name": "donation",
            "type": "u128"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "joinHackathon",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "project",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ProjectVerification",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "REVIEW"
          },
          {
            "name": "VERIFIED"
          },
          {
            "name": "FAILED"
          }
        ]
      }
    },
    {
      "name": "RoundProjectStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "PENDING"
          },
          {
            "name": "APPROVED"
          },
          {
            "name": "REJECTED"
          }
        ]
      }
    },
    {
      "name": "PROOF",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "LAMPORT"
          },
          {
            "name": "SUPERTEAM"
          },
          {
            "name": "MONKEYDAO"
          },
          {
            "name": "CIVIC"
          },
          {
            "name": "SOCIAL"
          },
          {
            "name": "DROPS01"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "NewContribution",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "usdAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "total",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalContribution",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalUsdAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "split",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "NewContributionV2",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "createKey",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "split",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "NewUser",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "username",
          "type": "string",
          "index": false
        },
        {
          "name": "avatar",
          "type": "string",
          "index": false
        },
        {
          "name": "nftToken",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "NewHackathonJoin",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "hackathonAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "projectAccount",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "NewEvent",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eventId",
          "type": "string",
          "index": false
        },
        {
          "name": "eventKey",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MaxLengthExceeded",
      "msg": "max length is 32"
    },
    {
      "code": 6001,
      "name": "InvalidStatus",
      "msg": "invalid status"
    },
    {
      "code": 6002,
      "name": "InvalidRoundAccount",
      "msg": "invalid round account"
    },
    {
      "code": 6003,
      "name": "InvalidProjectVerification",
      "msg": "project not verified"
    },
    {
      "code": 6004,
      "name": "ContributionSizeExceded",
      "msg": "contribution size exceded"
    },
    {
      "code": 6005,
      "name": "ProofAlreadyExists",
      "msg": "Proof Already Exists"
    },
    {
      "code": 6006,
      "name": "ProofDoesNotExists",
      "msg": "Proof Does Not Exists"
    },
    {
      "code": 6007,
      "name": "InvalidProofType",
      "msg": "Invalid Proof type"
    },
    {
      "code": 6008,
      "name": "InvalidSigner",
      "msg": "Signer Mismatch"
    }
  ]
};

export const IDL: CubikContractV2 = {
  "version": "0.1.0",
  "name": "cubik_contract_v2",
  "instructions": [
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "avatar",
          "type": "string"
        },
        {
          "name": "nftToken",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createProject",
      "accounts": [
        {
          "name": "owners",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "projectAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "counter",
          "type": "string"
        },
        {
          "name": "multiSig",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createRound",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "roundAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "counter",
          "type": "string"
        },
        {
          "name": "matchingPool",
          "type": "u64"
        },
        {
          "name": "projectSize",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createAdmin",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateProjectStatusVerified",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "projectAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "counter",
          "type": "string"
        },
        {
          "name": "owner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateProjectStatusFailed",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "projectAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "counter",
          "type": "string"
        },
        {
          "name": "owner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createEvent",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "eventKey",
          "type": "publicKey"
        },
        {
          "name": "matchingPool",
          "type": "u64"
        },
        {
          "name": "eventId",
          "type": "string"
        }
      ]
    },
    {
      "name": "createContributionV2",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaSender",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaAdmin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "adminAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "projectAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contributionAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "split",
          "type": "u64"
        },
        {
          "name": "createKey",
          "type": "publicKey"
        },
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "roundId",
          "type": "string"
        },
        {
          "name": "counter",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "admin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "contribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "usd",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "contributionV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "eventKey",
            "type": "publicKey"
          },
          {
            "name": "matchingPool",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "status",
            "type": {
              "defined": "ProjectVerification"
            }
          },
          {
            "name": "multiSig",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "round",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "roundId",
            "type": "string"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "matchingPoolSize",
            "type": "u64"
          },
          {
            "name": "limit",
            "type": "u64"
          },
          {
            "name": "projectSize",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "eventJoin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "status",
            "type": {
              "defined": "RoundProjectStatus"
            }
          },
          {
            "name": "donation",
            "type": "u128"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "joinHackathon",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "project",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ProjectVerification",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "REVIEW"
          },
          {
            "name": "VERIFIED"
          },
          {
            "name": "FAILED"
          }
        ]
      }
    },
    {
      "name": "RoundProjectStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "PENDING"
          },
          {
            "name": "APPROVED"
          },
          {
            "name": "REJECTED"
          }
        ]
      }
    },
    {
      "name": "PROOF",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "LAMPORT"
          },
          {
            "name": "SUPERTEAM"
          },
          {
            "name": "MONKEYDAO"
          },
          {
            "name": "CIVIC"
          },
          {
            "name": "SOCIAL"
          },
          {
            "name": "DROPS01"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "NewContribution",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "usdAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "total",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalContribution",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalUsdAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "split",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "NewContributionV2",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "createKey",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "split",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "NewUser",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "username",
          "type": "string",
          "index": false
        },
        {
          "name": "avatar",
          "type": "string",
          "index": false
        },
        {
          "name": "nftToken",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "NewHackathonJoin",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "hackathonAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "projectAccount",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "NewEvent",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eventId",
          "type": "string",
          "index": false
        },
        {
          "name": "eventKey",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MaxLengthExceeded",
      "msg": "max length is 32"
    },
    {
      "code": 6001,
      "name": "InvalidStatus",
      "msg": "invalid status"
    },
    {
      "code": 6002,
      "name": "InvalidRoundAccount",
      "msg": "invalid round account"
    },
    {
      "code": 6003,
      "name": "InvalidProjectVerification",
      "msg": "project not verified"
    },
    {
      "code": 6004,
      "name": "ContributionSizeExceded",
      "msg": "contribution size exceded"
    },
    {
      "code": 6005,
      "name": "ProofAlreadyExists",
      "msg": "Proof Already Exists"
    },
    {
      "code": 6006,
      "name": "ProofDoesNotExists",
      "msg": "Proof Does Not Exists"
    },
    {
      "code": 6007,
      "name": "InvalidProofType",
      "msg": "Invalid Proof type"
    },
    {
      "code": 6008,
      "name": "InvalidSigner",
      "msg": "Signer Mismatch"
    }
  ]
};
