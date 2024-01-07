import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment22 = {
    id: 22,
    name: 'CSE-RA-03-01 Working on Ladder (2022)',
    process: {
        id: 22,
        name: 'Working on Ladder',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-03-01 / Rev 01',
    raMembers: [
        {
            id: 64,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 65,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 66,
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
            name: 'Working on Ladders',
            hazards: [
                {
                    id: 204,
                    name: "Fall from height",
                    riskEvaluation: {
                        id: 204,
                        possiblePollutionHealthAffection: "Serious injury/fatal injury to worker or passer-by",
                        existingImpactControls: [
                            "Ensure the ladder is in good condition before use",
                            "Teammate to hold the ladder at ground level while the worker is working on a ladder",
                            "'A' frame ladder must be fully extended and should be placed on firm & even ground to work on it",
                            "Maintain constant 3-point contact",
                            "Last 2 rungs of the ladder not to be used",
                            "Cordon off the working area to prevent authorized access",
                            "Workers must be medically fit when working on height",
                            "Provision of Proper PPE"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 204,
                        additionalControls: [
                            "Do not authorize the use of a ladder for working height > 3m",
                            "Do not obstruct any access way by ladder",
                            "Do not use 'A' frame ladder near floor opening",
                            "If the work is being carried out at height for extended periods, put up signages, barricades to warn others about the overhead works",
                            "Use a ladder of a suitable height to prevent overreaching"
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
                    id: 205,
                    name: "Overloading resulting in ladder breakdown",
                    riskEvaluation: {
                        id: 205,
                        possiblePollutionHealthAffection: "Fatal injury",
                        existingImpactControls: [
                            "Only one person should be standing on the A-frame ladder",
                            "Ensure ladder is in good condition before use"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 205,
                        additionalControls: [
                            "Workers to use proper PPE (safety harness) when working at height and secure to an anchor point"
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
                    id: 206,
                    name: "Uneven ground",
                    riskEvaluation: {
                        id: 206,
                        possiblePollutionHealthAffection: "Fatal injury to worker",
                        existingImpactControls: [
                            "Ensure the ladder is used on a flat or even ground. Use steel plate if necessary",
                            "Re-position the ladder to a flat surface",
                            "Another worker to hold the ladder firmly"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 206,
                        additionalControls: [
                            "No operation allowed if on a slope",
                            "Workers to use proper PPE (safety harness) when working at height and secure to an anchor point"
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
                    id: 207,
                    name: "Falling object",
                    riskEvaluation: {
                        id: 207,
                        possiblePollutionHealthAffection: "Serious injury to teammate or passer-by",
                        existingImpactControls: [
                            "Cordon off the working area to prevent authorized access",
                            "Regular reminder on SWP"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 207,
                        additionalControls: [
                            "Safety briefing before the start of work"
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
                    id: 208,
                    name: "Damaged Ladders",
                    riskEvaluation: {
                        id: 208,
                        possiblePollutionHealthAffection: "Fatal Accident or Major Fracture to workers",
                        existingImpactControls: [
                            "Regular maintenance of ladders",
                            "Inspection of ladders before each use"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        }
                    },
                    riskControl: {
                        id: 208,
                        additionalControls: [
                            "Remove damaged ladder from use",
                            "Workers do not repair the ladder by themselves"
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
                    id: 209,
                    name: "Metal ladders contact with live electrical equipment",
                    riskEvaluation: {
                        id: 209,
                        possiblePollutionHealthAffection: "Fatal Accident to workers due to electrocution",
                        existingImpactControls: [
                            "All workers were briefed on SWP",
                            "Create awareness through induction training and daily briefing",
                            "Regular inspection of work areas"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        }
                    },
                    riskControl: {
                        id: 209,
                        additionalControls: [
                            "Safety briefing before the start of work"
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
        }
    ]
}
