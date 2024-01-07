import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment18 = {
    id: 18,
    name: 'CSE-RA-01-16 ACMV Manintenance (2022)',
    process: {
        id: 18,
        name: 'ACMV Maintenance',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-16 / Rev 01',
    raMembers: [
        {
            id: 52,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 53,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 54,
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
            name: 'Switch off the power supply',
            hazards: [
                {
                    id: 168,
                    name: "Contact with live/exposed wire (Bad insulation)",
                    riskEvaluation: {
                        id: 168,
                        possiblePollutionHealthAffection: "Electrical shock, Electrocution / possibly fatal",
                        existingImpactControls: [
                            "Ensure Lockout Tagout procedure.",
                            "Perform by trained and competent electrician only."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 168,
                        additionalControls: [
                            "Regular toolbox meeting conducted & discussed on electrical safety"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },                
            ]
        },
        {
            id: -1,
            name: 'Remove the cover of air-con system',
            hazards: [
                {
                    id: 169,
                    name: "Slips of tools (Wrong tools)",
                    riskEvaluation: {
                        id: 169,
                        possiblePollutionHealthAffection: "Contusion, Laceration, hand injury",
                        existingImpactControls: [
                            "Proper use of PPE – safety gloves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 169,
                        additionalControls: [
                            "Regular toolbox meeting conducted"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 170,
                    name: "Limited working space can cause trip and fall",
                    riskEvaluation: {
                        id: 170,
                        possiblePollutionHealthAffection: "Contusion, Laceration, Multiple injury",
                        existingImpactControls: [
                            "Proper housekeeping.",
                            "Proper work platform / space."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 170,
                        additionalControls: [
                            "Regular inspection to ensure the existing control is valid"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 171,
                    name: "Working & fall from height",
                    riskEvaluation: {
                        id: 171,
                        possiblePollutionHealthAffection: "Serious injury / fracture / possible fatal",
                        existingImpactControls: [
                            "Safety harness.",
                            "Use firm A-ladder with additional support from another staff."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 171,
                        additionalControls: [
                            "Daily briefing & check PPE, equipment before starting work.",
                            "Replace A-Frame ladder with approved scaffolds."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },                  
            ]
        },
        {
            id: -1,
            name: 'Filter Fan/ Aircon Cleaning works',
            hazards: [
                {
                    id: 172,
                    name: "Flying foreign particles",
                    riskEvaluation: {
                        id: 172,
                        possiblePollutionHealthAffection: "Eye irritation",
                        existingImpactControls: [
                            "Proper use of PPE – safety glass and mask"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 172,
                        additionalControls: [
                            "Regular inspection to ensure the existing control is valid"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 173,
                    name: "Fumes from Chemicals",
                    riskEvaluation: {
                        id: 173,
                        possiblePollutionHealthAffection: "Breathing / respiratory problem",
                        existingImpactControls: [
                            "Worker must wear the nose mask.",
                            "MSDS available."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 173,
                        additionalControls: [
                            "Provide proper mechanical ventilation to the workplace if necessary."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 174,
                    name: "Chemical exposure to skin/eye",
                    riskEvaluation: {
                        id: 174,
                        possiblePollutionHealthAffection: "Skin/eye irritation to working personnel",
                        existingImpactControls: [
                            "Worker must wear the hand gloves / safety goggles"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 174,
                        additionalControls: [
                            "Regular inspection to ensure the existing control is valid"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }                                  
            ]
        },
        {
            id: -1,
            name: 'Re-install the dismantled parts.',
            hazards: [
                {
                    id: 175,
                    name: "Slips of tools (Wrong tools)",
                    riskEvaluation: {
                        id: 175,
                        possiblePollutionHealthAffection: "Contusion, Laceration, hand injury",
                        existingImpactControls: [
                            "Proper use of PPE – safety gloves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 175,
                        additionalControls: [
                            "Regular toolbox meeting conducted"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }            
            ]
        },
        {
            id: -1,
            name: 'Check system & test run',
            hazards: [
                {
                    id: 176,
                    name: "Contact with live/exposed wire (Bad insulation)",
                    riskEvaluation: {
                        id: 176,
                        possiblePollutionHealthAffection: "Electrical shock, Electrocution / possibly fatal",
                        existingImpactControls: [
                            "Ensure Lockout Tagout procedure.",
                            "Perform by trained and competent electrician only."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 176,
                        additionalControls: [
                            "Regular toolbox meeting conducted & discussed on electrical safety"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Handling of aircon parts, materials',
            hazards: [
                {
                    id: 177,
                    name: "Heavy bulk objects",
                    riskEvaluation: {
                        id: 177,
                        possiblePollutionHealthAffection: "Drop to feet causing contusion / bruises",
                        existingImpactControls: [
                            "Wear safety shoes.",
                            "Carry heavy loads with 2 personnel."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 177,
                        additionalControls: [
                            "Regular inspection to ensure the existing control is valid"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 178,
                    name: "Sharp edges",
                    riskEvaluation: {
                        id: 178,
                        possiblePollutionHealthAffection: "Cuts / lacerations to worker",
                        existingImpactControls: [
                            "Wrap up sharp edges"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 178,
                        additionalControls: [
                            "Regular toolbox meeting conducted"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }                          
            ]
        }
    ]
}
