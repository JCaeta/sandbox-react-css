import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment24 = {
    id: 24,
    name: 'CSE-RA-02-02 Transportation of Materials, Equipment (2022)',
    process: {
        id: 24,
        name: 'Transporting of Materials/Equipments',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-02-02 / Rev 01',
    raMembers: [
        {
            id: 70,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 71,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 72,
            name: 'Ler Shi Er',
            isLeader: false,
            signature: signature3,
            designations: [],
        },
    ],
    approval: {
        id: 1,
        approverPerson: {
            id: 1,
            name: 'Lee Hock Chye',
            designations: ['Director'],
            signature: signature4,
        },
        date: '01/05/2022',
        name: 'Vicent Lee',
    },
    originalAssessmentDate: '02/06/2020',
    lastReviewDate: '01/05/2022',
    nextReviewDate: '30/04/2025',
    raTasks: [],
    workActivities: [
        {
            id: -1,
            name: 'Transporting of Material (Operation of Vehicle)',
            hazards: [
                {
                    id: 220,
                    name: "Collision onto pedestrians/client’s property",
                    riskEvaluation: {
                        id: 220,
                        possiblePollutionHealthAffection: "Injury/death to person(s)/damage to property",
                        existingImpactControls: [
                            "Only qualified driver with a valid driving license",
                            "Vehicle is fitted with side mirrors & reversing hazard lights/sound",
                            "Drive at 15-20km/hr in the compound, reverse at 5 km/hr",
                            "Lower window panel to check if the rear mirror view is blocked during reversal"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 220,
                        additionalControls: [
                            "Request for help to keep an eye out if possible",
                            "Apply handbrake after parking"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 221,
                    name: "Toppling of materials from vehicle",
                    riskEvaluation: {
                        id: 221,
                        possiblePollutionHealthAffection: "Body injury, bruises",
                        existingImpactControls: [
                            "To comply with the manufacturer’s recommendation on the transportation/loading of materials"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 221,
                        additionalControls: [
                            "Ensure equipment/materials are stored/packed neatly"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 222,
                    name: "Movement of material and equipment during traveling",
                    riskEvaluation: {
                        id: 222,
                        possiblePollutionHealthAffection: "Physical Injury to worker and other road users",
                        existingImpactControls: [
                            "Secure materials and equipment with lashing materials or guards",
                            "Materials in vehicles to be stacked neatly"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 222,
                        additionalControls: [
                            "Constant maintenance of all lashing materials and metal guards",
                            "Make a final check at all lashing points before travel"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 223,
                    name: "Failed to follow traffic rules",
                    riskEvaluation: {
                        id: 223,
                        possiblePollutionHealthAffection: "Injury/fatal accident for worker/people",
                        existingImpactControls: [
                            "Routine check by respective supervisor on traffic rules violation",
                            "Use of safety belt at all times while traveling in the vehicle"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 223,
                        additionalControls: [
                            "Strict instructions to the driver to abide by traffic rules & regulations",
                            "Appoint a qualified driver"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },                
                {
                    id: 224,
                    name: "Poor visibility due to heavy rain",
                    riskEvaluation: {
                        id: 224,
                        possiblePollutionHealthAffection: "Serious injury/fatality",
                        existingImpactControls: [
                            "Keep a greater distance to the car in front",
                            "Reduce speed",
                            "Turn on the lights",
                            "Ensure vehicle wipers are functioning"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 224,
                        additionalControls: [
                            "Regular reminder on safe work procedures during toolbox meetings"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 225,
                    name: "Lower back pain and disorders of joints and muscles",
                    riskEvaluation: {
                        id: 225,
                        possiblePollutionHealthAffection: "Musculo-skeletal/repetitive strain injuries",
                        existingImpactControls: [
                            "Additional cushion added to the seat as and when required"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 225,
                        additionalControls: [
                            "Regular review of existing risk control"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 226,
                    name: "Continuous driving",
                    riskEvaluation: {
                        id: 226,
                        possiblePollutionHealthAffection: "Fatigue",
                        existingImpactControls: [
                            "Provision of sufficient rest",
                            "There is no pay by trip or allowance"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 3,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 226,
                        additionalControls: [
                            "Regular review of existing control measures"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 227,
                    name: "Slippery & wet road",
                    riskEvaluation: {
                        id: 227,
                        possiblePollutionHealthAffection: "Serious injury/fatality",
                        existingImpactControls: [
                            "Keep a greater distance to the car in front",
                            "Reduce speed"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 227,
                        additionalControls: [
                            "Regular reminder on SWP during toolbox meetings"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 228,
                    name: "Parked vehicle slide down slope",
                    riskEvaluation: {
                        id: 228,
                        possiblePollutionHealthAffection: "Physical injury to personnel",
                        existingImpactControls: [
                            "Park on level ground wherever possible",
                            "Use chocks if necessary"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 228,
                        additionalControls: [
                            "Ensure the car is stationary after parking",
                            "Regular reminder on SWP during toolbox meetings"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                id: 229,
                    name: "Consumption of alcohol before driving",
                    riskEvaluation: {
                        id: 229,
                        possiblePollutionHealthAffection: "Serious injury/Fatality",
                        existingImpactControls: [
                            "Strictly NO drinking during working hours",
                            "Regular enforcement on safety rules and regulations"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        }
                    },
                    riskControl: {
                        id: 229,
                        additionalControls: [
                            "Regular review of existing control measures"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 230,
                    name: "Insufficient light during the night",
                    riskEvaluation: {
                        id: 230,
                        possiblePollutionHealthAffection: "Serious injury/Fatality",
                        existingImpactControls: [
                            "Ensure vehicle's headlights are working well"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 230,
                        additionalControls: [
                            "Regular inspection of the vehicle"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 231,
                    name: "Over speed",
                    riskEvaluation: {
                        id: 231,
                        possiblePollutionHealthAffection: "Serious injury/Fatality",
                        existingImpactControls: [
                            "Follow speed limit",
                            "There is no pay by trip or allowance"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 231,
                        additionalControls: [
                            "Regular enforcement on safety rules and regulations among drivers"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 232,
                    name: "Unauthorised parking",
                    riskEvaluation: {
                        id: 232,
                        possiblePollutionHealthAffection: "Vehicular accidents causing injuries to drivers and pedestrians",
                        existingImpactControls: [
                            "Lorry must be parked on the loading bay",
                            "Get assistance from the person in-charge"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 232,
                        additionalControls: [
                            "Regular review of existing risk control"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Walking along pathway',
            hazards: [
                {
                    id: 233,
                    name: "Pathway obstructed posing tripping hazard",
                    riskEvaluation: {
                        id: 233,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "Pathways are kept clear of obstruction at all times",
                            "Proper workplace layout"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 233,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Driver/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 234,
                    name: "Narrow Walkway leading to human collision",
                    riskEvaluation: {
                        id: 234,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "All personnel shall take extra precautions"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 234,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Driver / Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        }
    ]
}