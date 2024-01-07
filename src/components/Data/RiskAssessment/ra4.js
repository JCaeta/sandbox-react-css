import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment4 = {
    id: 4,
    name: 'CSE-RA-01-03 Installation of Light Fitting (2022)',
    process: {
        id: 4,
        name: 'Installation of Light Fitting',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-03 / Rev 01',
    raMembers: [
        {
            id: 10, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 11, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 12, 
            name: "Ler Shi Er",
            employeeId: 52,
            isLeader: false,
            signature: signature3,
            designation: []
        },
    ],
    approval: {
        id: 1,
        approverPerson: {
            id: 1,
            name: 'Lee Hock Chye',
            designations: ['Director'],
            signature: signature4
        },
        date: '01/05/2022',
        name: 'Vincent Lee',
    },
    originalAssessmentDate: '02/06/2020',
    lastReviewDate: '01/05/2022',
    nextReviewDate: '30/04/2025',
    raTasks: [
    ],
    workActivities: [
        {
            id: 14,
            name: 'OFF main power for all electrical works in work area',
            hazards: [
                {
                    id: 33,
                    name: "Electrical shock",
                    riskEvaluation: {
                        id: 33,
                        possiblePollutionHealthAffection: "Electrocution due to electrical shock which may lead to fatal injuries",
                        existingImpactControls: [
                            "Wear proper PPE such as electrical resistance hand gloves",
                            "Ensure to check for any residual of electricity using an electrical test-pen"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 33,
                        additionalControls: [
                            "Use LOTO procedures"
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
            id: 15,
            name: 'Removal of all light fittings and lightings – Working On Height',
            hazards: [
                {
                    id: 34,
                    name: "Falling from height / Ladder",
                    riskEvaluation: {
                        id: 34,
                        possiblePollutionHealthAffection: "Fall Injuries leading to sprains/fractures",
                        existingImpactControls: [
                            "Ensure that the ladder is in good working condition",
                            "Ensure the ladder is used on even and solid ground surfaces",
                            "Ensure the worker is adopting safe working procedures by following the SWP – Use Of Ladder"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 34,
                        additionalControls: [
                            "Regular review of existing risk control measures"
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
            id: 16,
            name: 'Removal of lightings using hand tools',
            hazards: [
                {
                    id: 35,
                    name: "Accidental contact with electricity",
                    riskEvaluation: {
                        id: 35,
                        possiblePollutionHealthAffection: "Electric shock to personnel – physical injury",
                        existingImpactControls: [
                            "Disconnect battery/connection before working on the electrical system",
                            "Safe working procedure when coming in contact with the live system"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 35,
                        additionalControls: [
                            "Regular toolbox meeting conducted & discussed on electrical safety"
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
                    id: 36,
                    name: "Sharp objects",
                    riskEvaluation: {
                        id: 36,
                        possiblePollutionHealthAffection: "Cuts to body/limbs",
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
                        id: 36,
                        additionalControls: [
                            "Conduct toolbox meeting regularly/Training on proper use of PPE"
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
                    id: 37,
                    name: "Tools fall from height by mis-handling",
                    riskEvaluation: {
                        id: 37,
                        possiblePollutionHealthAffection: "Foot injury (abrasions/contusions) to personnel",
                        existingImpactControls: [
                            "Ensure the wearing of safety shoe"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 37,
                        additionalControls: [
                            "Conduct toolbox meeting regularly/Training on proper use of PPE"
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
                    id: 38,
                    name: "Continuous work",
                    riskEvaluation: {
                        id: 38,
                        possiblePollutionHealthAffection: "Fatigue to the worker (mental well-being)",
                        existingImpactControls: [
                            "Ensuring sufficient rest/shift management"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 3,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 38,
                        additionalControls: [
                            "Buddy system",
                            "To look out for signs of staff not in the right frame of mind or tiredness."
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
                    id: 39,
                    name: "Heat Stress",
                    riskEvaluation: {
                        id: 39,
                        possiblePollutionHealthAffection: "Dehydration/ill health to worker",
                        existingImpactControls: [
                            "Provision of sufficient rest",
                            "Ensure worker replenishes water during rest."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 3,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 39,
                        additionalControls: [
                            "Regular review of existing risk control measures"
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
                }                
            ]
        },
        {
            id: 16,
            name: 'Removal of electrical wirings',
            hazards: [
                {
                    id: 40,
                    name: "Electrical shock",
                    riskEvaluation: {
                        id: 40,
                        possiblePollutionHealthAffection: "Electrocution due to electrical shock which may lead to fatal injuries",
                        existingImpactControls: [
                            "Wear proper PPE such as electrical resistance hand gloves",
                            "Ensure to check for any residual of electricity using an electrical test-pen"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 40,
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
                    id: 41,
                    name: "Sharp edges",
                    riskEvaluation: {
                        id: 41,
                        possiblePollutionHealthAffection: "Cuts/Hand Injuries (contusions)",
                        existingImpactControls: [
                            "Wear proper PPE such as hand gloves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 41,
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
            id: 17,
            name: 'Manual Handling',
            hazards: [
                {
                    id: 42,
                    name: "Contact with Sharp/pointed edges",
                    riskEvaluation: {
                        id: 42,
                        possiblePollutionHealthAffection: "Cuts to person directly or indirectly involved in the operation",
                        existingImpactControls: [
                            "All workers were briefed on safe work procedures for manual handling.",
                            "Workers need to wear hand gloves to prevent hand injury."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 42,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
                    id: 43,
                    name: "Handling of Heavy/bulky object",
                    riskEvaluation: {
                        id: 43,
                        possiblePollutionHealthAffection: "Musculoskeletal injuries/person directly involved in the operation",
                        existingImpactControls: [
                            "Provision of trolley to carry the material",
                            "Request for help from fellow workers."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 43,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
            id: 18,
            name: 'Installation of Electrical Control Panel – Drilling Operation',
            hazards: [
                {
                    id: 44,
                    name: "Sharp objects",
                    riskEvaluation: {
                        id: 44,
                        possiblePollutionHealthAffection: "Cuts, laceration on limbs/person directly or indirectly involved in the operation",
                        existingImpactControls: [
                            "Workers need to wear hand gloves to prevent hand injury."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 44,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
                    id: 45,
                    name: "Tools or object fall from height by mishandling",
                    riskEvaluation: {
                        id: 45,
                        possiblePollutionHealthAffection: "Foot Contusions to personnel",
                        existingImpactControls: [
                            "Handle with care.",
                            "Wear the safety shoe."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 45,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
                    id: 46,
                    name: "Contact with damaged wires",
                    riskEvaluation: {
                        id: 46,
                        possiblePollutionHealthAffection: "Electric Shock to users which may result in fatality to personnel",
                        existingImpactControls: [
                            "All electric cables are maintained in good condition and free from defects.",
                            "Regular checking of electrical cables before use"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 46,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
            id: 19,
            name: 'Electrical cable & fittings installation',
            hazards: [
                {
                    id: 47,
                    name: "Live wire",
                    riskEvaluation: {
                        id: 47,
                        possiblePollutionHealthAffection: "Electric Shock to users which may result in fatality to personnel",
                        existingImpactControls: [
                            "All wires to be tested with Test-Pen for live cables before commencing work."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 47,
                        additionalControls: [
                            "Work in a buddy system"
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
                    id: 48,
                    name: "Broken Tools",
                    riskEvaluation: {
                        id: 48,
                        possiblePollutionHealthAffection: "Cuts/lacerations to body/limbs",
                        existingImpactControls: [
                            "Users shall check tools for damages and replace damaged tools.",
                            "Use of proper PPE"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 48,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
                    id: 49,
                    name: "Fall from height",
                    riskEvaluation: {
                        id: 49,
                        possiblePollutionHealthAffection: "Potential for Serious Injury/fatal injury to person (worker/employee)",
                        existingImpactControls: [
                            "All workers were briefed on safe work procedures for use of ladder.",
                            "Workers must be medically fit when working on height.",
                            "Provision of Proper PPE"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 49,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
                    id: 50,
                    name: "Falling object",
                    riskEvaluation: {
                        id: 50,
                        possiblePollutionHealthAffection: "Serious contusions to body upon contact",
                        existingImpactControls: [
                            "Use of tool lanyards – all working tools and equipment/items to be secured from dropping.",
                            "Cordon off the working area and display warning sign"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 50,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
            id: 20,
            name: 'Housekeeping',
            hazards: [
                {
                    id: 51,
                    name: "Falling object / Tripping",
                    riskEvaluation: {
                        id: 51,
                        possiblePollutionHealthAffection: "Sprains/fractures",
                        existingImpactControls: [
                            "All waste material to be removed from the site",
                            "Unused tools to be kept in a toolbox",
                            "Materials should be stacked properly",
                            "Chin strap to secure safety helmet.",
                            "Follow Safe Work Procedure"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 51,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
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
        }
    ]
}
