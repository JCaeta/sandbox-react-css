import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment17 = {
    id: 17,
    name: 'CSE-RA-02-01 Manual Handling & Storage of Materials (2022)',
    process: {
        id: 17,
        name: 'Drilling works',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-09 / Rev 01',
    raMembers: [
        {
            id: 49,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 50,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 51,
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
            name: 'Connect the drilling machine to the electrical socket',
            hazards: [
                {
                    id: 160,
                    name: "Switch accidentally left in start position",
                    riskEvaluation: {
                        id: 160,
                        possiblePollutionHealthAffection: "Serious cut / Laceration to limbs and body",
                        existingImpactControls: [
                            "User to check switch position before connecting power",
                            "Keep clear from rotating part"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 160,
                        additionalControls: [
                            "Keep clear from rotating part"
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
                    id: 161,
                    name: "Contact with damaged wires",
                    riskEvaluation: {
                        id: 161,
                        possiblePollutionHealthAffection: "Electric Shock to users which may result in fatality to personnel",
                        existingImpactControls: [
                            "All electric cables are maintained in good condition and free from defects."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 161,
                        additionalControls: [
                            "Regular reminder on safe work procedures during safety briefing.",
                            "Regular inspection of work areas.",
                            "Regular enforcement on safety rules and regulations among workers."
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
            name: 'Operation & Maintenance of Drilling machine',
            hazards: [
                {
                    id: 162,
                    name: "Sharp objects",
                    riskEvaluation: {
                        id: 162,
                        possiblePollutionHealthAffection: "Cut, laceration on limbs / person directly or indirectly involved in the operation",
                        existingImpactControls: [
                            "Workers need to wear hand gloves to prevent hand injury."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 162,
                        additionalControls: [
                            "Regular inspection to ensure the existing control is valid"
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
                    id: 163,
                    name: "Tools or object fall from height by miss-handling",
                    riskEvaluation: {
                        id: 163,
                        possiblePollutionHealthAffection: "Contusion / bruise to foot / body",
                        existingImpactControls: [
                            "Handle with care.",
                            "Wear safety shoes."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 163,
                        additionalControls: [
                            "Regular inspection to ensure the existing control is valid"
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
                    id: 164,
                    name: "Generation of Dust",
                    riskEvaluation: {
                        id: 164,
                        possiblePollutionHealthAffection: "Breathing difficulty",
                        existingImpactControls: [
                            "Provision of the nose mask"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 164,
                        additionalControls: [
                            "Training provided on Importance of PPE"
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
                    id: 165,
                    name: "Exposure to Rotating parts of machines",
                    riskEvaluation: {
                        id: 165,
                        possiblePollutionHealthAffection: "Cut, laceration on limbs / person directly or indirectly involved in the operation",
                        existingImpactControls: [
                            "Appoint qualified personnel / provision of training before commencing the work",
                            "Worker must wear hand gloves & safety glasses"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 165,
                        additionalControls: [
                            "Provision of safeguard to machine rotating parts"
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
                    id: 166,
                    name: "Flying Particles",
                    riskEvaluation: {
                        id: 166,
                        possiblePollutionHealthAffection: "Cuts / bruise to face and eyes",
                        existingImpactControls: [
                            "Wear the Safety glass"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 166,
                        additionalControls: [
                            "Provision of safeguard to protect against flying particles"
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
                    id: 167,
                    name: "Live electrical cable",
                    riskEvaluation: {
                        id: 167,
                        possiblePollutionHealthAffection: "Electric shock to personnel / possibly fatal",
                        existingImpactControls: [
                            "Appoint qualified personnel, provision of training before commencing the work, refer to SWP"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 167,
                        additionalControls: [
                            "Replacement of electric drilling machine with battery-operated drilling machine"
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