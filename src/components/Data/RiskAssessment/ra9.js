import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment9 = {
    id: 9,
    name: 'CSE-RA-01-07 Use of Temporary Generator Set (2022)',
    process: {
        id: 9,
        name: 'Use of Temporary Generator Set',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-07 / Rev 01',
    raMembers: [
        {
            id: 25, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 26, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 27, 
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
            id: 32,
            name: 'Use of temporary generator set',
            hazards: [
                {
                    id: 89,
                    name: "Badly insulated/exposed parts",
                    riskEvaluation: {
                        id: 89,
                        possiblePollutionHealthAffection: "Electrocution/Electric shocks/possibly fatal",
                        existingImpactControls: [
                            "All electrical tools to be checked that there is no exposed parts.",
                            "Electrical circuits from the generator must be protected by RCCB.",
                            "Earthing points must be installed to the earth point of the generator."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 89,
                        additionalControls: [
                            "Workers to report worn out or damaged wires or tools.",
                            "Workers briefed on the importance of safe work procedures for the operation of electrical equipment."
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
                    id: 90,
                    name: "Noise generated",
                    riskEvaluation: {
                        id: 90,
                        possiblePollutionHealthAffection: "Noise-induced Deafness",
                        existingImpactControls: [
                            "Proper PPE (Ear plugs) should be worn when working near the generator."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 90,
                        additionalControls: [
                            "Safety briefing to educate workers on hearing protection."
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
                    id: 91,
                    name: "Smoke emitted",
                    riskEvaluation: {
                        id: 91,
                        possiblePollutionHealthAffection: "Ill Health/asphyxiation",
                        existingImpactControls: [
                            "Proper PPE (Mask) should be worn when working near the generator.",
                            "Ensure proper maintenance of the generator."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 91,
                        additionalControls: [
                            "Conduct safety briefing."
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