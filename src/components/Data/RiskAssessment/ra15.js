import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment15 = {
    id: 15,
    name: "CSE-RA-01-11 Hacking Works (2022)",
    process: {
        id: 15,
        name: "Hacking works",
        location: "Workplace"
    },
    referenceNumber: "CSE-RA-01-11 / Rev 01",
    raMembers: [
        {
        id: 43,
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
        id: 44,
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
        id: 45,
            name: "Ler Shi Er",
            employeeId: 52,
            isLeader: false,
            signature: signature3,
            designation: []
        }
    ],
    approval: {
        id: 1,
        approverPerson: {
            id: 1,
            name: "Lee Hock Chye",
            designations: ["Director"],
            signature: signature4
        },
        date: "01/05/2022",
        name: "Vicent Lee"
    },
    originalAssessmentDate: "02/06/2020",
    lastReviewDate: "01/05/2022",
    nextReviewDate: "30/04/2025",
    raTasks: [],
    workActivities: [
        {
        id: -1,
            name: 'Hacking using electrical tools & machinery',
            hazards: [
                {
                    id: 142,
                    name: "Not insulated / exposed parts",
                    riskEvaluation: {
                        id: 142,
                        possiblePollutionHealthAffection: "Electrocution / possible fatal",
                        existingImpactControls: [
                            "All electrical tools to be checked that there is no exposed parts",
                            "Protected by RCCB"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 142,
                        additionalControls: [
                            "Regular toolbox meeting conducted & discussed on electrical safety",
                            "Training on electrical safety"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 143,
                    name: "Wire on floor",
                    riskEvaluation: {
                        id: 143,
                        possiblePollutionHealthAffection: "Trip and fall causing sprains / bruises",
                        existingImpactControls: [
                            "Good housekeeping. Minimal movement allowed at working area."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 143,
                        additionalControls: [
                            "Regular toolbox meeting conducted & discussed on electrical safety / Training on electrical safety"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 144,
                    name: "Electrical Shock",
                    riskEvaluation: {
                        id: 144,
                        possiblePollutionHealthAffection: "Electric shock to personnel – possibly fatal",
                        existingImpactControls: [
                            "Disconnect battery / connection before working on the electrical system",
                            "Wear Proper PPE while working on Electrical System"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 144,
                        additionalControls: [
                            "Regular toolbox meeting conducted & discussed on electrical safety",
                            "Provision of RCCB"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 145,
                    name: "Sharp Objects",
                    riskEvaluation: {
                        id: 145,
                        possiblePollutionHealthAffection: "Cuts / lacerations",
                        existingImpactControls: [
                            "Wear the necessary PPE (Hand gloves)"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 145,
                        additionalControls: [
                            "Regular review of existing risk control measures"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 146,
                    name: "Tools fall from height by mis-handling",
                    riskEvaluation: {
                        id: 146,
                        possiblePollutionHealthAffection: "Contusions / bruises",
                        existingImpactControls: [
                            "Wear the hand gloves/ safety shoe refer"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 146,
                        additionalControls: [
                            "Regular review of existing risk control measures"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }
            ]
        },
        {
        id: -1,
            name: 'Hacking works',
            hazards: [
                {
                    id: 147,
                    name: "Generation of Dust",
                    riskEvaluation: {
                        id: 147,
                        possiblePollutionHealthAffection: "Breathing / respiratory problem",
                        existingImpactControls: [
                            "Wear appropriate PPE e.g., dust mask, face shield"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 3,
                            irpn: 9
                        }
                    },
                    riskControl: {
                        id: 147,
                        additionalControls: [
                            "Barricade / isolate work zone and provide warning notice",
                            "Apply water to reduce dust pollution"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                id: 148,
                    name: "Flying Particles",
                    riskEvaluation: {
                    id: 148,
                        possiblePollutionHealthAffection: "Cuts / bruises to face and eyes",
                        existingImpactControls: [
                            "Safety goggles must be worn at all times"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        }
                    },
                    riskControl: {
                    id: 148,
                        additionalControls: [
                            "Regular review of existing risk control measures"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                id: 149,
                    name: "Continuous Work",
                    riskEvaluation: {
                    id: 149,
                        possiblePollutionHealthAffection: "Fatigue to the worker",
                        existingImpactControls: [
                            "Work with a group of people",
                            "Rotation of worker to do the hacking",
                            "Provision of sufficient rest / shift management"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                    id: 149,
                        additionalControls: [
                            "Regular review of existing risk control measures",
                            "Provide breaks in between"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },  
                {
                id: 150,
                    name: "Heat Stress",
                    riskEvaluation: {
                    id: 150,
                        possiblePollutionHealthAffection: "Dehydration / ill health to worker / heat stroke / possibly fatal",
                        existingImpactControls: [
                            "Provision of sufficient rest",
                            "Encourage worker to drink more water",
                            "Wear hand gloves"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                    id: 150,
                        additionalControls: [
                            "Regular review of existing risk control measures"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },                
                {
                id: 151,
                    name: "Waste Collection and Handling",
                    riskEvaluation: {
                    id: 151,
                        possiblePollutionHealthAffection: "Trip and fall causing sprains / bruises",
                        existingImpactControls: [
                            "Daily waste removal"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                    id: 151,
                        additionalControls: [
                            "Housekeeping to ensure no protruding items"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                id: 152,
                    name: "Generation of Noise",
                    riskEvaluation: {
                    id: 152,
                        possiblePollutionHealthAffection: "Noise-induced deafness",
                        existingImpactControls: [
                            "Worker must wear the ear plug"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 3,
                            irpn: 9
                        }
                    },
                    riskControl: {
                    id: 152,
                        additionalControls: [
                            "Regular toolbox meeting & discussed on the importance of Hearing Protection"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        }
    ]
}