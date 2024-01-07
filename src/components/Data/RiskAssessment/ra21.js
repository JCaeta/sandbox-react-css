import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment21 = {
    id: 21,
    name: 'CSE-RA-03-02 Use of Boom Lift & Scissor Lift (2022)',
    process: {
        id: 21,
        name: 'Use of Boom Lift & Scissor Lift',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-03-02/ Rev 01',
    raMembers: [
        {
            id: 61,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 62,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 63,
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
            name: 'Operation of Boom lift & Scissor lift',
            hazards: [
                {
                    id: 193,
                    name: "Untrained operator",
                    riskEvaluation: {
                        id: 193,
                        possiblePollutionHealthAffection: "Major Injuries/Property damage",
                        existingImpactControls: [
                            "Only trained and competent personnel to operate MEWP and control of MEWP’s keys"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 193,
                        additionalControls: [
                            "Supervisor/ WAH supervisor to ensure compliance",
                            "Regular review of existing control measures"
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
                    id: 194,
                    name: "Moving over hump/into pothole",
                    riskEvaluation: {
                        id: 194,
                        possiblePollutionHealthAffection: "Major Injuries",
                        existingImpactControls: [
                            "Operator to survey movement route",
                            "Slow speed when maneuvering over humps or into potholes",
                            "Avoid hump/pothole if possible"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 194,
                        additionalControls: [
                            "Use steel plate to cover potholes if viable",
                            "Supervisor/WAH supervisor to ensure compliance"
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
                    id: 195,
                    name: "Collision into workers and other personnel on site",
                    riskEvaluation: {
                        id: 195,
                        possiblePollutionHealthAffection: "Serious bodily injuries",
                        existingImpactControls: [
                            "Only trained operator is allowed to operate the lift",
                            "Assign banksman to provide a lookout for the operator"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 195,
                        additionalControls: [
                            "Close supervision by site foreman"
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
                    id: 196,
                    name: "Unsafe condition/Faulty safety devices (Eg: Beacon, buzzer, door, guardrail)",
                    riskEvaluation: {
                        id: 196,
                        possiblePollutionHealthAffection: "Fatal injury to worker",
                        existingImpactControls: [
                            "Perform MEWP pre-use inspection",
                            "No operating of MEWP with faulty safety device",
                            "Report to supervisor and stop use of faulty MEWP",
                            "Ensure scissor/boom lifts are inspected and certified regularly (every 6 months) by a qualified person"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 196,
                        additionalControls: [
                            "Supervisor to isolate faulty MEWP from use and inform the office to arrange for repair",
                            "Regular maintenance checks"
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
            name: 'Raising and lowering of the lift',
            hazards: [
                {
                    id: 197,
                    name: "Struck by overhead structure or obstruction",
                    riskEvaluation: {
                        id: 197,
                        possiblePollutionHealthAffection: "Serious bodily injuries",
                        existingImpactControls: [
                            "Conduct site inspection for overhead obstruction before raising MEWP",
                            "Wear safety helmets",
                            "Assign banksman to provide a lookout for the operator and activate the emergency stop"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 197,
                        additionalControls: [
                            "Regular reminders on boom lift/scissor lift safety",
                            "Close supervision"
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
            name: 'Working on lift platform',
            hazards: [
                {
                    id: 198,
                    name: "Lift toppled due to uneven ground or overloading",
                    riskEvaluation: {
                        id: 198,
                        possiblePollutionHealthAffection: "Serious bodily injuries/Death",
                        existingImpactControls: [
                            "Only trained operator is allowed to operate the lift",
                            "Steel plate provided if the ground is soft and uneven",
                            "Operate the machine on firm ground at all times",
                            "Adhere to MEWP SWL, Safe Work Load",
                            "Use proper PPE (safety helmet, safety shoes)",
                            "No using of MEWP as a material lifting device"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        }
                    },
                    riskControl: {
                        id: 198,
                        additionalControls: [
                            "Regular review of existing control measures",
                            "Do not operate lift on a slope",
                            "Do not bring unnecessary tools/material onto the lift"
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
                    id: 199,
                    name: "Overreaching",
                    riskEvaluation: {
                        id: 199,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Strictly no overreaching",
                            "Re-position MEWP such that the need for overreaching is minimal",
                            "Occupants of MEWP to be secured via 100% tie-off between lanyards connectors and designated MEWP anchorage point at all times"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 199,
                        additionalControls: [
                            "Close supervision to prevent occurrence",
                            "Supervisor/WAH supervisor to ensure compliance"
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
                    id: 200,
                    name: "Standing on guardrails of MEWP",
                    riskEvaluation: {
                        id: 200,
                        possiblePollutionHealthAffection: "Possible fatality",
                        existingImpactControls: [
                            "Strictly no standing on guardrails of MEWP"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 200,
                        additionalControls: [
                            "Close supervision to prevent occurrence",
                            "Supervisor/WAH supervisor to ensure compliance"
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
                    id: 201,
                    name: "Tools or object fall from height by mishandling",
                    riskEvaluation: {
                        id: 201,
                        possiblePollutionHealthAffection: "Serious bodily injuries",
                        existingImpactControls: [
                            "Proper PPE (safety shoes, helmet) to be worn",
                            "Store tools and materials in a secured manner on the lift platform",
                            "No concurrent work to be carried out directly below or in the vicinity of the MEWP"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 201,
                        additionalControls: [
                            "Close supervision",
                            "Barricade/cordon off work area to prevent unauthorized entry"
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
                    id: 202,
                    name: "Falling from height",
                    riskEvaluation: {
                        id: 202,
                        possiblePollutionHealthAffection: "Serious bodily injury",
                        existingImpactControls: [
                            "Only trained operator is allowed to operate the lift",
                            "Safety harness provided"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 202,
                        additionalControls: [
                            "Regular review on existing control measures",
                            "Training – safe work procedure on the use of scissor and boom lifts"
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