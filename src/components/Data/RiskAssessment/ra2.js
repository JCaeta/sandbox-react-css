import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment2 = {
    id: 2,
    name: 'CSE-RA-04-03 Housekeeping (2022)',
    process: {
        id: 2,
        name: 'Housekeeping',
        location: 'Office / Workplace',
    },
    referenceNumber: 'CSE-RA-04-03 / Rev 01',
    raMembers: [
        {
            id: 4,
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 5,
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 6,
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
            id: 11,
            name: 'Housekeeping',
            hazards: [
                {
                    id: 21,
                    name: 'Protruding materials',
                    riskEvaluation: {
                        id: 21,
                        possiblePollutionHealthAffection: 'Cuts, tripping/ bruises to workers',
                        existingImpactControls: [
                            'Ensure path of movement is not blocked by materials, tools etc'
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 3*2
                        }
                    },
                    riskControl: {
                        id: 21,
                        additionalControls: [
                            'Proper housekeeping at site everyday',
                            'Regular inspection'
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3*1
                        },
                        implementationPerson: 'Admin-in-charge / Site Foreman',
                        dueDate: '30/09/2020',
                        remarks: ''
                    }
                },
                {
                    id: 22,
                    name: 'Messy working area/ obstructed pathway',
                    riskEvaluation: {
                        id: 22,
                        possiblePollutionHealthAffection: 'Worker trip and Fall',
                        existingImpactControls: [
                            'Waste removal by daily basis',
                            'All materials/ tools to be kept away from working area/ path way',
                            'PPE'
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 3*2
                        }
                    },
                    riskControl: {
                        id: 22,
                        additionalControls: [
                            'Proper housekeeping at site everyday',
                            'Regular inspection'
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3*1
                        },                        
                        implementationPerson: 'Admin-in-charge / Site Foreman',
                        dueDate: '30/09/2020',
                        remarks: ''
                    }
                },
                {
                    id: 23,
                    name: 'Falling object',
                    riskEvaluation: {
                        id: 23,
                        possiblePollutionHealthAffection: 'Worker trip and Fall',
                        existingImpactControls: [
                            'Waste removal by daily basis',
                            'Unused tools to be kept in a toolbox',
                            'Materials should be stack properly',
                            'PPE - Safety helmet'
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 3*2
                        }
                    },
                    riskControl: {
                        id: 23,
                        additionalControls: [
                            'Proper housekeeping at site everyday',
                            'Regular inspection'
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3*1
                        },                        
                        implementationPerson: 'Admin-in-charge / Site Foreman',
                        dueDate: '30/09/2020',
                        remarks: ''
                    }
                }
            ]
        }
    ]
}














