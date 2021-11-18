window.BENCHMARK_DATA = {
  "lastUpdate": 1637227475466,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "986eb64dde1fa3761b19749d3d6aab8b06b6cbc7",
          "message": "block: small README update",
          "timestamp": "2021-10-11T11:23:20+02:00",
          "tree_id": "3c958e91d5d1204705fedfac812e9ff841981774",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/986eb64dde1fa3761b19749d3d6aab8b06b6cbc7"
        },
        "date": 1633944797439,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 22685,
            "range": "±5.73%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25341,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20377,
            "range": "±13.05%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20269,
            "range": "±11.15%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24161,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23057,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10380,
            "range": "±13.49%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Block 9422912",
            "value": 19673,
            "range": "±13.51%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17430,
            "range": "±12.59%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 9206,
            "range": "±17.54%",
            "unit": "ops/sec",
            "extra": "41 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vasiliy.serpokryl@mail.ru",
            "name": "Vasiliy Serpokryl",
            "username": "vserpokryl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5254d2c62115c54fc9233968c186dfae480f026b",
          "message": "Util: fix toUtf8() when there is a zero at the end of a line (#1522)",
          "timestamp": "2021-10-12T17:54:26+02:00",
          "tree_id": "72e8c7723de8db0a2994c2800a82824b3fa0348f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5254d2c62115c54fc9233968c186dfae480f026b"
        },
        "date": 1634054378374,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23902,
            "range": "±6.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25492,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19594,
            "range": "±10.78%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23085,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23732,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22548,
            "range": "±4.30%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10791,
            "range": "±15.27%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Block 9422912",
            "value": 20378,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17046,
            "range": "±12.92%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11365,
            "range": "±26.42%",
            "unit": "ops/sec",
            "extra": "48 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5de1a012ef5870574d419003ad7fd5effe80e70",
          "message": "VM: Fix accountExists inconsistency in StateManager (#1524)\n\n* vm -> StateManager, Cache: added a new virtual flag to indicate an account doesn't exist in the trie\r\n\r\n* vm -> Cache: fixed small virtual account value setting inconsistency on Cache delete update, added virtual param code docs\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-10-13T14:16:17+02:00",
          "tree_id": "edf876a6f049e25c19e48ea08eaa141eafb4bdfa",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a5de1a012ef5870574d419003ad7fd5effe80e70"
        },
        "date": 1634127735252,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20595,
            "range": "±6.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21198,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20718,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15072,
            "range": "±13.71%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19352,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19575,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18957,
            "range": "±5.41%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422912",
            "value": 10839,
            "range": "±16.85%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14906,
            "range": "±14.04%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17645,
            "range": "±5.03%",
            "unit": "ops/sec",
            "extra": "63 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58e5e0d059d55965b349c922af0ca6177bcb7f26",
          "message": "Util: New Release v7.1.3 (#1525), rewrite of ethjs-util toUtf8 method, additional tests\n\n* util: rewrote toUtf8 method and removed from ethjs-util internal.ts import, added code docs, expanded tests\r\n\r\n* util: throw in toUtf8() method on uneven hex string input\r\n\r\n* util -> release: bumped version to v7.1.3, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* Updated package-lock.json\r\n\r\n* Apply suggestions from code review\r\n\r\nchangelog grammar improvements\r\n\r\n* util -> release: added README note on ethjs-util internalization, temporary module doc links fix\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-10-14T13:04:35+02:00",
          "tree_id": "713e316ce01252008d2e291b4d79e02ce18ff907",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/58e5e0d059d55965b349c922af0ca6177bcb7f26"
        },
        "date": 1634209867344,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17549,
            "range": "±7.77%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18630,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18387,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14098,
            "range": "±14.48%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422909",
            "value": 17848,
            "range": "±4.50%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17950,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 17433,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422912",
            "value": 16840,
            "range": "±6.86%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422913",
            "value": 7009,
            "range": "±14.18%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16669,
            "range": "±5.30%",
            "unit": "ops/sec",
            "extra": "65 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4fd401cc2ec1ab6cd78211851a7c9c8fe63f32e1",
          "message": "client, blockchain, block, common: merge work continued (part 2) (#1512) (continued engine work, eth_getLogs stub, small additions, other)\n\n* tidy up, use Hardfork enum in common usage, re-add resolve comments to webpack config\r\n\r\n* add object, array, value validators\r\n\r\n* continue implementing engine endpoints\r\n\r\n* wip work\r\n\r\n* rpc:\r\n  align rpc block response with standard fields\r\n  ensure errors are thrown not returned for jayson to return error object in response\r\n\r\n* search for parents in forkchoiceUpdated\r\nadd variable for last finalized block\r\npass common from header.validate to blockchain.cliqueActiveSigners so it can respect the set consensus type from the block\r\n\r\n* fixes\r\n\r\n* miner: store bound event handlers so they can be properly removed\r\n\r\n* fixes\r\n\r\n* client: temporary eth_getLogs RPC mockup method for Merge interoperability with Lodestar\r\n\r\n* client: adopt merge with-signer genesis with generated test account address\r\n\r\n* fixes\r\n\r\n* update readme example with standardized fields\r\n\r\n* client: merge fixes\r\n\r\n* client: fixed getLogs RPC method validation triggering error messages on Lodestar M3 sync\r\n\r\n* tidy up\r\n\r\n* updates\r\n\r\n* client: switched to a more robust consensus type selection when reading geth genesis configuration files\r\n\r\n* block, common: allow baseFeePerGas as an optional field for a genesis header, fix bug in Block not considering baseFeePerGas for genesis header instantiation when HF is london or higher\r\n\r\n* client: fixed a bug not setting TD correctly on ETH STATUS msg exchange for TD being 0\r\n\r\n* client: made consensus type choice in Geth parameter parsing more robust, merge interop hotfixes\r\n\r\n* updates\r\n\r\n* client: fixed baseFeePerGas parsing, some clean-up\r\n\r\n* client: added logger output on fetcher result storing error\r\n\r\n* client: more granular chain updates to update along with TD for precise Merge detection, option to only add non-Merge headers/blocks to chain\r\n\r\n* changes\r\n\r\n* client: extracted extensive RPC logging to dedicated rpcDebug option, added compact RPC logging to regular debug logger\r\n\r\n* updates\r\n\r\n* add object, array, value validators\r\n\r\n* non merge-related client changes\r\n\r\n* client: clear fetcher task queue on Merge to ensure fetcher stops fetching blocks, Merge log msg improvements\r\n\r\n* client: rework double calling of Chain update() within putBlocks() (prevents miner continuation on Merge)\r\n\r\n* blockchain: fixed a bug in copy() not properly copying the Common instance (leading to unintentionally modifying client execution Common)\r\n\r\n* client: fixed setting HF in engine getPayload RPC method\r\n\r\n* Minor\r\n\r\n* lint fixes\r\n\r\n* common: fixed common forkHash parameter name for shanghai and merge HF sections in chain files, fixed fork hash calculation for TD forks\r\n\r\n* client: fixed RPC debug output for batch requests\r\n\r\n* small updates\r\n\r\n* remove interop hack of passing common to cliqueActiveSigners\r\n\r\n* assume sync'd in rpc test setup\r\n\r\n* add block header test for genesis with baseFeePerGas defined\r\n\r\n* add cli option `--rpcStubGetLogs` until implemented\r\n\r\n* add test for clearing fetcher queue\r\n\r\n* add merge integration tests\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-10-16T10:10:32+02:00",
          "tree_id": "1d70dbf816da1b4bb291c0ae3fff51736cbae6b5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4fd401cc2ec1ab6cd78211851a7c9c8fe63f32e1"
        },
        "date": 1634372152611,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23685,
            "range": "±5.30%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 24809,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19680,
            "range": "±11.31%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20117,
            "range": "±12.74%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24042,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21348,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10990,
            "range": "±14.76%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Block 9422912",
            "value": 17966,
            "range": "±9.76%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422913",
            "value": 19543,
            "range": "±7.15%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422914",
            "value": 7725,
            "range": "±27.41%",
            "unit": "ops/sec",
            "extra": "35 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e001ba033b751e47d2691355e51abd9eda2b9b00",
          "message": "client: fix hanging integration test (#1531)\n\n(reverts sync event handler changes)",
          "timestamp": "2021-10-16T17:34:35-07:00",
          "tree_id": "05296ecf0d9212272e04daa9833dc950ed5336ef",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e001ba033b751e47d2691355e51abd9eda2b9b00"
        },
        "date": 1634431611120,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20600,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21238,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21007,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15572,
            "range": "±15.17%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19650,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20314,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18840,
            "range": "±5.35%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422912",
            "value": 8980,
            "range": "±18.05%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13458,
            "range": "±33.99%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16993,
            "range": "±4.54%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ce67138360db3a0bc9344377aa14038d1d98571",
          "message": "client: Pithos, Docker, Common/VM Genesis-With-Contracts Extension, Client Log Files, JSON RPC Server Separation, client node-gyp removal, Code Cleanup (#1530)\n\n* add genesis code and storage to cli parsing/common/stateManager for pithos genesis support for deposit contract at 0x0000...0000\r\n\r\n* small fixes\r\n\r\n* engine code tidying\r\n\r\n* split Engine API onto own port (default: 8550)\r\n\r\n* add cli --extIP\r\n\r\n* quicken eth_blockNumber\r\n\r\n* improve speed and resilience\r\n\r\n* add pithos folder with readme, config and docker\r\n\r\n* add blockBuilder option to not insert block into blockchain (improves engine api speed/efficiency)\r\n\r\n* consensusValidated: check if block exists in the canonical chain before throwing unknown header\r\n\r\n* add lighthouse to pithos readme\r\n\r\n* tidy / fixes / updates\r\n\r\n* don't respond to eth protocol reqs for block ranges greater than current height (fixes geth disconnect on pithos)\r\ni first modified the query to contain the max query size but geth didn't like the results, while valid, disconnected with subprotocol_error\r\n\r\n* merge codeAndStorage into GenesisState\r\n\r\n* extend builder opts from block opts, more informative rpc endpoint opened message\r\n\r\n* update yargs to latest\r\nclean up unneeded rpc options from config\r\nadd log file saving and rotate functionality\r\noutput client version in logger and json rpc namespaces\r\nadd basic Dockerfile and docker-compose\r\nupdate libp2p-noise to new chainsafe maintained version to drop bcrypto dep which used node-gyp rebuild\r\n\r\n* set config init with no loggers to default to level error, simplifies use (sorry about this one! getting a little carried away ^_^)",
          "timestamp": "2021-10-21T10:34:44+02:00",
          "tree_id": "0584037704d058db946a525b2f8d223495d6faa0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1ce67138360db3a0bc9344377aa14038d1d98571"
        },
        "date": 1634805637559,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21293,
            "range": "±7.04%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22459,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 22304,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15577,
            "range": "±13.82%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 20222,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22871,
            "range": "±3.17%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422911",
            "value": 16528,
            "range": "±14.00%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11346,
            "range": "±18.17%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Block 9422913",
            "value": 19286,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422914",
            "value": 12481,
            "range": "±19.34%",
            "unit": "ops/sec",
            "extra": "40 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2dfa7ee48ace1366f06f111797aae6b69b0d7b41",
          "message": "Client: Add executeBlocks debug option (#1538)\n\n* client: added start/stop logic to PeerPool for a cleaner separation of initialization and execution logic\r\n\r\n* client: added --executeBlocks debug option",
          "timestamp": "2021-10-21T22:21:21+02:00",
          "tree_id": "501b194c4b9f52b6a8ed2a61a418887bfcb3f7d4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2dfa7ee48ace1366f06f111797aae6b69b0d7b41"
        },
        "date": 1634848020810,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14973,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13990,
            "range": "±6.67%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15108,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14881,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11209,
            "range": "±13.97%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13614,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14390,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14332,
            "range": "±3.96%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14328,
            "range": "±4.33%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13689,
            "range": "±6.23%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "125e210cdcc412f901420ef038f230a6d060cb51",
          "message": "client/vm: small fixes (#1541)\n\n* fix generateGenesis setting toBalance, don't overwrite codeHash and stateRoot, tidy\r\n\r\n* fix chalk output, update chalk to latest, tidy file and add typedocs\r\n\r\n* attempt to resolve peer:error event handler memory leak by removing bound listener after disconnect, tidy\r\n\r\n* fix new webpack polyfill errors from node-fetch, which we don't use so can safely pass false\r\n\r\n* nit: more stateManager generateGenesis code tidying\r\n\r\n* update multiaddrs to latest to fix libp2p so it doesn't bring node-fetch into webpack/karma",
          "timestamp": "2021-10-22T20:37:33+02:00",
          "tree_id": "3a7ae16642c89e2738b3100bace4db724d2cd7c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/125e210cdcc412f901420ef038f230a6d060cb51"
        },
        "date": 1634928149716,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24542,
            "range": "±5.15%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25896,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19766,
            "range": "±14.44%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23363,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24466,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23048,
            "range": "±9.21%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422911",
            "value": 11834,
            "range": "±18.52%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Block 9422912",
            "value": 22437,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14914,
            "range": "±13.90%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17393,
            "range": "±15.60%",
            "unit": "ops/sec",
            "extra": "57 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85b4253208a930b5e0ca6fae1952e951e2a578a7",
          "message": "Tx, Block, VM: Consistent Error Context for Error Messages (#1540)\n\n* block: added consistent error context to error messages\r\n\r\n* blockchain: fixed test\r\n\r\n* block: internalized _errorPostfix creation to only call hash() function in error case, made _error() protected (do not call from the outside but keep extensible), more robust error case hash creation\r\n\r\n* tx: added consistent error context for error msgs to all tx types\r\n\r\n* vm -> runBlock(): added consistent error context to error messages\r\n\r\n* tx, block: separate msg creation and error object instantiation on error annotation for cleaner stack trace\r\n\r\n* tx, block, vm: added public errorStr() methods to block and tx for a compact error representation of the object, adding consistent error context to VM.runTx()\r\n\r\n* tx: hardhat E2E error msg fix",
          "timestamp": "2021-10-25T23:09:07+02:00",
          "tree_id": "a83c4f0cc35f542ce40c235f03842d74e32cc92e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/85b4253208a930b5e0ca6fae1952e951e2a578a7"
        },
        "date": 1635196445520,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23485,
            "range": "±6.56%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25081,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20309,
            "range": "±11.48%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21810,
            "range": "±4.89%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23254,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22249,
            "range": "±4.58%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 9374,
            "range": "±21.59%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Block 9422912",
            "value": 20580,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422913",
            "value": 18352,
            "range": "±9.23%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422914",
            "value": 9933,
            "range": "±25.52%",
            "unit": "ops/sec",
            "extra": "43 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f15f28b580923d040c6bdf9de68ff38cf1f5fab4",
          "message": "client: sync stability fixes (#1543)\n\n* only attach once to global Event.PEER_ERROR on peerpool open (and clear listeners on close)\r\nthis should fix the MaxListenersExceededWarning for peer:error listeners\r\n\r\n* skip handleNewBlock if number exceeds one past our height since we can't validate it\r\n\r\n* if logger is missing message set to `(empty message)` so it doesn't crash the process\r\n\r\n* fetcher: enqueue jobs that return with empty result (could be no returned headers or bodies)\r\n\r\n* execution: use new blockchain getIteratorHead method\r\n\r\n* tests: add height to mocked chain\r\n\r\n* client: still add block hash to the known-by-peer list even if not further validated/processed\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-10-26T10:59:18+02:00",
          "tree_id": "9bbe4b4317c167128ca2e7029facbe3ee7e9ba6b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f15f28b580923d040c6bdf9de68ff38cf1f5fab4"
        },
        "date": 1635239122393,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13458,
            "range": "±5.06%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12690,
            "range": "±6.39%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 13606,
            "range": "±3.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13768,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11030,
            "range": "±12.72%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11789,
            "range": "±5.95%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13072,
            "range": "±4.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13215,
            "range": "±4.26%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13664,
            "range": "±4.40%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13329,
            "range": "±4.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a66230ff47ced51a15dfa51a102e6c0070ed555c",
          "message": "Client: Added Fetcher debug logger (#1544)\n\n* client: added Fetcher debug logger\r\n\r\n* check if header contains non-empty txs or uncles, tidy\r\n\r\n* nit: move `const values` line closer to where it's used\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-10-27T10:23:19+02:00",
          "tree_id": "467afcf1a005b1e2d8b20bf1b9fa6b202b1d32f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a66230ff47ced51a15dfa51a102e6c0070ed555c"
        },
        "date": 1635323346178,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14767,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13857,
            "range": "±6.89%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14797,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14835,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11062,
            "range": "±15.78%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13833,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14742,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14046,
            "range": "±3.96%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14272,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13963,
            "range": "±5.45%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcbee4a0f1f9d0f055caf2cb7190f363bb783bca",
          "message": "Client: More Fetcher Improvements (#1545)\n\n* client -> Fetcher: improved reenqueue debug messages\r\n\r\n* client: aligned VM execution in SYNC_FETCHER_FETCHED event\r\n\r\n* client -> Fetcher: fixed tests\r\n\r\n* client -> Fetcher: set max write queue size to 4 by default to not overload the client on the request side (particularly on growing execution load)\r\n\r\n* client -> executeBlocks option: added special verbose tx execution mode activated with --execute_blocks=BLOCK_NR[*] (useful for debugging on slow txs)",
          "timestamp": "2021-10-27T21:24:39+02:00",
          "tree_id": "c918d6e3f483ab535494381ce1594e6e66caba99",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fcbee4a0f1f9d0f055caf2cb7190f363bb783bca"
        },
        "date": 1635362968387,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23848,
            "range": "±7.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25327,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19590,
            "range": "±11.91%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22199,
            "range": "±6.13%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23645,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22594,
            "range": "±4.58%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 9574,
            "range": "±20.17%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Block 9422912",
            "value": 20612,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422913",
            "value": 18272,
            "range": "±10.57%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10204,
            "range": "±22.21%",
            "unit": "ops/sec",
            "extra": "44 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e72d5eb4f6484e843a0ee4c0deff8cae78ecee0f",
          "message": "tx: add getDataFee to tx cache (#1532)\n\n* tx: add getDataFee to tx cache\r\n\r\n* tx: added tests for getDataFee when frozen and not frozen\r\n\r\n* tx: cleanup in baseTransaction\r\n\r\n* tx: add getDataFee caching for legacy tx\r\n\r\n* tx: remove unneeded return statements\r\n\r\n* tx: invalidate cached dataFee on hardfork change\r\n\r\n* tx: add cache invalidation for all tx types\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-10-27T21:51:54+02:00",
          "tree_id": "2e869eae270b2c60050d7c113b36e8cb27114c25",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e72d5eb4f6484e843a0ee4c0deff8cae78ecee0f"
        },
        "date": 1635364668977,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14957,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14231,
            "range": "±6.47%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14995,
            "range": "±3.26%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14551,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11379,
            "range": "±14.95%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13637,
            "range": "±4.21%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14218,
            "range": "±4.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14141,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14304,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13451,
            "range": "±6.43%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec5bbe1f6b65dcb5d01ec5cf1a52d5b611c30305",
          "message": "client: add websocket support (#1508)\n\n* client: add websocket RPC endpoint to client",
          "timestamp": "2021-10-28T05:56:34-04:00",
          "tree_id": "354b82db1d0b6412546efcec208e72cf2c505eb8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ec5bbe1f6b65dcb5d01ec5cf1a52d5b611c30305"
        },
        "date": 1635415527234,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14658,
            "range": "±5.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14856,
            "range": "±7.32%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16226,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16540,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 12160,
            "range": "±12.83%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14708,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422911",
            "value": 15313,
            "range": "±4.04%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15113,
            "range": "±4.16%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14164,
            "range": "±4.86%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10007,
            "range": "±16.23%",
            "unit": "ops/sec",
            "extra": "47 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a49575b03ceb2d8bf4946f521cf065b01c6ac5f",
          "message": "tx: remove event listener and add datafee caching with hardfork (#1550)\n\n* tx: remove event listener for hardforkChanged\r\n\r\n* tx: add back dataFee caching",
          "timestamp": "2021-11-01T12:06:11+01:00",
          "tree_id": "39e9dfbdb6fdc10b4ec2bcfc691c7c3fb659b05d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5a49575b03ceb2d8bf4946f521cf065b01c6ac5f"
        },
        "date": 1635765156331,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14303,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13430,
            "range": "±6.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14483,
            "range": "±3.52%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14501,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11146,
            "range": "±11.25%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13494,
            "range": "±4.28%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14025,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13828,
            "range": "±4.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13615,
            "range": "±4.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13199,
            "range": "±6.85%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5727a0e60f3d67a84202235187811aaca4ea59f",
          "message": "monorepo: update nyc and verdaccio (#1547)\n\n* monorepo: update nyc and verdaccio\r\n\r\n* Monorepo: updated verdaccio and npm-auth-to-token dev dependencies to use caret dependency ranges\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-11-01T12:45:33+01:00",
          "tree_id": "d8d501a139ea66acefd2de2692dbda9a536173c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b5727a0e60f3d67a84202235187811aaca4ea59f"
        },
        "date": 1635767506111,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14737,
            "range": "±3.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13946,
            "range": "±7.06%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14698,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14672,
            "range": "±3.93%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 10443,
            "range": "±15.43%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13417,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14129,
            "range": "±4.29%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14502,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14638,
            "range": "±4.79%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13817,
            "range": "±5.33%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ade4233ddffffdd146b386de701762196a8c941c",
          "message": "dependencies: dedupe rlp import (#1549)",
          "timestamp": "2021-11-02T09:16:36-07:00",
          "tree_id": "aef344777d2e0b7be58668a5eecad79c9b2d7791",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ade4233ddffffdd146b386de701762196a8c941c"
        },
        "date": 1635870180144,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14743,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14088,
            "range": "±7.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15138,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15242,
            "range": "±4.32%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11075,
            "range": "±14.90%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13978,
            "range": "±4.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14999,
            "range": "±4.27%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14492,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14233,
            "range": "±4.82%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11330,
            "range": "±14.34%",
            "unit": "ops/sec",
            "extra": "57 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a0ab3012a9cefc8d384eb5edcbd524cabca4c73",
          "message": "vm benchmarks: skip blocks reporting false positives for alert threshold (#1546)\n\n* increase vm benchmarks threshold from 200% to 270% to cover false positives\r\n\r\n* add prettier.config.js to root, run on config and workflow files\r\n\r\n* Revert \"increase vm benchmarks threshold from 200% to 270% to cover false positives\"\r\n\r\nThis reverts commit 1621ae520e99a04e9e51ca16033c8e1f05e84855.\r\n\r\n* skip blocks that frequently trip alert threshold",
          "timestamp": "2021-11-03T18:00:04+01:00",
          "tree_id": "c8a3dd69581656488191363558d5668254318c0a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5a0ab3012a9cefc8d384eb5edcbd524cabca4c73"
        },
        "date": 1635959099195,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21448,
            "range": "±3.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18711,
            "range": "±10.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20808,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19655,
            "range": "±4.87%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12345,
            "range": "±18.25%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18242,
            "range": "±4.57%",
            "unit": "ops/sec",
            "extra": "68 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c230e51439a8dc2f6bd358e43e933fc126e6986e",
          "message": "Common: add custom params for Optimism L2 (#1554)\n\n* Add custom params for Optimism L2\r\n\r\n* Note on London hardfork\r\n\r\n* Requested fixes\r\n\r\n* Edit note",
          "timestamp": "2021-11-05T09:29:24+01:00",
          "tree_id": "e8be74da857aa6c6e4b3ebdb86b196689519a395",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c230e51439a8dc2f6bd358e43e933fc126e6986e"
        },
        "date": 1636101264795,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21618,
            "range": "±3.93%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18977,
            "range": "±8.82%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20632,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19767,
            "range": "±5.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12123,
            "range": "±19.71%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18675,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "68 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "309988c2371782585e50015aa41d1e8600604e80",
          "message": "Common, Block: Add arrowGlacier HF (#1527)\n\n* common/vm: add arrowGlacier HF\r\n\r\n* common: fix tests\r\n\r\n* common: fix eip 4345 minimum hardfork\r\n\r\n* block: added ArrowGlacier difficulty tests\r\n\r\n* Common: added forkHash for ArrowGlacier HF\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-11-08T16:59:09+01:00",
          "tree_id": "e40d4faa1aad3cdabb60e64a7e7f44d784433359",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/309988c2371782585e50015aa41d1e8600604e80"
        },
        "date": 1636387422939,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23100,
            "range": "±8.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22461,
            "range": "±7.14%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 24040,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17062,
            "range": "±14.65%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16811,
            "range": "±25.77%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422911",
            "value": 21366,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a54b3a40f9a2c9fef46e094a954b857bedb88f9",
          "message": "Common, Tx, Block, Blockchain, VM, Client: New Arrow Glacier Releases (#1555)\n\n* Common -> release: bumped version to v2.6.0, added CHANGELOG entry, updated upstream dependency versions, updated README\r\n\r\n* Common -> release: rebuild documentation\r\n\r\n* tx -> Release: bumped version to v3.4.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Block -> release: bumped version to v3.6.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Block -> release: rebuild documentation\r\n\r\n* blockchain -> release: bumped version to v5.5.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* VM -> release: bumped version to v5.6.0, added CHANGELOG entry, updated upstream dependency versions, updated README\r\n\r\n* client -> release: bumped version to v0.2, added CHANGELOG entry (TODO)\r\n\r\n* Rebuild package-lock.json file\r\n\r\n* client -> release: additional CHANGELOG work\r\n\r\n* client -> release: finalized CHANGELOG\r\n\r\n* fix: reinit vmexec's txCounter on every new block range executed\r\n\r\n* Apply suggestions from code review\r\n\r\n* update tx error debug log msg `accessList=num (size)` to accessListCount=num` (for increased clarity/readability)\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-09T08:59:51+01:00",
          "tree_id": "0324ab3d0be2d392140c4792e0d3343b7907fb52",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4a54b3a40f9a2c9fef46e094a954b857bedb88f9"
        },
        "date": 1636445112751,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21949,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19422,
            "range": "±8.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21208,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20340,
            "range": "±5.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12135,
            "range": "±16.52%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18856,
            "range": "±3.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d0ba62c588381232d94b55a98684bb93e90785d",
          "message": "VM: Test Runner Improvements (#1560)\n\n* VM -> tests: added error message to tx runtime error in GeneralStateTestsRunner\r\n\r\n* VM -> tests: added basic execution time console output to state and blockchain tests\r\n\r\n* VM -> tests: simplify path call structure in test loader\r\n\r\n* VM -> tests: added new customTestsPath CLI option\r\n\r\n* VM -> tests: replaced file name test run log output with fully qualified sub directory path for easier test localization\r\n\r\n* organize tester files into own folder, organize imports, add @types/minimist and @types/node-dir\r\n\r\n* ignore benchmark block 9422911 due to high variance\r\n\r\n* update path import, tidy, copy over needed changes to testLoader in tx library\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-10T12:29:50+01:00",
          "tree_id": "1fb334425d5b88357edf5f1e243b3545e2c97e89",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3d0ba62c588381232d94b55a98684bb93e90785d"
        },
        "date": 1636544121257,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14904,
            "range": "±3.93%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13402,
            "range": "±8.04%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14422,
            "range": "±3.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14759,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14411,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33eeac3162aee00047be4a59180039e1a7da5f9a",
          "message": "client: save receipts and implement getLogs, getTxReceipt, getTxByHash (#1556)\n\n* save receipts, implement getLogs, getTxReceipt, getTxByHash\r\n* getLogs toBlock query fix, add test using fromBlock/toBlock as numbers, make `--ws` default false\r\n* fix: reinit vmexec's txCounter on every new block range executed\r\n* add effectiveGasPrice to receipt\r\n* fix client coverage reporting (each .nycrc needs its own includes, inheriting it was causing problems)\r\n* fix typos\r\n* add getLogs block range limit, megabyte size limit (150mb default for json rpc, 2mib limit for devp2p receipts response)\r\nrefactor getLogs to accept block param as block instead of blockHash (simplification, no need to re-query for the blocks)\r\n* Add pooledTxs encoding test to bump coverage\r\n* add more tests for handling/encoding/decoding GetReceipts/Receipts\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-11-14T13:00:42-08:00",
          "tree_id": "cf4c273104b32d88a014200b6df34f5f039386c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/33eeac3162aee00047be4a59180039e1a7da5f9a"
        },
        "date": 1636923972494,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13763,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12829,
            "range": "±9.07%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14238,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13784,
            "range": "±4.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13434,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aec64d05230cc0dd7050d7bf072dca6178dc7b62",
          "message": "VM: Add BaseStateManager (#1548)\n\n* vm -> BaseStateManager: added class and constructor, improved DefaultStateManager class documentation\r\n\r\n* VM -> StateManager: removed unused warm() method from Cache\r\n\r\n* VM -> StateManager: made Cache backend agnostic by replacing direct trie calls with operation callbacks\r\n\r\n* VM -> StateManager: moved getAccount(), putAccount() and touchAccount() to BaseStateManager, made _debug a member variable of BaseStateManater\r\n\r\n* VM -> StateManager: moved deleteAccount(), getOriginalContractStorage(), clearOriginalStorageCache(), generateAccessList() to BaseStateManager, checkpoint(), commit(), revert() calls into super class\r\n\r\n* VM -> StateManager: use putAccount() in generateGenesis() in favor of direct trie access, move generateCanonicalGenesis(), generateGenesis() to BaseStateManager()\r\n\r\n* VM -> StateManager: moved generateGenesis() back to StateManager (direct trie access needed), moved EIP-2929 functionality (addWarmedAddress(),...) to BaseStateManager\r\n\r\n* VM -> StateManager: some cleanup\r\n\r\n* VM -> StateManager: flush cache in generateGenesis() call to allow for directly using the provided putAccount() method\r\n\r\n* VM -> StateManager: moved generateGenesis() to BaseStateManager\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-11-15T12:15:23+01:00",
          "tree_id": "fae56673038ab527efdf5a3b71ccd930a884de01",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/aec64d05230cc0dd7050d7bf072dca6178dc7b62"
        },
        "date": 1636975222283,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13234,
            "range": "±3.66%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12955,
            "range": "±8.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 13593,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13394,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13340,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0f9eed1c3740242b94f5dec996961ae53530de6",
          "message": "blockchain: Change toBuffer to toArrayLike for BNs (#1566)\n\n* blockchain: Change toBuffer to toArrayLike for BNs\r\n\r\n* update changelog",
          "timestamp": "2021-11-15T08:52:38-08:00",
          "tree_id": "2df420a8ce92786da2e805d34254e70d37aee457",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d0f9eed1c3740242b94f5dec996961ae53530de6"
        },
        "date": 1636995469909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11925,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11513,
            "range": "±7.83%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12206,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12223,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11708,
            "range": "±3.76%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76a3b129183813a353fea28494083bc160d59778",
          "message": "blockchain: v5.5.1 release (#1567)\n\n* blockchain: prepare v5.5.1 release\r\n\r\n* client fix cli tape tests: prevent end being called more than once per suite",
          "timestamp": "2021-11-16T09:42:48+01:00",
          "tree_id": "b847e37280969c6170c66245f8b0b172e4392bc8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/76a3b129183813a353fea28494083bc160d59778"
        },
        "date": 1637052457319,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20306,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18227,
            "range": "±8.54%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19897,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18880,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13107,
            "range": "±17.02%",
            "unit": "ops/sec",
            "extra": "51 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb5240bec432b5c37f38fd5483483f805f24f234",
          "message": "block: point difficulty tests to ethereum-tests (#1571)\n\n* block: switch difficulty tests back to Eth-Tests\r\n* delete unused test data artifact\r\n* tidy\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-16T13:25:04-08:00",
          "tree_id": "5b6684bb90e396451beb00109ce12fbf09903708",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/eb5240bec432b5c37f38fd5483483f805f24f234"
        },
        "date": 1637098162632,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20270,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18569,
            "range": "±7.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20318,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19506,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12035,
            "range": "±18.82%",
            "unit": "ops/sec",
            "extra": "48 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67ff9e822747b99b24686bb89be5b1814f0eef81",
          "message": "dedupe vm ci step (don't run test:API twice) (#1573)",
          "timestamp": "2021-11-17T12:41:53+01:00",
          "tree_id": "52926e430dad032d54816b1bb37aab826bfea6e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/67ff9e822747b99b24686bb89be5b1814f0eef81"
        },
        "date": 1637149609371,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17900,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16664,
            "range": "±10.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18020,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17757,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14399,
            "range": "±14.11%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bccef10b73fda2373122a4109d1c2eb433bc2ead",
          "message": "Common: Add berlin/london hardforks to kovan (#1577)\n\n* Common: Add berlin/london hardforks to kovan\r\n\r\n* Update tests and fix forkhash",
          "timestamp": "2021-11-18T10:19:06+01:00",
          "tree_id": "3e6de769dc64d9c6092e894046c798e6e2fec453",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bccef10b73fda2373122a4109d1c2eb433bc2ead"
        },
        "date": 1637227474836,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10562,
            "range": "±3.51%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10560,
            "range": "±7.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10872,
            "range": "±3.16%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10839,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10624,
            "range": "±4.08%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      }
    ]
  }
}