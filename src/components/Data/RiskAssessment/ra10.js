import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment10 = {
    id: 10,
    name: 'CSE-RA-01-06 Switchboard Inspection (2022)',
    process: {
        id: 10,
        name: 'Switchboard Inspection',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-06 / Rev 01',
    raMembers: [
        {
            id: 28, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 29, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 30, 
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
            id: 33,
            name: 'Switchboard Inspection.',
            hazards: [
                {
                    id: 92,
                    name: "Struck by sharp edges of the switchboard",
                    riskEvaluation: {
                        id: 92,
                        possiblePollutionHealthAffection: "Cuts/lacerations to hand, leg, and body",
                        existingImpactControls: [
                            "Wear safety boots and gloves when handling the switchboard."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 92,
                        additionalControls: [
                            "Regular review of existing controls."
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
                    id: 93,
                    name: "Tripping Hazard Slip or fall on the level",
                    riskEvaluation: {
                        id: 93,
                        possiblePollutionHealthAffection: "Fall Injury causing sprains/abrasions",
                        existingImpactControls: [
                            "To wear safety boots and to ensure the working environment is well-lighted."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 93,
                        additionalControls: [
                            "Regular review of existing controls."
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
                    id: 94,
                    name: "Incorrect wiring",
                    riskEvaluation: {
                        id: 94,
                        possiblePollutionHealthAffection: "Electrical shock/Electrocution",
                        existingImpactControls: [
                            "Insulation test on the internal cables between phase(s) to neutral and earth and phase(s) to phase(s).",
                            "Visual inspection to ensure that the wirings and connections are wired correctly."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 94,
                        additionalControls: [
                            "Ensure working in a buddy system."
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
                    id: 95,
                    name: "Contact with 'live' electrical parts",
                    riskEvaluation: {
                        id: 95,
                        possiblePollutionHealthAffection: "Electric shock, electrical burns, electrocution/possibly fatal",
                        existingImpactControls: [
                            "LEW to be present to test and ensure the board is safe to be switched on.",
                            "Function test to be conducted to ensure all the safety apparatus are functioning."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 95,
                        additionalControls: [
                            "Proper equipment to be used to ensure proper tests are conducted. Eg. Phase sequence test, Multi-meter."
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