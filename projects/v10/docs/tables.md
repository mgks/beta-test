# Table Rendering & Scrolling Test

This page tests table containers with a comprehensive dataset (60 rows and 15 wide columns) to verify horizontal scrolling, corner-border expand button positioning, and the universal modal lightbox.

---

## Service Performance Directory

| ID | Service Name | Cluster Region | Node Hostname | HTTP Method | Endpoint Route | Latency P50 | Latency P90 | Latency P99 | Throughput (req/s) | Error Rate | Memory (MB) | CPU Load | Active Threads | Status & Health |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| #1 | **api-service-worker-001** | `us-west-2` | `k8s-node-us-west-2-pod-1001.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-1/telemetry` | 5.3 ms | 14.8 ms | 26.8 ms | 1,295 | 0.01% | 786 MB | 18% | 17 | ✅ Healthy |
| #2 | **api-service-worker-002** | `eu-west-1` | `k8s-node-eu-west-1-pod-1002.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-2/telemetry` | 6.4 ms | 17.1 ms | 28.6 ms | 1,340 | 0.02% | 804 MB | 21% | 18 | ✅ Healthy |
| #3 | **api-service-worker-003** | `eu-central-1` | `k8s-node-eu-central-1-pod-1003.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-3/telemetry` | 7.5 ms | 19.4 ms | 30.4 ms | 1,385 | 0.03% | 822 MB | 24% | 19 | ✅ Healthy |
| #4 | **api-service-worker-004** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1004.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-4/telemetry` | 8.6 ms | 21.7 ms | 32.2 ms | 1,430 | 0.04% | 840 MB | 27% | 20 | ✅ Healthy |
| #5 | **api-service-worker-005** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1005.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-5/telemetry` | 4.2 ms | 24.0 ms | 34.0 ms | 1,475 | 0.05% | 858 MB | 30% | 21 | ✅ Healthy |
| #6 | **api-service-worker-006** | `us-east-1` | `k8s-node-us-east-1-pod-1006.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-6/telemetry` | 5.3 ms | 26.3 ms | 35.8 ms | 1,520 | 0.06% | 876 MB | 33% | 22 | ✅ Healthy |
| #7 | **api-service-worker-007** | `us-west-2` | `k8s-node-us-west-2-pod-1007.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-7/telemetry` | 6.4 ms | 28.6 ms | 37.6 ms | 1,565 | 0.00% | 894 MB | 36% | 23 | ✅ Healthy |
| #8 | **api-service-worker-008** | `eu-west-1` | `k8s-node-eu-west-1-pod-1008.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-8/telemetry` | 7.5 ms | 12.5 ms | 39.4 ms | 1,610 | 0.01% | 912 MB | 39% | 24 | ✅ Healthy |
| #9 | **api-service-worker-009** | `eu-central-1` | `k8s-node-eu-central-1-pod-1009.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-9/telemetry` | 8.6 ms | 14.8 ms | 41.2 ms | 1,655 | 0.02% | 930 MB | 42% | 25 | ✅ Healthy |
| #10 | **api-service-worker-010** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1010.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-10/telemetry` | 4.2 ms | 17.1 ms | 43.0 ms | 1,700 | 0.03% | 948 MB | 45% | 26 | ⚠️ Degrading |
| #11 | **api-service-worker-011** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1011.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-11/telemetry` | 5.3 ms | 19.4 ms | 44.8 ms | 1,745 | 0.04% | 966 MB | 48% | 27 | ✅ Healthy |
| #12 | **api-service-worker-012** | `us-east-1` | `k8s-node-us-east-1-pod-1012.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-12/telemetry` | 6.4 ms | 21.7 ms | 46.6 ms | 1,790 | 0.05% | 984 MB | 51% | 28 | ✅ Healthy |
| #13 | **api-service-worker-013** | `us-west-2` | `k8s-node-us-west-2-pod-1013.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-13/telemetry` | 7.5 ms | 24.0 ms | 48.4 ms | 1,835 | 0.06% | 1002 MB | 54% | 29 | ✅ Healthy |
| #14 | **api-service-worker-014** | `eu-west-1` | `k8s-node-eu-west-1-pod-1014.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-14/telemetry` | 8.6 ms | 26.3 ms | 50.2 ms | 1,880 | 0.00% | 1020 MB | 57% | 30 | ✅ Healthy |
| #15 | **api-service-worker-015** | `eu-central-1` | `k8s-node-eu-central-1-pod-1015.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-15/telemetry` | 4.2 ms | 28.6 ms | 52.0 ms | 1,925 | 0.01% | 1038 MB | 60% | 31 | 🔄 Scaling |
| #16 | **api-service-worker-016** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1016.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-16/telemetry` | 5.3 ms | 12.5 ms | 53.8 ms | 1,970 | 0.02% | 1056 MB | 63% | 32 | ✅ Healthy |
| #17 | **api-service-worker-017** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1017.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-17/telemetry` | 6.4 ms | 14.8 ms | 55.6 ms | 2,015 | 0.03% | 1074 MB | 66% | 33 | ✅ Healthy |
| #18 | **api-service-worker-018** | `us-east-1` | `k8s-node-us-east-1-pod-1018.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-18/telemetry` | 7.5 ms | 17.1 ms | 57.4 ms | 2,060 | 0.04% | 1092 MB | 69% | 34 | ✅ Healthy |
| #19 | **api-service-worker-019** | `us-west-2` | `k8s-node-us-west-2-pod-1019.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-19/telemetry` | 8.6 ms | 19.4 ms | 59.2 ms | 2,105 | 0.05% | 1110 MB | 72% | 35 | ✅ Healthy |
| #20 | **api-service-worker-020** | `eu-west-1` | `k8s-node-eu-west-1-pod-1020.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-20/telemetry` | 4.2 ms | 21.7 ms | 61.0 ms | 2,150 | 0.06% | 1128 MB | 75% | 36 | ⚠️ Degrading |
| #21 | **api-service-worker-021** | `eu-central-1` | `k8s-node-eu-central-1-pod-1021.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-21/telemetry` | 5.3 ms | 24.0 ms | 62.8 ms | 2,195 | 0.00% | 1146 MB | 78% | 37 | ✅ Healthy |
| #22 | **api-service-worker-022** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1022.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-22/telemetry` | 6.4 ms | 26.3 ms | 64.6 ms | 2,240 | 0.01% | 1164 MB | 81% | 38 | ✅ Healthy |
| #23 | **api-service-worker-023** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1023.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-23/telemetry` | 7.5 ms | 28.6 ms | 66.4 ms | 2,285 | 0.02% | 1182 MB | 84% | 39 | ✅ Healthy |
| #24 | **api-service-worker-024** | `us-east-1` | `k8s-node-us-east-1-pod-1024.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-24/telemetry` | 8.6 ms | 12.5 ms | 68.2 ms | 2,330 | 0.03% | 1200 MB | 87% | 40 | ✅ Healthy |
| #25 | **api-service-worker-025** | `us-west-2` | `k8s-node-us-west-2-pod-1025.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-25/telemetry` | 4.2 ms | 14.8 ms | 70.0 ms | 2,375 | 0.04% | 1218 MB | 15% | 41 | ✅ Healthy |
| #26 | **api-service-worker-026** | `eu-west-1` | `k8s-node-eu-west-1-pod-1026.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-26/telemetry` | 5.3 ms | 17.1 ms | 71.8 ms | 2,420 | 0.05% | 1236 MB | 18% | 42 | ✅ Healthy |
| #27 | **api-service-worker-027** | `eu-central-1` | `k8s-node-eu-central-1-pod-1027.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-27/telemetry` | 6.4 ms | 19.4 ms | 73.6 ms | 2,465 | 0.06% | 1254 MB | 21% | 43 | ✅ Healthy |
| #28 | **api-service-worker-028** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1028.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-28/telemetry` | 7.5 ms | 21.7 ms | 75.4 ms | 2,510 | 0.00% | 1272 MB | 24% | 44 | ✅ Healthy |
| #29 | **api-service-worker-029** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1029.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-29/telemetry` | 8.6 ms | 24.0 ms | 77.2 ms | 2,555 | 0.01% | 1290 MB | 27% | 45 | ✅ Healthy |
| #30 | **api-service-worker-030** | `us-east-1` | `k8s-node-us-east-1-pod-1030.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-30/telemetry` | 4.2 ms | 26.3 ms | 79.0 ms | 2,600 | 0.02% | 1308 MB | 30% | 46 | ⚠️ Degrading |
| #31 | **api-service-worker-031** | `us-west-2` | `k8s-node-us-west-2-pod-1031.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-31/telemetry` | 5.3 ms | 28.6 ms | 80.8 ms | 2,645 | 0.03% | 1326 MB | 33% | 47 | ✅ Healthy |
| #32 | **api-service-worker-032** | `eu-west-1` | `k8s-node-eu-west-1-pod-1032.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-32/telemetry` | 6.4 ms | 12.5 ms | 82.6 ms | 2,690 | 0.04% | 1344 MB | 36% | 16 | ✅ Healthy |
| #33 | **api-service-worker-033** | `eu-central-1` | `k8s-node-eu-central-1-pod-1033.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-33/telemetry` | 7.5 ms | 14.8 ms | 84.4 ms | 2,735 | 0.05% | 1362 MB | 39% | 17 | ✅ Healthy |
| #34 | **api-service-worker-034** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1034.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-34/telemetry` | 8.6 ms | 17.1 ms | 86.2 ms | 2,780 | 0.06% | 1380 MB | 42% | 18 | ✅ Healthy |
| #35 | **api-service-worker-035** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1035.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-35/telemetry` | 4.2 ms | 19.4 ms | 88.0 ms | 2,825 | 0.00% | 1398 MB | 45% | 19 | ✅ Healthy |
| #36 | **api-service-worker-036** | `us-east-1` | `k8s-node-us-east-1-pod-1036.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-36/telemetry` | 5.3 ms | 21.7 ms | 89.8 ms | 2,870 | 0.01% | 1416 MB | 48% | 20 | ✅ Healthy |
| #37 | **api-service-worker-037** | `us-west-2` | `k8s-node-us-west-2-pod-1037.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-37/telemetry` | 6.4 ms | 24.0 ms | 91.6 ms | 2,915 | 0.02% | 1434 MB | 51% | 21 | ✅ Healthy |
| #38 | **api-service-worker-038** | `eu-west-1` | `k8s-node-eu-west-1-pod-1038.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-38/telemetry` | 7.5 ms | 26.3 ms | 93.4 ms | 2,960 | 0.03% | 1452 MB | 54% | 22 | ✅ Healthy |
| #39 | **api-service-worker-039** | `eu-central-1` | `k8s-node-eu-central-1-pod-1039.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-39/telemetry` | 8.6 ms | 28.6 ms | 95.2 ms | 3,005 | 0.04% | 1470 MB | 57% | 23 | ✅ Healthy |
| #40 | **api-service-worker-040** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1040.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-40/telemetry` | 4.2 ms | 12.5 ms | 97.0 ms | 3,050 | 0.05% | 1488 MB | 60% | 24 | ⚠️ Degrading |
| #41 | **api-service-worker-041** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1041.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-41/telemetry` | 5.3 ms | 14.8 ms | 98.8 ms | 3,095 | 0.06% | 1506 MB | 63% | 25 | ✅ Healthy |
| #42 | **api-service-worker-042** | `us-east-1` | `k8s-node-us-east-1-pod-1042.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-42/telemetry` | 6.4 ms | 17.1 ms | 100.6 ms | 3,140 | 0.00% | 1524 MB | 66% | 26 | ✅ Healthy |
| #43 | **api-service-worker-043** | `us-west-2` | `k8s-node-us-west-2-pod-1043.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-43/telemetry` | 7.5 ms | 19.4 ms | 102.4 ms | 3,185 | 0.01% | 1542 MB | 69% | 27 | ✅ Healthy |
| #44 | **api-service-worker-044** | `eu-west-1` | `k8s-node-eu-west-1-pod-1044.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-44/telemetry` | 8.6 ms | 21.7 ms | 104.2 ms | 3,230 | 0.02% | 1560 MB | 72% | 28 | ✅ Healthy |
| #45 | **api-service-worker-045** | `eu-central-1` | `k8s-node-eu-central-1-pod-1045.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-45/telemetry` | 4.2 ms | 24.0 ms | 106.0 ms | 3,275 | 0.03% | 1578 MB | 75% | 29 | 🔄 Scaling |
| #46 | **api-service-worker-046** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1046.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-46/telemetry` | 5.3 ms | 26.3 ms | 107.8 ms | 3,320 | 0.04% | 1596 MB | 78% | 30 | ✅ Healthy |
| #47 | **api-service-worker-047** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1047.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-47/telemetry` | 6.4 ms | 28.6 ms | 109.6 ms | 3,365 | 0.05% | 1614 MB | 81% | 31 | ✅ Healthy |
| #48 | **api-service-worker-048** | `us-east-1` | `k8s-node-us-east-1-pod-1048.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-48/telemetry` | 7.5 ms | 12.5 ms | 111.4 ms | 3,410 | 0.06% | 1632 MB | 84% | 32 | ✅ Healthy |
| #49 | **api-service-worker-049** | `us-west-2` | `k8s-node-us-west-2-pod-1049.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-49/telemetry` | 8.6 ms | 14.8 ms | 113.2 ms | 3,455 | 0.00% | 1650 MB | 87% | 33 | ✅ Healthy |
| #50 | **api-service-worker-050** | `eu-west-1` | `k8s-node-eu-west-1-pod-1050.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-50/telemetry` | 4.2 ms | 17.1 ms | 115.0 ms | 3,500 | 0.01% | 1668 MB | 15% | 34 | ⚠️ Degrading |
| #51 | **api-service-worker-051** | `eu-central-1` | `k8s-node-eu-central-1-pod-1051.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-51/telemetry` | 5.3 ms | 19.4 ms | 116.8 ms | 3,545 | 0.02% | 1686 MB | 18% | 35 | ✅ Healthy |
| #52 | **api-service-worker-052** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1052.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-52/telemetry` | 6.4 ms | 21.7 ms | 118.6 ms | 3,590 | 0.03% | 1704 MB | 21% | 36 | ✅ Healthy |
| #53 | **api-service-worker-053** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1053.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-53/telemetry` | 7.5 ms | 24.0 ms | 120.4 ms | 3,635 | 0.04% | 1722 MB | 24% | 37 | ✅ Healthy |
| #54 | **api-service-worker-054** | `us-east-1` | `k8s-node-us-east-1-pod-1054.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-54/telemetry` | 8.6 ms | 26.3 ms | 122.2 ms | 3,680 | 0.05% | 1740 MB | 27% | 38 | ✅ Healthy |
| #55 | **api-service-worker-055** | `us-west-2` | `k8s-node-us-west-2-pod-1055.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-55/telemetry` | 4.2 ms | 28.6 ms | 124.0 ms | 3,725 | 0.06% | 1758 MB | 30% | 39 | ✅ Healthy |
| #56 | **api-service-worker-056** | `eu-west-1` | `k8s-node-eu-west-1-pod-1056.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-56/telemetry` | 5.3 ms | 12.5 ms | 125.8 ms | 3,770 | 0.00% | 1776 MB | 33% | 40 | ✅ Healthy |
| #57 | **api-service-worker-057** | `eu-central-1` | `k8s-node-eu-central-1-pod-1057.internal.net` | `PUT` | `/api/v2/pipelines/stream/partition-57/telemetry` | 6.4 ms | 14.8 ms | 127.6 ms | 3,815 | 0.01% | 1794 MB | 36% | 41 | ✅ Healthy |
| #58 | **api-service-worker-058** | `ap-southeast-1` | `k8s-node-ap-southeast-1-pod-1058.internal.net` | `DELETE` | `/api/v2/pipelines/stream/partition-58/telemetry` | 7.5 ms | 17.1 ms | 129.4 ms | 3,860 | 0.02% | 1812 MB | 39% | 42 | ✅ Healthy |
| #59 | **api-service-worker-059** | `ap-northeast-1` | `k8s-node-ap-northeast-1-pod-1059.internal.net` | `GET` | `/api/v2/pipelines/stream/partition-59/telemetry` | 8.6 ms | 19.4 ms | 131.2 ms | 3,905 | 0.03% | 1830 MB | 42% | 43 | ✅ Healthy |
| #60 | **api-service-worker-060** | `us-east-1` | `k8s-node-us-east-1-pod-1060.internal.net` | `POST` | `/api/v2/pipelines/stream/partition-60/telemetry` | 4.2 ms | 21.7 ms | 133.0 ms | 3,950 | 0.04% | 1848 MB | 45% | 44 | ⚠️ Degrading |

---

## Post-Table Content

Content following the large table to verify document flow and clearance.
