import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment28 = {
    id: 28,
    name: 'CSE-RA-03-03 Use of Scaffold (2022)',
    process: {
        id: 28,
        name: 'Use of Scaffold',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-03-03 / Rev 01',
    raMembers: [
        {
            id: 81,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 82,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 83,
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
            name: 'Erection of scaffolds',
            hazards: [
                {
                    id: 296,
                    name: "Unstable Ground",
                    riskEvaluation: {
                        id: 296,
                        possiblePollutionHealthAffection: "Serious physical injury",
                        existingImpactControls: [
                            "Ensure correct size sole boards are placed under all standards to distribute weight.",
                            "Ensure the scaffold is tagged 'unsafe' until erection is complete."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 296,
                        additionalControls: [
                            "Only workers with scaffold erector certificates to erect the scaffold."
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
                    id: 297,
                    name: "Falling",
                    riskEvaluation: {
                        id: 297,
                        possiblePollutionHealthAffection: "Physical injury",
                        existingImpactControls: [
                            "Proper PPE (Safety harness) must be worn."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 297,
                        additionalControls: [
                            "Tool-Box Safety briefing to be conducted regularly."
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
                }
            ]
        },
        {
            id: -1,
            name: 'Using of scaffold',
            hazards: [
                {
                    id: 298,
                    name: "Falling off scaffold",
                    riskEvaluation: {
                        id: 298,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Guardrails must be installed on unprotected/open side of the scaffold.",
                            "Proper PPE must be worn at all times.",
                            "Scaffolding to be checked by Scaffold Supervisor weekly.",
                            "Barricade affected area to keep out unauthorized personnel."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 298,
                        additionalControls: [
                            "Users informed during briefing to anchor their safety harness to a secure anchorage point, such as a lifeline with a fall arrester."
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
                    id: 299,
                    name: "Falling objects",
                    riskEvaluation: {
                        id: 299,
                        possiblePollutionHealthAffection: "Major injuries to workers below scaffolding",
                        existingImpactControls: [
                            "Install toe boards.",
                            "Use proper containers to transport tools/materials.",
                            "Proper housekeeping."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 299,
                        additionalControls: [
                            "Supervisor/Scaffold Supervisor to ensure regular review of existing control measures."
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
                    id: 300,
                    name: "Trip and fall on the same level",
                    riskEvaluation: {
                        id: 300,
                        possiblePollutionHealthAffection: "Minor bruises, sprains",
                        existingImpactControls: [
                            "Proper housekeeping.",
                            "Safety shoes with sufficient grips.",
                            "Proper routing of cables on scaffold.",
                            "Workers to hold onto guardrails when traversing on the scaffold."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 300,
                        additionalControls: [
                            "Supervisor/Scaffold Supervisor to ensure regular review of existing control measures."
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
                    id: 301,
                    name: "Lack of proper access/egress",
                    riskEvaluation: {
                        id: 301,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Weekly inspection by competent scaffold supervisor.",
                            "Workers not to use the scaffold and report damage to scaffold access/egress to the supervisor immediately.",
                            "Scaffold to be erected by competent scaffold workers."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 301,
                        additionalControls: [
                            "Supervisor/Scaffold Supervisor to ensure regular review of existing control measures."
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
                    id: 302,
                    name: "Obstructed access/egress",
                    riskEvaluation: {
                        id: 302,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Proper housekeeping.",
                            "Proper routing of cables on scaffold."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 302,
                        additionalControls: [
                            "Supervisor/Scaffold Supervisor to ensure regular review of existing control measures."
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
                    id: 303,
                    name: "Poorly/Badly erected scaffold",
                    riskEvaluation: {
                        id: 303,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Weekly inspection by competent scaffold supervisor.",
                            "Workers not to use the scaffold and report damage/shaky structure to the supervisor immediately.",
                            "Scaffold to be erected by competent scaffold workers."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 303,
                        additionalControls: [
                            "Supervisor/Scaffold Supervisor to ensure regular review of existing control measures."
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
                    id: 304,
                    name: "Overloading of scaffold",
                    riskEvaluation: {
                        id: 304,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Display scaffold SWL (Safe Working Load) and Number of persons allowed.",
                            "Induction training on scaffold usage."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 304,
                        additionalControls: [
                            "Supervisor/Scaffold Supervisor to ensure regular review of existing control measures."
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
                    id: 305,
                    name: "Collapse of scaffold",
                    riskEvaluation: {
                        id: 305,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Weekly inspection by competent scaffold supervisor.",
                            "Ad-hoc scaffold check after substantial scaffold alteration or event which can affect scaffold stability by competent scaffold supervisor.",
                            "Workers not to use the scaffold and report damage to the scaffold to the supervisor immediately.",
                            "Scaffold to be erected by competent scaffold workers."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 305,
                        additionalControls: [
                            "Supervisor/Scaffold Supervisor to ensure regular review of existing control measures."
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
                    id: 306,
                    name: "Lightning strike, bad weather",
                    riskEvaluation: {
                        id: 306,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Ad-hoc scaffold check by competent scaffold supervisor after bad weather.",
                            "No working/using of scaffold during thunderstorms or strong wind."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 306,
                        additionalControls: [
                            "Supervisor/Scaffold Supervisor to ensure regular review of existing control measures."
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
                }
            ]
        },
        {
            id: -1,
            name: 'Dismantle of scaffold',
            hazards: [
                {
                    id: 307,
                    name: "Overturning",
                    riskEvaluation: {
                        id: 307,
                        possiblePollutionHealthAffection: "Physical injury",
                        existingImpactControls: [
                            "Do not remove lower ties until the scaffold is dismantled down to that level."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 307,
                        additionalControls: [
                            "Buddy system."
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
                    id: 308,
                    name: "Falling debris",
                    riskEvaluation: {
                        id: 308,
                        possiblePollutionHealthAffection: "Physical injury",
                        existingImpactControls: [
                            "Ensure the work platform is clear prior to the dismantle of the scaffold."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 308,
                        additionalControls: [
                            "Ensure PPE are worn at all times."
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