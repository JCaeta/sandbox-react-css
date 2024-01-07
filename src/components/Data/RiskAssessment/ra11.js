import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment11 = {
    id: 11,
    name: 'CSE-RA-01-05 Commissioning and Testing of Electrical Systems (2022)',
    process: {
        id: 11,
        name: 'Commissioning and Testing of Electrical Systems',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-05 / Rev 01',
    raMembers: [
        {
            id: 31, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 32, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 33, 
            name: "Ler Shi Er",
            employeeId: 52,
            isLeader: false,
            signature: signature3,
            designation: []
        },,
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
            id: 34,
            name: 'Ensuring the wirings are connected correctly.',
            hazards: [
                {
                    id: 96,
                    name: "Electrical shock, sparking",
                    riskEvaluation: {
                        id: 96,
                        possiblePollutionHealthAffection: "Electrocution/Electric shock/possibly fatal",
                        existingImpactControls: [
                            "To do visual check and make sure all the wirings are firmly connected and phasing are connected correctly.",
                            "To use insulation test on the different phase to make sure they are connected wrongly."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 96,
                        additionalControls: [
                            "Buddy system, so that both support each other."
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
            ]
        },
        {
            id: 35,
            name: 'Commissioning of Electrical System',
            hazards: [
                {
                    id: 97,
                    name: "Electrical shock",
                    riskEvaluation: {
                        id: 97,
                        possiblePollutionHealthAffection: "Electrocution/Electric shock/possibly fatal",
                        existingImpactControls: [
                            "Ensure Phase sequence is tested for 3 phase and it has a clockwise rotation.",
                            "Proper bonding to all the earthing requirements as per SS638.",
                            "Electricity to be turned on in the presence of the LEW and approval."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 97,
                        additionalControls: [
                            "Function test to be done and ensure that all the protection devices are working properly.",
                            "To follow the instruction of the LEW request and check if any."
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