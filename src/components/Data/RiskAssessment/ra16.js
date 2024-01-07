import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment16 = {
    id: 16,
    name: 'CSE-RA-01-10 Cutting Works (2022)',
    process: {
        id: 16,
        name: 'Cutting works',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-10 / Rev 01',
    raMembers: [
        {
            id: 46,
            name: 'Lee Han Pin',
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 47,
            name: 'Chen Kok Leong',
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designations: ['Project Coordinator']
        },
        {
            id: 48,
            name: 'Ler Shi Er',
            employeeId: 52,
            isLeader: false,
            signature: signature3,
            designations: []
        }
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
        name: "Vicent Lee"
    },
    originalAssessmentDate: '02/06/2020',
    lastReviewDate: '01/05/2022',
    nextReviewDate: '30/04/2025',
    raTasks: [],
    workActivities: [
        {
            id: -1,
            name: 'Cutting Machine Operation & Maintenance',
            hazards: [
                {
                    id: 153,
                    name: "Sharp Object",
                    riskEvaluation: {
                        id: 153,
                        possiblePollutionHealthAffection: "Cut, laceration on limbs to person directly or indirectly involved in the operation",
                        existingImpactControls: [
                            "Workers need to wear hand gloves to prevent hand injury.",
                            "Only trained workers to use cutting machine."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 153,
                        additionalControls: [
                            "Regular review of existing control measures."
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
                    id: 154,
                    name: "Fumes Generation",
                    riskEvaluation: {
                        id: 154,
                        possiblePollutionHealthAffection: "Breathing difficulty",
                        existingImpactControls: [
                            "Proper PPE should be provided.",
                            "Ensure worksite is well ventilated"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 154,
                        additionalControls: [
                            "Training on proper usage of PPE."
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
                    id: 155,
                    name: "Fire Accident",
                    riskEvaluation: {
                        id: 155,
                        possiblePollutionHealthAffection: "Fatal injury / Death",
                        existingImpactControls: [
                            "Ensure no flammable materials around the working area.",
                            "Only trained workers to use cutting machine."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 155,
                        additionalControls: [
                            "Conduct safety meeting monthly once & discuss fire safety."
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
                    id: 156,
                    name: "Flying Particles",
                    riskEvaluation: {
                        id: 156,
                        possiblePollutionHealthAffection: "Cuts / bruise to face and eyes",
                        existingImpactControls: [
                            "Provision of safeguard to protect against flying particles.",
                            "Wear safety goggles."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 156,
                        additionalControls: [
                            "Regular review of existing control measures."
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
                    id: 157,
                    name: "Live Electrical Cable",
                    riskEvaluation: {
                        id: 157,
                        possiblePollutionHealthAffection: "Electric shock to personnel / possibly fatal",
                        existingImpactControls: [
                            "Measures made for workers to report worn out and damaged wires, which will be immediately replaced.",
                            "Training on electrical safety for all workers."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 157,
                        additionalControls: [
                            "Briefing to all workers before commencing the work."
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
                    id: 158,
                    name: "Spark & Heat",
                    riskEvaluation: {
                        id: 158,
                        possiblePollutionHealthAffection: "Burns",
                        existingImpactControls: [
                            "Proper PPE has been provided to relevant personnel."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 158,
                        additionalControls: [
                            "Regularly review existing control measures."
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
                    id: 159,
                    name: "Generation of Noise",
                    riskEvaluation: {
                        id: 159,
                        possiblePollutionHealthAffection: "Noise-induced deafness",
                        existingImpactControls: [
                            "Provision of PPE, workers must wear earplugs."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 159,
                        additionalControls: [
                            "Regular toolbox meeting & discussed on the importance of hearing protection."
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
