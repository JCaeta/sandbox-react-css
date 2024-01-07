import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment6 = {
    id: 6,
    name: 'CSE-RA-01-01 Installation of Electrical System (2022)',
    process: {
        id: 6,
        name: 'Installation of Electrical System',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-01 / Rev 01',
    raMembers: [
        {
            id: 16, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 17, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 18, 
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
            id: 24,
            name: 'Operation of Electrical Tools',
            hazards: [
                {
                    id: 61,
                    name: "Not insulated/exposed parts",
                    riskEvaluation: {
                        id: 61,
                        possiblePollutionHealthAffection: "Electrocution to worker",
                        existingImpactControls: [
                            "Check the condition of the cable before starting work",
                            "Provision of RCCB",
                            "Wear Proper PPE while working on Electrical System"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 61,
                        additionalControls: [
                            "Regular toolbox meeting conducted & discussed on electrical safety",
                            "Use battery-operated tools where possible"
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
                    id: 62,
                    name: "Rugged use/Improper storage",
                    riskEvaluation: {
                        id: 62,
                        possiblePollutionHealthAffection: "Electrocution to worker",
                        existingImpactControls: [
                            "Equipment should be properly stored, protected, and kept daily",
                            "Wear Proper PPE while working on Electrical System"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 62,
                        additionalControls: [
                            "Conduct toolbox meeting/training on emergency preparedness"
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
                    id: 63,
                    name: "Wire on floor",
                    riskEvaluation: {
                        id: 63,
                        possiblePollutionHealthAffection: "Trip and fall causing sprains and abrasions",
                        existingImpactControls: [
                            "Wear Proper PPE while working on Electrical System"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 63,
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
        },
        {
            id: 25,
            name: 'Operation of mechanical tools',
            hazards: [
                {
                    id: 64,
                    name: "Sharp objects",
                    riskEvaluation: {
                        id: 64,
                        possiblePollutionHealthAffection: "Cuts to body and limbs of working personnel",
                        existingImpactControls: [
                            "Handle with care while operating sharp objects",
                            "Worker to wear Proper PPE"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 64,
                        additionalControls: [
                            "Regular inspection to ensure the existing risk control is valid"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 65,
                    name: "Tools fall from height by mishandling",
                    riskEvaluation: {
                        id: 65,
                        possiblePollutionHealthAffection: "Foot injury (contusions) to personnel",
                        existingImpactControls: [
                            "Safe work procedure / Proper PPE should be provided"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 65,
                        additionalControls: [
                            "Regular inspection to ensure the existing risk control is valid"
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
        },
        {
            id: 26,
            name: 'Working at height',
            hazards: [
                {
                    id: 66,
                    name: "Falling objects/materials",
                    riskEvaluation: {
                        id: 66,
                        possiblePollutionHealthAffection: "Serious injury or death",
                        existingImpactControls: [
                            "PPE - Safety boots, safety helmets, and gloves/Provide toe-board"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 66,
                        additionalControls: [
                            "Implement CSE-SWP-11 Electrical Safety",
                            "Conduct regular toolbox meeting/safety briefing"
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
                    id: 67,
                    name: "Workers fall from height",
                    riskEvaluation: {
                        id: 67,
                        possiblePollutionHealthAffection: "Serious injury or death",
                        existingImpactControls: [
                            "PPE - safety belts, safety helmets",
                            "Provide proper access"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 67,
                        additionalControls: [
                            "Conduct regular toolbox meeting/safety briefing"
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
            id: 27,
            name: 'Installation',
            hazards: [
                {
                    id: 68,
                    name: "Exposure to live currents",
                    riskEvaluation: {
                        id: 68,
                        possiblePollutionHealthAffection: "Electrocution to worker",
                        existingImpactControls: [
                            "PPE - Rubber hand glove, safety boots",
                            "Insulate live part where possible",
                            "LEW supervision"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 68,
                        additionalControls: [
                            "All workers must be trained before commencement of work",
                            "Conduct regular toolbox meeting/safety briefing"
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
