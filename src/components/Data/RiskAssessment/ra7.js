import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment7 = {
    id: 7,
    name: 'CSE-RA-01-09 Drilling Works (2022)',
    process: {
        id: 7,
        name: 'Drilling Works',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-09 / Rev 01',
    raMembers: [
        {
            id: 19, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 20, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 21, 
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
            id: 28,
            name: 'Connect the drilling machine to the electrical socket ',
            hazards: [
                {
                    id: 69,
                    name: "Connect the drilling machine to the electrical socket",
                    riskEvaluation: {
                        id: 69,
                        possiblePollutionHealthAffection: "Switch accidentally left in start position",
                        existingImpactControls: [
                            "User to check switch position before connecting power"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 69,
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
                    id: 70,
                    name: "Contact with damaged wires",
                    riskEvaluation: {
                        id: 70,
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
                        id: 70,
                        additionalControls: [
                            "Regular reminder on safe work procedures during safety briefing.",
                            "Regular inspection of work areas.",
                            "Regular enforcement of safety rules and regulations among workers."
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
            id: 29,
            name: 'Operation & Maintenance of Drilling machine',
            hazards: [
                {
                    id: 71,
                    name: "Operation & Maintenance of Drilling machine",
                    riskEvaluation: {
                        id: 71,
                        possiblePollutionHealthAffection: "Sharp objects - Cut, laceration on limbs / person directly or indirectly involved in the operation",
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
                        id: 71,
                        additionalControls: [
                            "Regular inspection to ensure the existing control is valid."
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
                    id: 72,
                    name: "Tools or object fall from height by mishandling",
                    riskEvaluation: {
                        id: 72,
                        possiblePollutionHealthAffection: "Contusion/bruise to foot/body",
                        existingImpactControls: [
                            "Handle with care.",
                            "Wear the safety shoe."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 72,
                        additionalControls: [
                            "Regular inspection to ensure the existing control is valid."
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
                    id: 73,
                    name: "Generation of Dust",
                    riskEvaluation: {
                        id: 73,
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
                        id: 73,
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
                    id: 74,
                    name: "Exposure to Rotating parts of machines",
                    riskEvaluation: {
                        id: 74,
                        possiblePollutionHealthAffection: "Cut, laceration on limbs/person directly or indirectly involved in the operation",
                        existingImpactControls: [
                            "Appoint qualified personnel/provision of training before commencing the work",
                            "Worker must wear hand gloves & safety glasses"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 74,
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
                    id: 75,
                    name: "Flying Particles",
                    riskEvaluation: {
                        id: 75,
                        possiblePollutionHealthAffection: "Cuts/bruise to face and eyes",
                        existingImpactControls: [
                            "Wear the Safety glasses"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 75,
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
                    id: 76,
                    name: "Live electrical cable",
                    riskEvaluation: {
                        id: 76,
                        possiblePollutionHealthAffection: "Electric shock to personnel/possibly fatal",
                        existingImpactControls: [
                            "Appoint qualified personnel, provision of training before commencing the work, refer SWP"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 76,
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