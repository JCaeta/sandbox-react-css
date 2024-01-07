import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment29 = {
    id: 29,
    name: 'CSE-RA-06-01 Prevention of Covid-19 (2022)',
    process: {
        id: 29,
        name: 'Prevention of Covid-19',
        location: 'Office / Workplace',
    },
    referenceNumber: 'CSE-RA-06-01 / Rev 01',
    raMembers: [
        {
            id: 84,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 85,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 86,
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
            name: 'All types of work activities involves humans',
            hazards: [
                {
                    id: 309,
                    name: "Coronavirus (COVID-19) General",
                    riskEvaluation: {
                        id: 309,
                        possiblePollutionHealthAffection: "Illness / Fatality",
                        existingImpactControls: [
                            "Hand Sanitizer available in office and lift",
                            "Employees to put on surgical mask when working in the workplace if needed",
                            "Clean & disinfect workplace on a regular basis",
                            "Minimize physical meeting and replace with telecommunication and tele-conference whenever possible",
                            "Only authorized workers can access the office"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 309,
                        additionalControls: [
                            "Educating employees on infection control and good personal hygiene",
                            "Close monitoring of the health status of the employee",
                            "Regular reminders to employees on good hygiene practices",
                            "Close monitoring and update employees on the latest updates & advisories from MOH applicable to them/work"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 310,
                    name: "Coronavirus (COVID-19) Employee(s) who have contacted Covid-19",
                    riskEvaluation: {
                        id: 310,
                        possiblePollutionHealthAffection: "Illness / Fatality",
                        existingImpactControls: [
                            "Employees confirmed as contacted Covid-19 will be treated as sick",
                            "Workplace disinfection as soon as possible",
                            "Inform all employees about the confirmed cases in the workplace and identify the employees who need to quarantine",
                            "Employees with close contact should be quarantined under Government Quarantine Facilities"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 310,
                        additionalControls: [
                            "Educating employees on COVID-19 knowledge about identifying the symptoms and self-isolation measures",
                            "Close monitoring of the health status of the employee (e.g., medical leave)",
                            "Regular reminders to employees on good hygiene practices and monitoring health"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Travelling',
            hazards: [
                {
                    id: 311,
                    name: "Coronavirus (COVID-19) Travelling abroad",
                    riskEvaluation: {
                        id: 311,
                        possiblePollutionHealthAffection: "Infection of Covid-19",
                        existingImpactControls: [
                            "Employees who develop symptoms (i.e. fever, respiratory symptoms) should wear a mask and seek medical attention immediately, and avoid contact with others"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 311,
                        additionalControls: [
                            "Close monitoring on the latest update & advisory from MOH"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 312,
                    name: "Coronavirus (COVID-19) Returning from travelling abroad",
                    riskEvaluation: {
                        id: 312,
                        possiblePollutionHealthAffection: "Infection of Covid-19/ get severe pneumonia caused by Covid-19",
                        existingImpactControls: [
                            "Employees who develop symptoms (i.e. fever, respiratory symptoms) should wear a mask and seek medical attention immediately, and avoid contact with others"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 312,
                        additionalControls: [
                            "Close monitoring on health status of the employee",
                            "Close monitoring on the latest update & advisory from MOH",
                            "Regular review of existing risk controls"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }
            ]
        },
        {
            id: -1,
            name: 'Visitors to office',
            hazards: [
                {
                    id: 313,
                    name: "COVID-19 carrier",
                    riskEvaluation: {
                        id: 313,
                        possiblePollutionHealthAffection: "Spreading Covid-19",
                        existingImpactControls: [
                            "Monitoring visitors’ body temperature before they enter the site",
                            "Compulsory for visitors to wear masks",
                            "Require visitors to sanitize their hands",
                            "Maintain safe distance"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 313,
                        additionalControls: [
                            "Close supervision of visitors at a safe distance",
                            "If the visitor appears to have suspected symptoms during the visit, stop the visit immediately and call an ambulance for further assessment",
                            "Defer any visit when possible"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-charge / Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        }
    ]
}
