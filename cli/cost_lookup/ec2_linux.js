const ec2 = {
    vers: 0.01,
    config: {
        rate: "perhr",
        valueColumns: ["vCPU", "ECU", "memoryGiB", "storageGB", "linux"],
        currencies: ["USD"],
        regions: [{
            region: "us-east-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0058"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0116"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.023"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0464"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0928"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1856"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.3712"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.096"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.192"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.384"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.768"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.304"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.608"
                        }
                    }]
                }, {
                    size: "m5d.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "1 x 75",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.113"
                        }
                    }]
                }, {
                    size: "m5d.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "1 x 150",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.226"
                        }
                    }]
                }, {
                    size: "m5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "1 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.452"
                        }
                    }]
                }, {
                    size: "m5d.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "2 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.904"
                        }
                    }]
                }, {
                    size: "m5d.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "2 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.712"
                        }
                    }]
                }, {
                    size: "m5d.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "4 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.424"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.8"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.2"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.085"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.17"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.34"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.68"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.53"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.06"
                        }
                    }]
                }, {
                    size: "c5d.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "1 x 50",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.096"
                        }
                    }]
                }, {
                    size: "c5d.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "1 x 100",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.192"
                        }
                    }]
                }, {
                    size: "c5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "1 x 200",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.384"
                        }
                    }]
                }, {
                    size: "c5d.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "1 x 400",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.768"
                        }
                    }]
                }, {
                    size: "c5d.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "1 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.728"
                        }
                    }]
                }, {
                    size: "c5d.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "1 x 1800",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.456"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.199"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.398"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.796"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.591"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.9"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "7.2"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "14.4"
                        }
                    }]
                }, {
                    size: "p3.2xlarge",
                    vCPU: "8",
                    ECU: "23.5",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.06"
                        }
                    }]
                }, {
                    size: "p3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "12.24"
                        }
                    }]
                }, {
                    size: "p3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "24.48"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.14"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.28"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.56"
                        }
                    }]
                }]
            }, {
                type: "fpgaCurrentGen",
                sizes: [{
                    size: "f1.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "122",
                    storageGB: "1 x 470 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.65"
                        }
                    }]
                }, {
                    size: "f1.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "976",
                    storageGB: "4 x 940 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.2"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.669"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.338"
                        }
                    }]
                }, {
                    size: "x1e.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "122",
                    storageGB: "1 x 120 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.834"
                        }
                    }]
                }, {
                    size: "x1e.2xlarge",
                    vCPU: "8",
                    ECU: "23",
                    memoryGiB: "244",
                    storageGB: "1 x 240 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.668"
                        }
                    }]
                }, {
                    size: "x1e.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "488",
                    storageGB: "1 x 480 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.336"
                        }
                    }]
                }, {
                    size: "x1e.8xlarge",
                    vCPU: "32",
                    ECU: "91",
                    memoryGiB: "976",
                    storageGB: "1 x 960",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.672"
                        }
                    }]
                }, {
                    size: "x1e.16xlarge",
                    vCPU: "64",
                    ECU: "179",
                    memoryGiB: "1952",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.344"
                        }
                    }]
                }, {
                    size: "x1e.32xlarge",
                    vCPU: "128",
                    ECU: "340",
                    memoryGiB: "3904",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "26.688"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.133"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.266"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.532"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.064"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.128"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.256"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.156"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.312"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.624"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.248"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.496"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.992"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.992"
                        }
                    }]
                }, {
                    size: "h1.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "1 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.468"
                        }
                    }]
                }, {
                    size: "h1.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "2 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.936"
                        }
                    }]
                }, {
                    size: "h1.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "128",
                    storageGB: "4 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.872"
                        }
                    }]
                }, {
                    size: "h1.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "8 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.744"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.69"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.38"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.76"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.52"
                        }
                    }]
                }]
            }]
        }, {
            region: "us-east-2",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0058"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0116"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.023"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0464"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0928"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1856"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.3712"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.096"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.192"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.384"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.768"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.304"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.608"
                        }
                    }]
                }, {
                    size: "m5d.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "1 x 75",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.113"
                        }
                    }]
                }, {
                    size: "m5d.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "1 x 150",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.226"
                        }
                    }]
                }, {
                    size: "m5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "1 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.452"
                        }
                    }]
                }, {
                    size: "m5d.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "2 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.904"
                        }
                    }]
                }, {
                    size: "m5d.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "2 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.712"
                        }
                    }]
                }, {
                    size: "m5d.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "4 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.424"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.8"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.2"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.085"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.17"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.34"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.68"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.53"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.06"
                        }
                    }]
                }, {
                    size: "c5d.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "1 x 50",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.096"
                        }
                    }]
                }, {
                    size: "c5d.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "1 x 100",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.192"
                        }
                    }]
                }, {
                    size: "c5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "1 x 200",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.384"
                        }
                    }]
                }, {
                    size: "c5d.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "1 x 400",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.768"
                        }
                    }]
                }, {
                    size: "c5d.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "1 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.728"
                        }
                    }]
                }, {
                    size: "c5d.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "1 x 1800",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.456"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.199"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.398"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.796"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.591"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.9"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "7.2"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "14.4"
                        }
                    }]
                }, {
                    size: "p3.2xlarge",
                    vCPU: "8",
                    ECU: "23.5",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.06"
                        }
                    }]
                }, {
                    size: "p3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "12.24"
                        }
                    }]
                }, {
                    size: "p3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "24.48"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.14"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.28"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.56"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.669"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.338"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.133"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.266"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.532"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.064"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.128"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.256"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.156"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.312"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.624"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.248"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.496"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.992"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.992"
                        }
                    }]
                }, {
                    size: "h1.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "1 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.468"
                        }
                    }]
                }, {
                    size: "h1.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "2 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.936"
                        }
                    }]
                }, {
                    size: "h1.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "128",
                    storageGB: "4 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.872"
                        }
                    }]
                }, {
                    size: "h1.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "8 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.744"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.69"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.38"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.76"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.52"
                        }
                    }]
                }]
            }]
        }, {
            region: "us-west-2",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0058"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0116"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.023"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0464"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0928"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1856"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.3712"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.096"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.192"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.384"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.768"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.304"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.608"
                        }
                    }]
                }, {
                    size: "m5d.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "1 x 75",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.113"
                        }
                    }]
                }, {
                    size: "m5d.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "1 x 150",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.226"
                        }
                    }]
                }, {
                    size: "m5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "1 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.452"
                        }
                    }]
                }, {
                    size: "m5d.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "2 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.904"
                        }
                    }]
                }, {
                    size: "m5d.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "2 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.712"
                        }
                    }]
                }, {
                    size: "m5d.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "4 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.424"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.8"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.2"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.085"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.17"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.34"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.68"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.53"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.06"
                        }
                    }]
                }, {
                    size: "c5d.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "1 x 50",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.096"
                        }
                    }]
                }, {
                    size: "c5d.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "1 x 100",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.192"
                        }
                    }]
                }, {
                    size: "c5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "1 x 200",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.384"
                        }
                    }]
                }, {
                    size: "c5d.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "1 x 400",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.768"
                        }
                    }]
                }, {
                    size: "c5d.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "1 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.728"
                        }
                    }]
                }, {
                    size: "c5d.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "1 x 1800",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.456"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.199"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.398"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.796"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.591"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.9"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "7.2"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "14.4"
                        }
                    }]
                }, {
                    size: "p3.2xlarge",
                    vCPU: "8",
                    ECU: "23.5",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.06"
                        }
                    }]
                }, {
                    size: "p3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "12.24"
                        }
                    }]
                }, {
                    size: "p3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "24.48"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.14"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.28"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.56"
                        }
                    }]
                }]
            }, {
                type: "fpgaCurrentGen",
                sizes: [{
                    size: "f1.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "122",
                    storageGB: "1 x 470 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.65"
                        }
                    }]
                }, {
                    size: "f1.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "976",
                    storageGB: "4 x 940 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.2"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.669"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.338"
                        }
                    }]
                }, {
                    size: "x1e.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "122",
                    storageGB: "1 x 120 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.834"
                        }
                    }]
                }, {
                    size: "x1e.2xlarge",
                    vCPU: "8",
                    ECU: "23",
                    memoryGiB: "244",
                    storageGB: "1 x 240 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.668"
                        }
                    }]
                }, {
                    size: "x1e.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "488",
                    storageGB: "1 x 480 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.336"
                        }
                    }]
                }, {
                    size: "x1e.8xlarge",
                    vCPU: "32",
                    ECU: "91",
                    memoryGiB: "976",
                    storageGB: "1 x 960",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.672"
                        }
                    }]
                }, {
                    size: "x1e.16xlarge",
                    vCPU: "64",
                    ECU: "179",
                    memoryGiB: "1952",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.344"
                        }
                    }]
                }, {
                    size: "x1e.32xlarge",
                    vCPU: "128",
                    ECU: "340",
                    memoryGiB: "3904",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "26.688"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.133"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.266"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.532"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.064"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.128"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.256"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.156"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.312"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.624"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.248"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.496"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.992"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.992"
                        }
                    }]
                }, {
                    size: "h1.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "1 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.468"
                        }
                    }]
                }, {
                    size: "h1.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "2 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.936"
                        }
                    }]
                }, {
                    size: "h1.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "128",
                    storageGB: "4 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.872"
                        }
                    }]
                }, {
                    size: "h1.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "8 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.744"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.69"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.38"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.76"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.52"
                        }
                    }]
                }]
            }]
        }, {
            region: "us-west-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0069"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0138"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0276"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0552"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1104"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2208"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4416"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.112"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.224"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.448"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.896"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.688"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.376"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.117"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.234"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.468"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.936"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.34"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.744"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.106"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.212"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.424"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.848"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.908"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.816"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.124"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.249"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.498"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.997"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.993"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.534"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.068"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.136"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.148"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.296"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.593"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.186"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.371"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.742"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.172"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.344"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.688"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.376"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.752"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.504"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.781"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.563"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.125"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.25"
                        }
                    }]
                }]
            }]
        }, {
            region: "ca-central-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0064"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0128"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0256"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0512"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1024"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2048"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4096"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.107"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.214"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.428"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.856"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.568"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.136"
                        }
                    }]
                }, {
                    size: "m5d.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "1 x 75",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.126"
                        }
                    }]
                }, {
                    size: "m5d.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "1 x 150",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.252"
                        }
                    }]
                }, {
                    size: "m5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "1 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.504"
                        }
                    }]
                }, {
                    size: "m5d.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "2 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.008"
                        }
                    }]
                }, {
                    size: "m5d.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "2 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.024"
                        }
                    }]
                }, {
                    size: "m5d.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "4 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.048"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.111"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.222"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.444"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.888"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.22"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.552"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.093"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.186"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.372"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.744"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.674"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.348"
                        }
                    }]
                }, {
                    size: "c5d.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "1 x 50",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.106"
                        }
                    }]
                }, {
                    size: "c5d.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "1 x 100",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.212"
                        }
                    }]
                }, {
                    size: "c5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "1 x 200",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.424"
                        }
                    }]
                }, {
                    size: "c5d.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "1 x 400",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.848"
                        }
                    }]
                }, {
                    size: "c5d.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "1 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.908"
                        }
                    }]
                }, {
                    size: "c5d.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "1 x 1800",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.816"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.11"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.218"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.438"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.876"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.75"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "7.336"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "14.672"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.146"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.292"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.584"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.168"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.336"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.672"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.172"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.344"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.688"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.376"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.752"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.504"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.759"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.518"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.036"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.072"
                        }
                    }]
                }]
            }]
        }, {
            region: "eu-west-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0063"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0126"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.025"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.05"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1008"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2016"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4032"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.107"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.214"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.428"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.856"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.568"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.136"
                        }
                    }]
                }, {
                    size: "m5d.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "1 x 75",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.126"
                        }
                    }]
                }, {
                    size: "m5d.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "1 x 150",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.252"
                        }
                    }]
                }, {
                    size: "m5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "1 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.504"
                        }
                    }]
                }, {
                    size: "m5d.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "2 x 300",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.008"
                        }
                    }]
                }, {
                    size: "m5d.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "2 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.024"
                        }
                    }]
                }, {
                    size: "m5d.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "4 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.048"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.111"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.222"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.444"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.888"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.22"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.552"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.096"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.192"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.384"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.768"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.728"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.456"
                        }
                    }]
                }, {
                    size: "c5d.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "1 x 50",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.109"
                        }
                    }]
                }, {
                    size: "c5d.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "1 x 100",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.218"
                        }
                    }]
                }, {
                    size: "c5d.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "1 x 200",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.436"
                        }
                    }]
                }, {
                    size: "c5d.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "1 x 400",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.872"
                        }
                    }]
                }, {
                    size: "c5d.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "1 x 900",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.962"
                        }
                    }]
                }, {
                    size: "c5d.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "1 x 1800",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.924"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.113"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.226"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.453"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.905"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.811"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.972"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "7.776"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "15.552"
                        }
                    }]
                }, {
                    size: "p3.2xlarge",
                    vCPU: "8",
                    ECU: "23.5",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.305"
                        }
                    }]
                }, {
                    size: "p3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.22"
                        }
                    }]
                }, {
                    size: "p3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "26.44"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.21"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.42"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.84"
                        }
                    }]
                }]
            }, {
                type: "fpgaCurrentGen",
                sizes: [{
                    size: "f1.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "122",
                    storageGB: "1 x 470 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.815"
                        }
                    }]
                }, {
                    size: "f1.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "976",
                    storageGB: "4 x 940 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "14.52"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "8.003"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "16.006"
                        }
                    }]
                }, {
                    size: "x1e.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "122",
                    storageGB: "1 x 120 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1"
                        }
                    }]
                }, {
                    size: "x1e.2xlarge",
                    vCPU: "8",
                    ECU: "23",
                    memoryGiB: "244",
                    storageGB: "1 x 240 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2"
                        }
                    }]
                }, {
                    size: "x1e.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "488",
                    storageGB: "1 x 480 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4"
                        }
                    }]
                }, {
                    size: "x1e.8xlarge",
                    vCPU: "32",
                    ECU: "91",
                    memoryGiB: "976",
                    storageGB: "1 x 960",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "8"
                        }
                    }]
                }, {
                    size: "x1e.16xlarge",
                    vCPU: "64",
                    ECU: "179",
                    memoryGiB: "1952",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "16"
                        }
                    }]
                }, {
                    size: "x1e.32xlarge",
                    vCPU: "128",
                    ECU: "340",
                    memoryGiB: "3904",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "32"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.148"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.296"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.593"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.186"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.371"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.742"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.172"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.344"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.688"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.376"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.752"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.504"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.504"
                        }
                    }]
                }, {
                    size: "h1.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "1 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.519"
                        }
                    }]
                }, {
                    size: "h1.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "2 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.038"
                        }
                    }]
                }, {
                    size: "h1.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "128",
                    storageGB: "4 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.076"
                        }
                    }]
                }, {
                    size: "h1.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "8 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.152"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.735"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.47"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.94"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.88"
                        }
                    }]
                }]
            }]
        }, {
            region: "eu-west-2",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0066"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0132"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.026"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.052"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1056"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2112"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4224"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.111"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.222"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.444"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.888"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.664"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.328"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.116"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.232"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.464"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.928"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.32"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.712"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.101"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.202"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.404"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.808"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.818"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.636"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.119"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.237"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.476"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.95"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.902"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "8.403"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "16.806"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.156"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.312"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.624"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.248"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.496"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.992"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.181"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.362"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.724"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.448"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.896"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.792"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.792"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.772"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.544"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.087"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.174"
                        }
                    }]
                }]
            }]
        }, {
            region: "eu-west-3",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0066"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0132"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0264"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0528"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1056"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2112"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4224"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.112"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.224"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.448"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.896"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.688"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.376"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.101"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.202"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.404"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.808"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.818"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.636"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "8.403"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "16.806"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.156"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.312"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.624"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.248"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.496"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.992"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.181"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.362"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.724"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.448"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.896"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.792"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.772"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.544"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.088"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.176"
                        }
                    }]
                }]
            }]
        }, {
            region: "eu-central-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0067"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0134"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0268"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0536"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1072"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2144"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4288"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.115"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.23"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.46"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.92"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.76"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.52"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.12"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.24"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.48"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.96"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.4"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.84"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.097"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.194"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.388"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.776"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.746"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.492"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.114"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.227"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.454"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.909"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.817"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.326"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "10.608"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "21.216"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.425"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.85"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.7"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.337"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "18.674"
                        }
                    }]
                }, {
                    size: "x1e.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "122",
                    storageGB: "1 x 120 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.167"
                        }
                    }]
                }, {
                    size: "x1e.2xlarge",
                    vCPU: "8",
                    ECU: "23",
                    memoryGiB: "244",
                    storageGB: "1 x 240 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.334"
                        }
                    }]
                }, {
                    size: "x1e.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "488",
                    storageGB: "1 x 480 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.668"
                        }
                    }]
                }, {
                    size: "x1e.8xlarge",
                    vCPU: "32",
                    ECU: "91",
                    memoryGiB: "976",
                    storageGB: "1 x 960",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.336"
                        }
                    }]
                }, {
                    size: "x1e.16xlarge",
                    vCPU: "64",
                    ECU: "179",
                    memoryGiB: "1952",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "18.672"
                        }
                    }]
                }, {
                    size: "x1e.32xlarge",
                    vCPU: "128",
                    ECU: "340",
                    memoryGiB: "3904",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "37.344"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.16"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.32"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.64"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.28"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.561"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.122"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.186"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.372"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.744"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.488"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.976"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.952"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.952"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.794"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.588"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.176"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.352"
                        }
                    }]
                }]
            }]
        }, {
            region: "ap-southeast-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0073"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0146"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0292"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0584"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1168"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2336"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4672"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.12"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.24"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.48"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.96"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.88"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.76"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.125"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.25"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.5"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.5"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.098"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.196"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.392"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.784"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.764"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.528"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.115"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.231"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.462"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.924"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.848"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.718"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.744"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "27.488"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.67"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.34"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.68"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.671"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "19.341"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.16"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.32"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.64"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.28"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.56"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.12"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.187"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.374"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.748"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.496"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.992"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.984"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.87"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.74"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.48"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.96"
                        }
                    }]
                }]
            }]
        }, {
            region: "ap-northeast-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0076"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0152"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0304"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0608"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1216"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2432"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4864"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.124"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.248"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.496"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.992"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.976"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.952"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.129"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.258"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.516"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.032"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.58"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.128"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.107"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.214"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.428"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.856"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.926"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.852"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.126"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.252"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.504"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.008"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.016"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.542"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "12.336"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "24.672"
                        }
                    }]
                }, {
                    size: "p3.2xlarge",
                    vCPU: "8",
                    ECU: "23.5",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.243"
                        }
                    }]
                }, {
                    size: "p3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "20.972"
                        }
                    }]
                }, {
                    size: "p3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "41.944"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.58"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.16"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.32"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.671"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "19.341"
                        }
                    }]
                }, {
                    size: "x1e.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "122",
                    storageGB: "1 x 120 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.209"
                        }
                    }]
                }, {
                    size: "x1e.2xlarge",
                    vCPU: "8",
                    ECU: "23",
                    memoryGiB: "244",
                    storageGB: "1 x 240 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.418"
                        }
                    }]
                }, {
                    size: "x1e.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "488",
                    storageGB: "1 x 480 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.836"
                        }
                    }]
                }, {
                    size: "x1e.8xlarge",
                    vCPU: "32",
                    ECU: "91",
                    memoryGiB: "976",
                    storageGB: "1 x 960",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.672"
                        }
                    }]
                }, {
                    size: "x1e.16xlarge",
                    vCPU: "64",
                    ECU: "179",
                    memoryGiB: "1952",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "19.344"
                        }
                    }]
                }, {
                    size: "x1e.32xlarge",
                    vCPU: "128",
                    ECU: "340",
                    memoryGiB: "3904",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "38.688"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.16"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.32"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.64"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.28"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.56"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.12"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.183"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.366"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.732"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.464"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.928"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.856"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.856"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.844"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.688"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.376"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.752"
                        }
                    }]
                }]
            }]
        }, {
            region: "ap-southeast-2",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0073"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0146"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0292"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0584"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1168"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2336"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4672"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.12"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.24"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.48"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.96"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.88"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.76"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.125"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.25"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.5"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.5"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.111"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.222"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.444"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.888"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.998"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.996"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.13"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.261"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.522"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.042"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.085"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.542"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "12.336"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "24.672"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.754"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.508"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "7.016"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.671"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "19.341"
                        }
                    }]
                }, {
                    size: "x1e.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "122",
                    storageGB: "1 x 120 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.209"
                        }
                    }]
                }, {
                    size: "x1e.2xlarge",
                    vCPU: "8",
                    ECU: "23",
                    memoryGiB: "244",
                    storageGB: "1 x 240 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.418"
                        }
                    }]
                }, {
                    size: "x1e.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "488",
                    storageGB: "1 x 480 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.836"
                        }
                    }]
                }, {
                    size: "x1e.8xlarge",
                    vCPU: "32",
                    ECU: "91",
                    memoryGiB: "976",
                    storageGB: "1 x 960",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.672"
                        }
                    }]
                }, {
                    size: "x1e.16xlarge",
                    vCPU: "64",
                    ECU: "179",
                    memoryGiB: "1952",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "19.344"
                        }
                    }]
                }, {
                    size: "x1e.32xlarge",
                    vCPU: "128",
                    ECU: "340",
                    memoryGiB: "3904",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "38.688"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.16"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.319"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.638"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.277"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.554"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.107"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.187"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.374"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.748"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.496"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.992"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.984"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.984"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.87"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.74"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.48"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.96"
                        }
                    }]
                }]
            }]
        }, {
            region: "ap-northeast-2",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0072"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0144"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0288"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0576"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1152"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2304"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4608"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.118"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.236"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.472"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.944"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.832"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.664"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.123"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.246"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.492"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.984"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.46"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.936"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.096"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.192"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.384"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.768"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.728"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.456"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.114"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.227"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.454"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.907"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.815"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.465"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "11.72"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "23.44"
                        }
                    }]
                }, {
                    size: "p3.2xlarge",
                    vCPU: "8",
                    ECU: "23.5",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.981"
                        }
                    }]
                }, {
                    size: "p3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "19.924"
                        }
                    }]
                }, {
                    size: "p3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "39.848"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.671"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "19.341"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.16"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.32"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.64"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.28"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.56"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.12"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.183"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.366"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.732"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.464"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.928"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.856"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.844"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.688"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.376"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.752"
                        }
                    }]
                }]
            }]
        }, {
            region: "ap-south-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0062"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0124"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0248"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0496"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0992"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1984"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.3968"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.101"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.202"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.404"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.808"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.424"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.848"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.105"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.21"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.42"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.84"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.1"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.36"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.085"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.17"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.34"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.68"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.53"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.06"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.8"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.6"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.718"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.744"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "27.488"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.187"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "18.374"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.137"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.274"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.548"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.096"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.192"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.384"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.177"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.354"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.708"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.416"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.832"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.664"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.827"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.653"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.306"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.612"
                        }
                    }]
                }]
            }]
        }, {
            region: "sa-east-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0093"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0186"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0372"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0744"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1488"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2976"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.5952"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.153"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.306"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.612"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.224"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.672"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "7.344"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.159"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.318"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.636"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.272"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.18"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.088"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.131"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.262"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.524"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.048"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.358"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.716"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.155"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.309"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.618"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.235"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.47"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "13.005"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "26.01"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.28"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.56"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.12"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.24"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.48"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "8.96"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.286"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.572"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.144"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.288"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.576"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "9.152"
                        }
                    }]
                }]
            }]
        }, {
            region: "us-gov-west-1",
            instanceTypes: [{
                type: "generalCurrentGen",
                sizes: [{
                    size: "t2.nano",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "0.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0068"
                        }
                    }]
                }, {
                    size: "t2.micro",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "1",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0136"
                        }
                    }]
                }, {
                    size: "t2.small",
                    vCPU: "1",
                    ECU: "variable",
                    memoryGiB: "2",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0272"
                        }
                    }]
                }, {
                    size: "t2.medium",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.0544"
                        }
                    }]
                }, {
                    size: "t2.large",
                    vCPU: "2",
                    ECU: "variable",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.1088"
                        }
                    }]
                }, {
                    size: "t2.xlarge",
                    vCPU: "4",
                    ECU: "variable",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.2176"
                        }
                    }]
                }, {
                    size: "t2.2xlarge",
                    vCPU: "8",
                    ECU: "variable",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.4352"
                        }
                    }]
                }, {
                    size: "m5.large",
                    vCPU: "2",
                    ECU: "10",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.121"
                        }
                    }]
                }, {
                    size: "m5.xlarge",
                    vCPU: "4",
                    ECU: "15",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.242"
                        }
                    }]
                }, {
                    size: "m5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.484"
                        }
                    }]
                }, {
                    size: "m5.4xlarge",
                    vCPU: "16",
                    ECU: "61",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.968"
                        }
                    }]
                }, {
                    size: "m5.12xlarge",
                    vCPU: "48",
                    ECU: "173",
                    memoryGiB: "192",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.904"
                        }
                    }]
                }, {
                    size: "m5.24xlarge",
                    vCPU: "96",
                    ECU: "345",
                    memoryGiB: "384",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.808"
                        }
                    }]
                }, {
                    size: "m4.large",
                    vCPU: "2",
                    ECU: "6.5",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.126"
                        }
                    }]
                }, {
                    size: "m4.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.252"
                        }
                    }]
                }, {
                    size: "m4.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.504"
                        }
                    }]
                }, {
                    size: "m4.4xlarge",
                    vCPU: "16",
                    ECU: "53.5",
                    memoryGiB: "64",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.008"
                        }
                    }]
                }, {
                    size: "m4.10xlarge",
                    vCPU: "40",
                    ECU: "124.5",
                    memoryGiB: "160",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.52"
                        }
                    }]
                }, {
                    size: "m4.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "256",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "4.032"
                        }
                    }]
                }]
            }, {
                type: "computeCurrentGen",
                sizes: [{
                    size: "c5.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "4",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.102"
                        }
                    }]
                }, {
                    size: "c5.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "8",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.204"
                        }
                    }]
                }, {
                    size: "c5.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "16",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.408"
                        }
                    }]
                }, {
                    size: "c5.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "32",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.816"
                        }
                    }]
                }, {
                    size: "c5.9xlarge",
                    vCPU: "36",
                    ECU: "139",
                    memoryGiB: "72",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.836"
                        }
                    }]
                }, {
                    size: "c5.18xlarge",
                    vCPU: "72",
                    ECU: "278",
                    memoryGiB: "144",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.672"
                        }
                    }]
                }, {
                    size: "c4.large",
                    vCPU: "2",
                    ECU: "8",
                    memoryGiB: "3.75",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.12"
                        }
                    }]
                }, {
                    size: "c4.xlarge",
                    vCPU: "4",
                    ECU: "16",
                    memoryGiB: "7.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.239"
                        }
                    }]
                }, {
                    size: "c4.2xlarge",
                    vCPU: "8",
                    ECU: "31",
                    memoryGiB: "15",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.479"
                        }
                    }]
                }, {
                    size: "c4.4xlarge",
                    vCPU: "16",
                    ECU: "62",
                    memoryGiB: "30",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.958"
                        }
                    }]
                }, {
                    size: "c4.8xlarge",
                    vCPU: "36",
                    ECU: "132",
                    memoryGiB: "60",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.915"
                        }
                    }]
                }]
            }, {
                type: "gpuCurrentGen",
                sizes: [{
                    size: "p2.xlarge",
                    vCPU: "4",
                    ECU: "12",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.08"
                        }
                    }]
                }, {
                    size: "p2.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "8.64"
                        }
                    }]
                }, {
                    size: "p2.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "732",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "17.28"
                        }
                    }]
                }, {
                    size: "p3.2xlarge",
                    vCPU: "8",
                    ECU: "23.5",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.672"
                        }
                    }]
                }, {
                    size: "p3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "14.688"
                        }
                    }]
                }, {
                    size: "p3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "29.376"
                        }
                    }]
                }, {
                    size: "g3.4xlarge",
                    vCPU: "16",
                    ECU: "47",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.32"
                        }
                    }]
                }, {
                    size: "g3.8xlarge",
                    vCPU: "32",
                    ECU: "94",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.64"
                        }
                    }]
                }, {
                    size: "g3.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.28"
                        }
                    }]
                }]
            }, {
                type: "fpgaCurrentGen",
                sizes: [{
                    size: "f1.2xlarge",
                    vCPU: "8",
                    ECU: "26",
                    memoryGiB: "122",
                    storageGB: "1 x 470 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.98"
                        }
                    }]
                }, {
                    size: "f1.16xlarge",
                    vCPU: "64",
                    ECU: "188",
                    memoryGiB: "976",
                    storageGB: "4 x 940 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "15.84"
                        }
                    }]
                }]
            }, {
                type: "hiMemCurrentGen",
                sizes: [{
                    size: "x1.16xlarge",
                    vCPU: "64",
                    ECU: "174.5",
                    memoryGiB: "976",
                    storageGB: "1 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "8.003"
                        }
                    }]
                }, {
                    size: "x1.32xlarge",
                    vCPU: "128",
                    ECU: "349",
                    memoryGiB: "1952",
                    storageGB: "2 x 1920 SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "16.006"
                        }
                    }]
                }, {
                    size: "r4.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.16"
                        }
                    }]
                }, {
                    size: "r4.xlarge",
                    vCPU: "4",
                    ECU: "13.5",
                    memoryGiB: "30.5",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.319"
                        }
                    }]
                }, {
                    size: "r4.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.638"
                        }
                    }]
                }, {
                    size: "r4.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.277"
                        }
                    }]
                }, {
                    size: "r4.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "2.554"
                        }
                    }]
                }, {
                    size: "r4.16xlarge",
                    vCPU: "64",
                    ECU: "195",
                    memoryGiB: "488",
                    storageGB: "ebsonly",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "5.107"
                        }
                    }]
                }]
            }, {
                type: "storageCurrentGen",
                sizes: [{
                    size: "i3.large",
                    vCPU: "2",
                    ECU: "7",
                    memoryGiB: "15.25",
                    storageGB: "1 x 475 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.188"
                        }
                    }]
                }, {
                    size: "i3.xlarge",
                    vCPU: "4",
                    ECU: "13",
                    memoryGiB: "30.5",
                    storageGB: "1 x 950 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.376"
                        }
                    }]
                }, {
                    size: "i3.2xlarge",
                    vCPU: "8",
                    ECU: "27",
                    memoryGiB: "61",
                    storageGB: "1 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.752"
                        }
                    }]
                }, {
                    size: "i3.4xlarge",
                    vCPU: "16",
                    ECU: "53",
                    memoryGiB: "122",
                    storageGB: "2 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.504"
                        }
                    }]
                }, {
                    size: "i3.8xlarge",
                    vCPU: "32",
                    ECU: "99",
                    memoryGiB: "244",
                    storageGB: "4 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.008"
                        }
                    }]
                }, {
                    size: "i3.16xlarge",
                    vCPU: "64",
                    ECU: "200",
                    memoryGiB: "488",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.016"
                        }
                    }]
                }, {
                    size: "i3.metal",
                    vCPU: "72",
                    ECU: "208",
                    memoryGiB: "512",
                    storageGB: "8 x 1900 NVMe SSD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.016"
                        }
                    }]
                }, {
                    size: "d2.xlarge",
                    vCPU: "4",
                    ECU: "14",
                    memoryGiB: "30.5",
                    storageGB: "3 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "0.828"
                        }
                    }]
                }, {
                    size: "d2.2xlarge",
                    vCPU: "8",
                    ECU: "28",
                    memoryGiB: "61",
                    storageGB: "6 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "1.656"
                        }
                    }]
                }, {
                    size: "d2.4xlarge",
                    vCPU: "16",
                    ECU: "56",
                    memoryGiB: "122",
                    storageGB: "12 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "3.312"
                        }
                    }]
                }, {
                    size: "d2.8xlarge",
                    vCPU: "36",
                    ECU: "116",
                    memoryGiB: "244",
                    storageGB: "24 x 2000 HDD",
                    valueColumns: [{
                        name: "linux",
                        prices: {
                            USD: "6.624"
                        }
                    }]
                }]
            }]
        }]
    }
};