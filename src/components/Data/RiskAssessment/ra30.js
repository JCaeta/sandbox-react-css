import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment30 = {
    id: 30,
    name: 'CSE-RA-05-01 Terror Threats (2022)',
    process: {
        id: 30,
        name: 'Terror Threat',
        location: 'Office, Workplace',
    },
    referenceNumber: 'CSE-RA-05-01 / Rev 01',
    raMembers: [
        {
            id: 87,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 88,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 89,
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
            name: 'Suspicious person',
            hazards: [
                {
                    id: 314,
                    name: "Bombing/ Suicide bombing",
                    riskEvaluation: {
                        id: 314,
                        possiblePollutionHealthAffection: "Fatal & injury to workers",
                        existingImpactControls: [
                            "Vigilance: Staying alert to every present security threat",
                            "Train workforce to be alert to unusual behavior such as loitering for an extended period without valid reasons",
                            "Only workers in the approved namelist can enter the job site"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 314,
                        additionalControls: [
                            "Workers to take the initiative to inform security guard/foreman of suspicious persons",
                            "Install CCTV at building entrance"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 315,
                    name: "Armed attack with weapon, Chemical spraying, Biological agents (e.g., release of toxic gas)",
                    riskEvaluation: {
                        id: 315,
                        possiblePollutionHealthAffection: "Fatal & injury to workers",
                        existingImpactControls: [
                            "Vigilance: Staying alert to every present security threat",
                            "Train workforce to be alert to unusual behavior",
                            "Following the principle of Run, Hide and Tell",
                            "Conduct first aid on casualties when safe",
                            "Prevent unauthorized entry",
                            "Inform the emergency contact numbers"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 315,
                        additionalControls: [
                            "Pre-identify safe hiding places",
                            "Install CCTV at building entrance",
                            "Bag checking"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Unknown/ unauthorised vehicle',
            hazards: [
                {
                    id: 316,
                    name: "Vehicle ramming attack/ Contain explosive",
                    riskEvaluation: {
                        id: 316,
                        possiblePollutionHealthAffection: "Fatal & injury to workers",
                        existingImpactControls: [
                            "Vigilance to any vehicle abandoned abruptly by the driver/vehicle with a foreign object",
                            "Only allow registered vehicles to enter the job site",
                            "Drivers should never leave their vehicles and keys unattended",
                            "Notify the police immediately if vehicles are missing or stolen"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 316,
                        additionalControls: [
                            "Workers to take the initiative to inform security guard/foreman",
                            "Fabricate barriers",
                            "Awareness on 'Run, Hide, Tell'"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Suspicious baggage/ package',
            hazards: [
                {
                    id: 317,
                    name: "May contain explosive/ biological/ chemical threat",
                    riskEvaluation: {
                        id: 317,
                        possiblePollutionHealthAffection: "Fatal & injury to workers",
                        existingImpactControls: [
                            "Vigilance: Staying alert to every present security threat",
                            "Train workforce to be alert to unusual items in surroundings"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 317,
                        additionalControls: [
                            "Good housekeeping to make the site neat so that it's easy to identify any unnecessary object"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }
            ]
        },
        {
            id: -1,
            name: 'Workers promoting terrorist group/ sharing religion sensitive video',
            hazards: [
                {
                    id: 318,
                    name: "Workers taking part in terrorist activities",
                    riskEvaluation: {
                        id: 318,
                        possiblePollutionHealthAffection: "Fatal & injury to workers",
                        existingImpactControls: [
                            "Vigilance: Staying alert to every present security threat",
                            "Train workforce to be alert to unusual behavior such as:",
                            "Expressing belief that violence is justified.",
                            "Showing support or sympathy for terrorists and their causes"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 318,
                        additionalControls: [
                            "Promote racial harmony in the company",
                            "Take note of workers' behavior change, absence pattern, and country traveled",
                            "Cohesion: Engage the workforce to stay united and cherish-safeguard Singapore’s multi-racial and multi-religious social harmony",
                            "Resilience: Help the workforce to stay resilient, strong, and bounce back quickly in a crisis"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }                
            ]
        }
    ]
}
