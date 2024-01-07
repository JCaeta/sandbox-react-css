import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment19 = {
    id: 19,
    name: 'CSE-RA-01-15 Handling of Chemicals (2022)',
    process: {
        id: 19,
        name: 'Handling of Chemicals',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-15 / Rev 01',
    raMembers: [
        {
            id: 55,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 56,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 57,
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
            signature: '',
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
            name: 'Handling of Chemicals',
            hazards: [
                {
                    id: 179,
                    name: "Fumes from Chemicals",
                    riskEvaluation: {
                        id: 179,
                        possiblePollutionHealthAffection: "Breathing / respiratory problem",
                        existingImpactControls: [
                            "Worker must wear the nose mask",
                            "Follow the MSDS (Material Safety Data Sheet)"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 179,
                        additionalControls: [
                            "Suitable & sufficient fire extinguishers should be placed at the storage/working areas.",
                            "Provide proper mechanical ventilation if necessary"
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
                    id: 180,
                    name: "Environmental Hazard - Land / Water Pollution",
                    riskEvaluation: {
                        id: 180,
                        possiblePollutionHealthAffection: "Land / Water Pollution",
                        existingImpactControls: [
                            "Workers were informed to handle the chemicals carefully & store separately"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 180,
                        additionalControls: [
                            "Provide trip tray for chemicals to avoid spillage on the ground."
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
                    id: 181,
                    name: "Improper storage & arrangement",
                    riskEvaluation: {
                        id: 181,
                        possiblePollutionHealthAffection: "Injury to person(s) due to trip & fall or falling objects from height causing contusions / bruises",
                        existingImpactControls: [
                            "Neat arrangement & stacking of materials i.e. proper housekeeping, and materials not to be stored at edge of building / pit & slope"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 181,
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
                    id: 182,
                    name: "Chemical exposure to skin",
                    riskEvaluation: {
                        id: 182,
                        possiblePollutionHealthAffection: "Skin irritation to working personnel",
                        existingImpactControls: [
                            "Worker must wear the hand gloves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 182,
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
        }
    ]
}
